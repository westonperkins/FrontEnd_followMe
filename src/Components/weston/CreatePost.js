import React, {useState, useContext, useEffect} from 'react'
import axios from 'axios'
import {UserContext} from '../../App'
import Errors from './Errors'



const CreatePost = () => {
    const {userData, setUserData} = useContext(UserContext)

    const initialState = {
        instance: "",
        imageUpload: ""
    }
    const [post, setPost] = useState(initialState)

    const [errorMsg, setErrorMsg] = useState()

    const handleChange = (e) => {
        setPost({ ...post, [e.target.id]: e.target.value })
        console.log(post)
    }

    const handleSubmit =  (e) => {
        e.preventDefault()
      
            const newPost = {
                instance: post.instance,
                imageUpload: post.imageUpload,
                postedBy: userData.user.name
            }
    
            axios.post('https://followmeapplicationapi.herokuapp.com/posts/newpost/', newPost, {
                headers: {"auth-token": userData.token}
            })
            .then((window.location = "/posts/days"))
            .then(res => console.log(res.data))
            
            console.log(post)

            setPost({
                instance: "",
                imageUpload: "",
            })
    }

    return (
        <div className= "create-post-container">
            <h2>Add Post</h2>
            <Errors msg={errorMsg}/>
            <div class="row">
            <form class="col s12">
            <div class="row">
                <div class="input-field col s6">
                <label htmlFor="instance">New Post</label>
                <input type="text" id="instance" name="instance" onChange={handleChange} value={post.instance} required/>
                </div>
                <button onClick={handleSubmit} type="submit" id="post-btn">Post</button>
            </div>
            </form>
            </div>
        </div>
    )
}

export default CreatePost
