import React from 'react'
import { Link } from 'react-router-dom'
import './Home.css'
const Home = () => {
    return (
        <div className='homePage'>
            <nav className='homeNav'>
            <h1 className='home'><Link to={'/home'}>HOME</Link></h1>      
            <h1 className='home'><Link to={'/home'}>CREATE</Link></h1>      
            </nav>  
            <div className='homeBody'>
<div className="sidePost">
    <h1>name:</h1>
    <h2>job title:</h2>
    <h2>Company:</h2>
</div>

<div className="posts">
    <div className="postBox">
        <h1>DATE: 10am</h1>
        <h2>group meeting</h2>
    </div>
    <div className="postBox">
        <h1>DATE: 10am</h1>
        <h2>group meeting</h2>
    </div>
























</div>

<div className="homeButton">
        <Link to={'/'}>
        <button id='cancel'>Log Out</button>
        </Link>
        <Link to={'/welcome'}>
        <button id='back'>Back</button>
        </Link>
</div>
</div>
        </div>
    )
}

export default Home
