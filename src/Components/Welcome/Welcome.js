import React from 'react'
import {Link} from 'react-router-dom'
import './Welcome.css'
const Welcome = () => {
    return (
        <div>
            <h1>Welcome</h1>
            <h1>What is Your Favarite Field?</h1>
        <div className='welcome'>
  
            <div>
                <div className='container3'>
                    <button>Graphic Design</button>
                    <button>Web Developer</button>
                    <button>UX/UI Designer</button>
                    <button>Manufacturing</button>
                    <button>Data Science</button>
                    <button>Cyber Security</button>
                    <button>Information Technology</button>
                    <button>Manufacturing Engineer</button>
                    <button>Aviation Operator</button>
                </div>
            </div>
        </div>
        <Link to={'/home'}>
        <button id='next'>Next</button>
        </Link>
        <Link to={'/'}>
        <button id='cancel'>Cancel</button>
        </Link>
        </div>
    )
}

export default Welcome
