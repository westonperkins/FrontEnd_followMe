import React from 'react'
import { useState, useEffect } from 'react'
import axios from 'axios';
import NewPost from '../NewPost';
import { Route, Link } from 'react-router-dom'
import M from 'materialize-css'

import EditPost from './EditPost';
import {API} from '../App'


const UserFeed = () => {
    const [posts, setPosts] = useState([])

    const userPosts = useEffect(() => {
        axios.get(`${API}/posts/days`, {
            headers: {"auth-token": localStorage.getItem("auth-token")}
        })
        .then(res => setPosts(res.data))
    }, [])
    
    function deletePost(_id) {
        axios.delete(`https://followmeapplicationapi.herokuapp.com/posts/${_id}`)
        .then(()=> {
            userPosts();
        })
        console.log(`deleted post with id of ${_id}`)
    }

    let allPosts = posts.map(post => {
        return (
            <div className="post-container">
                <Link to={`/profile/${post.postedBy}`} name={post.postedBy}>{post.postedBy}</Link>
                <p className="instance-text">{post.instance}</p>
                <p className="timestamp">{new Date(post.date).toDateString()}</p>
                {/* <img src={post.imageUpload} alt=""/> */}
                <div className="edit-delete-container">
                    <button onClick={() => deletePost(post._id)} className="waves-effect waves-teal btn-flat" id="delete-btn">Delete</button>
                    <Link to={"/posts/edit/"+post._id} className="waves-effect waves-teal btn-flat">Edit</Link>
                </div>
            </div>
        )
    })

    return (
        <div className="all-posts-container">
            <NewPost setPosts={setPosts} />
            <h1>Your Feed</h1>
            <div className="user-info">
                <p>timestamp</p>
            </div>
            <p>{allPosts}</p>
        </div>
    )
}

export default UserFeed