import React, { useContext, useState, useEffect } from 'react'
import { UserContext } from '../../App'
import axios from 'axios'
import { Link } from 'react-router-dom'

const UserProfile = (props) => {
    const { userData, setUserData } = useContext(UserContext)

    const [ posts, setPosts ] = useState([])

    useEffect(() => {
        axios.get('http://localhost:5000/posts/days', {
            headers: {"auth-token": localStorage.getItem("auth-token")}
        })
        .then(res => setPosts(res.data))
    }, [])

    console.log(userData.user)
    return (
            <UserContext.Provider value={{ userData, setUserData }}>  
            {userData.user ? (
            <div>
            <div>
                <h5>Username: <span>{userData.user.username}</span></h5>
                <h5>Name: <span>{userData.user.name}</span></h5>
                <h5>Email: <span>{userData.user.email}</span></h5>
                <h5>Company: <span>{userData.user.company}</span></h5>
                <h5>Occupation: <span>{userData.user.occupation}</span></h5>
                <h5>Position: <span>{userData.user.position}</span></h5>
                <h5>Hardware: <span>{userData.user.hardware}</span></h5>
                <h5>Software: <span>{userData.user.software}</span></h5>
            </div>
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
            </div>
            ) : (
                <div>
                <p>please log in</p>
                </div>
            )}
             </UserContext.Provider>    
    )
}

export default UserProfile
