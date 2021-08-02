import React, { useContext, useState, useEffect } from 'react'
import { UserContext } from '../../App'
import axios from 'axios'
import { Link } from 'react-router-dom'

const UserPosts = (props) => {
    console.log(props.match.params.user)

    const [ posts, setPosts ] = useState([])

    useEffect(() => {
        axios.get('http://localhost:5000/posts/days', {
            headers: {"auth-token": localStorage.getItem("auth-token")}
        })
        .then(res => setPosts(res.data))
    }, [])


    return (
        <div>
            <h4>Posts by: {props.match.params.user}</h4> 
            {posts.map((post) => {
                console.log(post)
                if(props.match.params.user === post.postedBy) {
                    return (
                        <p>{post.instance} - {post.postedBy}</p>
                    )
                } 
            })}
        </div>
    )
}

export default UserPosts
