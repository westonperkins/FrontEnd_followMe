import React from 'react'
import { useState, useEffect, useContext } from 'react'
import { UserContext } from '../App'
import { Route, Link } from 'react-router-dom'
import axios from 'axios'
import M from 'materialize-css'



const SearchBar = ({placeholder, data}) => {
    const { userData, setUserData } = useContext(UserContext)
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
        <UserContext.Provider value={{ userData, setUserData }}>  
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
                            {value.name === userData.user.name ?
                              <Link to={"/userprofile/"+userData.user.name}>
                              <div className="card horizontal">
                                  <div className="card-stacked">
                                      <div className="card-content">
                                          <p className="name">{userData.user.name}</p>
                                          <p className="username" >{userData.user.username}</p>
                                          <p className="occupation-company">{userData.user.occupation} <span id="at">at</span> {userData.user.company}</p>
                                      </div>
                                  </div>
                              </div>
                            </Link>
                            :
                            <Link to={"/profile/"+value.name}>
                                {console.log(value.name)}
                                {console.log(userData.user.username)}
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
                            }   
                        </div>
                    )
                })
                }
            </div>
            )}
            <div className="searchInputs"></div>
        </UserContext.Provider> 
        </div>
    )
}

export default SearchBar