import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'
import {API} from '../../App'

const Posts = () => {
    const [ posts, setPosts ] = useState([])

    useEffect(() => {
        axios.get(`${API}/posts/days`, {
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
                    </div>
                    )
                })}
            </ul>
        </div>
    )
}

export default Posts
