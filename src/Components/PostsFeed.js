import React from 'react'
import { useState, useEffect, useContext } from 'react'
import axios from 'axios';
import NewPost from './NewPost';
import { Route, Link } from 'react-router-dom'
import M from 'materialize-css'
import EditPost from './EditPost';
import { UserContext } from '../App.js'

const PostsFeed = () => {
    const { userData, setUserData } = useContext(UserContext)

    const [posts, setPosts] = useState([])
    // const userPosts =
    useEffect(() => {
        axios.get('https://followmeapplicationapi.herokuapp.com/posts/days', {
            headers: {"auth-token": localStorage.getItem("auth-token")}
        })
        .then(res => setPosts(res.data))
    }, [])
    
    
    let allPosts = posts.map(post => {
        return (
            <div className="post-container">
                <Link to={`/profile/${post.postedBy}`} name={post.postedBy} className="username">{post.postedBy}</Link>
                <p>{post.date}</p>
                <p className="instance-text">{post.instance}</p>
            </div>
        )
    })
    
    return (
        <div className="all-posts-container">
            <UserContext.Provider value={{ userData, setUserData }}> 
            {userData.user ? (
                <div>
                    <NewPost setPosts={setPosts} />
                    <h4>Posts</h4>
                    <div>{allPosts}</div>
                </div>
            ) :
            (
                <div>
                    <p>Please Log In: <Link to="/login">Login</Link></p>
                </div>
            )
            }
            </UserContext.Provider> 
        </div>
    )
}

export default PostsFeed


// function deletePost(_id) {
//     axios.delete(`http://localhost:5000/posts/${_id}`)
//     .then(()=> {
//         userPosts();
//     })
//     console.log(`deleted post with id of ${_id}`)
// }


                // <img src={post.imageUpload} alt=""/>
                // <div className="edit-delete-container">
                //     <button onClick={() => deletePost(post._id)} className="waves-effect waves-teal btn-flat" id="delete-btn">Delete</button>
                //     <Link to={"/posts/edit/"+post._id} className="waves-effect waves-teal btn-flat">Edit</Link>
                // </div>