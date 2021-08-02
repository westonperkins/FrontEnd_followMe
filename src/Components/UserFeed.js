import React from 'react'
import { useState, useEffect } from 'react'
import axios from 'axios';
import NewPost from './NewPost';
import { Route, Link } from 'react-router-dom'
import M from 'materialize-css'
import EditPost from './EditPost';

const UserFeed = () => {
    const [posts, setPosts] = useState([])

    // useEffect(() => {
    //     fetchAllPosts()
    // }, [])

    // const fetchAllPosts = () => {
    //     fetch('http://localhost:5000/posts/days')
    //       .then(res => res.json())
    //       .then(res => {
    //         console.log(res)
    //         setPosts(res)
    //       })
    //       .catch(err => {
    //         console.error(err);
    //       });
    //   }

    const userPosts = useEffect(() => {
        axios.get('http://localhost:5000/posts/days', {
            headers: {"auth-token": localStorage.getItem("auth-token")}
        })
        .then(res => setPosts(res.data))
    }, [])
    
    function deletePost(_id) {
        axios.delete(`http://localhost:5000/posts/${_id}`)
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