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
            <div className="top-post">
            <div className="name-time">
                <Link to={`/profile/${post.postedBy}`} name={post.postedBy} className="username">{post.postedBy}</Link>
                <p className="timestamp">{new Date(post.date).toDateString()}</p>
            </div>
            </div>
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
                    <p><p>Please Log In: <Link to="/login">Login</Link></p></p>
                </div>
            )
            }
            </UserContext.Provider> 
        </div>
    )
}

export default PostsFeed
