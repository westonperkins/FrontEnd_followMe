import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'

const Posts = () => {
    const [ posts, setPosts ] = useState([])

    useEffect(() => {
        axios.get('https://followmeapplicationapi.herokuapp.com/posts/days', {
            headers: {"auth-token": localStorage.getItem("auth-token")}
        })
        .then(res => setPosts(res.data))
    }, [])
    return (
        <div>
            <h3>
                Posts
            </h3>
              <ul>
                {posts.map(post => {
                    return (
                    <div>
                        <li>{post.instance}: {post.postedBy}</li>
                        <li>test</li>
                    </div>
                    )
                })}
            </ul>
        </div>
    )
}

export default Posts
