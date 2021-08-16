import React from 'react'
import { useState, useEffect, useContext } from 'react'
import { Route, Link } from 'react-router-dom'
import axios from 'axios';
import M from 'materialize-css'
import SearchBar from './SearchBar';
import { UserContext } from '../App.js'
import {API} from '../App'

const Explore = ({match}) => {

    const { userData, setUserData } = useContext(UserContext)

    const [profileFeed, setProfileFeed] = useState([])

    useEffect(() => {
        axios.get(`${API}`)
        .then(res => setProfileFeed(res.data))
        .catch(console.err)
      }, [])


    return (
        <div className="search-container">
            <UserContext.Provider value={{ userData, setUserData }}> 
            {userData.user ? (
            <div>
                <h4>Search</h4>
                <SearchBar placeholder="Enter..." data={profileFeed}/>
            </div>
            ) : 
            (
            <div>   
                <p>Please Log In: <Link to="/login">Login</Link></p>
            </div>
            )
            }
            </UserContext.Provider> 
        </div>
    )
}

export default Explore
