import React, { useState, useEffect } from 'react'
// import { UserContext } from '../../App'
import axios from 'axios'
import { Link } from 'react-router-dom'

const UserPosts = (props) => {
    console.log(props.match.params.user)

    const [ posts, setPosts ] = useState([])
    // const [profiles, setProfiles] = useState([])

    useEffect(() => {
        axios.get('https://followmeapplicationapi.herokuapp.com/posts/days', {
            headers: {"auth-token": localStorage.getItem("auth-token")}
        })
        .then(res => setPosts(res.data))
    }, [])

    return (
        <div className="userprof-container">
            <div>
            <p>{props.match.params.user}'s Profile</p>
            </div>
            <h4>{props.match.params.user}'s Posts</h4> 
            {posts.map((post) => {
                // console.log(post + "post")
                if(props.match.params.user === post.postedBy) {
                    return (
                        <div className="post-container">
                        <Link to={`/profile/${post.postedBy}`} name={post.postedBy} className="username">{post.postedBy}</Link>
                        <p className="timestamp">{new Date(post.date).toDateString()}</p>
                        <hr></hr>
                        <p className="instance-text">{post.instance}</p>
                        </div>
                    )
                }  
            })}
        </div>
    )
}

export default UserPosts
