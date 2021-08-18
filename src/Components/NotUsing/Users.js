import React, { useState, useEffect } from 'react'
import axios from 'axios'
import {API} from '../../App'
// import { Link } from 'react-router-dom'

const Users = () => {
    const [ users, setUsers ] = useState([])

    useEffect(() => {
        axios.get(`${API}`, {
            headers: {"auth-token": localStorage.getItem("auth-token")}
        })
        .then(res => setUsers(res.data))
    }, [])
    return (
        <div>
            <h1>
                users
            </h1>
            <ul>
                {users.map(user => {
                    return (
                    <li>{user.name}</li>
                    )
                })}
            </ul>
        </div>
    )
}

export default Users

