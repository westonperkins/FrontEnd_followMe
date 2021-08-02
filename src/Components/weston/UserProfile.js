import React, { useContext } from 'react'
import { UserContext } from '../../App'

const UserProfile = () => {
    const { userData, setUserData } = useContext(UserContext)
    console.log(userData.user)
    return (
            <UserContext.Provider value={{ userData, setUserData }}>  
            {userData.user ? (
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
            ) : (
                <div>
                <p>please log in</p>
                </div>
            )}
             </UserContext.Provider>    
    )
}

export default UserProfile
