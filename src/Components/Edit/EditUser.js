import React from 'react'
import { useState, useEffect } from 'react'
import { Route, Link, useHistory } from 'react-router-dom'
import axios from 'axios';

const EditUser = ({match}) => {
    const history = useHistory()
    const [updateData, setUpdateData] = useState([])


    useEffect(() => {
        axios.get(`https://followmeapplicationapi.herokuapp.com/${match.params.username}`)
        // .then(res => res.data )
        .then(res => setUpdateData(res.data))
        .catch(err => console.error(err))
      }, [])




  // update user
 function updateUser(e){
    e.preventDefault()
  const editedUser = {
    name: updateData.name,
    username: updateData.username,  
    email: updateData.email,
    password: updateData.password,
    company: updateData.company,
    occupation: updateData.occupation,
    position: updateData.position,
    software: updateData.software,
    hardware: updateData.hardware,
    profileImage: updateData.profileImage
} 
    
axios.put(`https://followmeapplicationapi.herokuapp.com/${match.params.username}/edit`, editedUser)
.then(() => console.log(`updated username: "${updateData.username}" successful`) )
.then(res => history.push(`/profile/${updateData.username}`))
// .then(res =>  setUpdateData(res))
// .then(res =>  setUpdateData(res.data.updateData))
.catch(error => {console.log(error)})
 }

 function handleChange(event) {
    const {name, value} = event.target
    setUpdateData((prevInput) => {
        return({
            ...prevInput,
            [name]: value
        })
    })
    console.log(updateData);
}
 


    return (
        <div className='new'>
        <header>
        <h1>Edit your profile</h1>
        </header>
        {updateUser ? 
<form>

        <div className="container2">

            <div className='label'>
        <label htmlFor="name">name:</label>
        <input onChange={handleChange} name='name'className='box2' type="text"/>
        
        </div>

            <div className='label'>
        <label >username:</label>
        <input onChange={handleChange} name='username' className='box2' type="text"/>
        
        </div>
            <div className='label'>
        <label >password:</label>
        <input onChange={handleChange} name='password'  className='box2' type="text"/>
        </div>
            <div className='label'>
        <label >email:</label>
        <input onChange={handleChange} name='email'  className='box2' type="text"/>
        </div>
            <div className='label'>
        <label >company:</label>
        <input onChange={handleChange} name='company'  className='box2' type="text"/>
        </div>
            <div className='label'>
        <label >occupation:</label>
        <input onChange={handleChange} name='occupation'  className='box2' type="text"/>
        </div>
            <div className='label'>
        <label >position:</label>
        <input onChange={handleChange} name='position'  className='box2' type="text"/>
        </div>
            <div className='label'>
        <label >software:</label>
        <input onChange={handleChange} name='software'  className='box2' type="text"/>
        </div>
            <div className='label'>
        <label >hardware:</label>
        <input onChange={handleChange} name='hardware'  className='box2' type="text"/>
        </div>
            <div className='label'>
        <label >profileImage:</label>
        <input onChange={handleChange} name='profileImage'  className='box2' type="text"/>
        </div>



        <div className='button'>
        
        <button onClick={updateUser}>Save</button>
        
        
       
    <Link to={`/profile/${match.params.username}`}>
    <button className='btn2'>CANCEL</button>
    </Link>
    </div>
        </div>
</form> : null }
    </div>
    )
}

export default EditUser
