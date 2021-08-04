import React from 'react'
import { useState, useEffect } from 'react'
import { Route, Link } from 'react-router-dom'
import axios from 'axios';
import M from 'materialize-css'
import SearchBar from './SearchBar';

const Explore = ({match}) => {
    const [profileFeed, setProfileFeed] = useState([])

    useEffect(() => {
        axios.get(`https://followmeapplicationapi.herokuapp.com/`)
        .then(res => setProfileFeed(res.data))
        .catch(console.err)
      }, [])


    return (
        <div className="search-container">
            <h4>Search</h4>
            <SearchBar placeholder="Enter..." data={profileFeed}/>
        </div>
    )
}

export default Explore
