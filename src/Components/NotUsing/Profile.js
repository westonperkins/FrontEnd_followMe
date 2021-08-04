import React, {useState,useEffect} from 'react'
import {Link, useHistory} from 'react-router-dom'
import axios from 'axios'

const Profile = () => {
    const history = useHistory()
    const [profile, setProfile] = useState(
    {
        name: '',
        username:'',
        email: '',
        password: '',
        company: '',
        occupation: '',
        position: '',
        software: '',
        hardware: '',
        profileImage: ''  
    }
    )

    useEffect(() => {
        fetch('/')
        .then(res => {
            if(res.ok) {
                return res.json()
            }
        })
        .then(jsonRes => setProfile(jsonRes))
        .catch(err => console.log(err))
    }, [])    
//------------------------------------------------////

    function handleChange(event) {
        const {name, value} = event.target
        setProfile((prevInput) => {
            return({
                ...prevInput,
                [name]: value
            })
        })
        console.log(profile);
    }

    function addUser(event){
        event.preventDefault()
        const newUser = {
            name: profile.name,
            username: profile.username,  
            email: profile.email,
            password: profile.password,
            company: profile.company,
            occupation: profile.occupation,
            position: profile.position,
            software: profile.software,
            hardware: profile.hardware,
            profileImage: profile.profileImage
        }
        axios.post('https://followmeapplicationapi.herokuapp.com/register', newUser)
        .then(res => history.push(`/profile/${res.data.username}`))
        // .then(res => console.log(res))
        // .then(res => setProfile(res.data))
        .catch(error => {console.log(error)})
        // console.log(newUser);
        // alert('new user added')
        // setProfile(newUser)
    }


    return (
        <div className='new'>
            <header>
            <h1>new profile</h1>
            </header>
    <form>

            <div className="container2">

                <div className='label'>
            <label >name:</label>
            <input onChange={handleChange} name='name'  className='box2' type="text"/>
            </div>

                <div className='label'>
            <label >username:</label>
            <input onChange={handleChange} name='username'  className='box2' type="text"/>
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
            <button onClick={addUser}>Submit</button>
        <Link to={'/'}>
        <button className='btn2'>CANCEL</button>
        </Link>
        </div>

           
            </div>

    </form>
   

        </div>
    )
}

export default Profile
