import React from 'react'
import { useState, useEffect } from 'react'
import { Route, Link } from 'react-router-dom'
import axios from 'axios'
import M from 'materialize-css'


const SearchBar = ({placeholder, data}) => {
    const [filteredData, setFilteredData] = useState([])

    const handleFilter = (e) => {
        const searchTerm = e.target.value
        const filterArr = data.filter((value) => {
            return (((value.occupation.toLowerCase().includes(searchTerm.toLowerCase()))) 
            || ((value.name.toLowerCase().includes(searchTerm.toLowerCase())))
            || ((value.position.toLowerCase().includes(searchTerm.toLowerCase())))
            || ((value.company.toLowerCase().includes(searchTerm.toLowerCase())))
            || ((value.username.toLowerCase().includes(searchTerm.toLowerCase())))
            || ((value.position.toLowerCase().includes(searchTerm.toLowerCase())))
            )
        })
        if (searchTerm === "") {
            setFilteredData([])
        } else {
            setFilteredData(filterArr);
        }
    }
    
    return (
        <div>
        <div className="search">
            <div className="input-field">
                <label className="label-icon" for="search">
                </label>
                <input id="search-bar" type="search" placeholder={placeholder} onChange={handleFilter}/>
            </div>
        </div>
            {filteredData.length != 0 && (
            <div className="dataResult">
                {filteredData.map((value, key) => {
                    return(
                        <div target="_blank">
                            <Link to={"/profile/"+value.name}>
                                <div className="card horizontal">
                                    <div className="card-stacked">
                                        <div className="card-content">
                                            <p className="name">{value.name}</p>
                                            <p className="username" >{value.username}</p>
                                            <p className="occupation-company">{value.occupation} <span id="at">at</span> {value.company}</p>
                                        </div>
                                    </div>
                                </div>
                            </Link>
                        </div>
                    )
                })
                }
            </div>
            )}
            <div className="searchInputs"></div>
        </div>
    )
}

export default SearchBar