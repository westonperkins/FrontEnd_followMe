import React, { useState, useEffect } from 'react'
// import { UserContext } from '../../App'
import axios from 'axios'
import {API} from '../../App'
import { Link } from 'react-router-dom'
import { UserContext } from '../../App'
import '../../App.css'

const UserPosts = (props) => {
    
    const [ userCredentials, setUserCredentials ] = useState([])
    
    useEffect(() => {
        axios.get(`${API}/profile/${props.match.params.user}`, {
            headers: {"auth-token": localStorage.getItem("auth-token")}
        })
        .then(res => setUserCredentials(res.data))
        // .then(res => console.log(res.data))
    }, [])
    
    const [ posts, setPosts ] = useState([])
    
    useEffect(() => {
        axios.get(`${API}/posts/days`, {
            headers: {"auth-token": localStorage.getItem("auth-token")}
        })
        .then(res => setPosts(res.data))
    }, [])

    return (
        <div className="userprof-container">
            <UserContext.Provider value={{ userCredentials, setUserCredentials }}>  
            <div>
            {/* {console.log(userCredentials + "uC")} */}
            {userCredentials.length > 0 && (<h3>{userCredentials[0].name}</h3>)}
            {userCredentials.length > 0 && (<p>@{userCredentials[0].username}</p>)}
            {userCredentials.length > 0 && (<p>Currently works at: <span><b>{userCredentials[0].company}</b></span> as a <span><b>{userCredentials[0].occupation}</b></span></p>)}
            {userCredentials.length > 0 && (<p>Works at: <span><b>{userCredentials[0].company}</b></span></p>)}
            {userCredentials.length > 0 && (<div className="profileIcons"><i className="material-icons">email</i><span><b>{userCredentials[0].email}</b></span></div>)}
            </div>
            <hr></hr>
            {/* {console.log(props)}
            {console.log(props.match.params.user)} */}
            {/* <h4>{props.match.params.user}'s Posts</h4>  */}
            {posts.map((post) => {
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
            </UserContext.Provider> 
        </div>
    )
}

export default UserPosts
