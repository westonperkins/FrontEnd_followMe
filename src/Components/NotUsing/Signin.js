import React from 'react'
import { Link } from 'react-router-dom'

const Signin = () => {
    return (
        <div className='main'>
            <h2>Follow Me</h2>
            <a href="/">Back</a>
        <div className='container'>
            <h5>Please Log in</h5>

            <div className="row">
            <form className="col s12">
            <div className="row">
                <div class="input-field col s12">
                 <input id="email" type="email" class="validate"/>
                 <label for="email">Email</label> 
                </div>
            </div>
            <div className="row">
                <div class="input-field col s12">
                    <input type="text" class="validate"/>
                    <label for="text">Password</label> 
                </div>
            </div> 
            </form>
            </div>      
                
            <a href={'/yourProfile'}><button className="btn waves-effect waves-light">Login</button></a>
            <p className="text">
                Don't Have Account?  <a href={'/signup'}><button className="btn waves-effect waves-light">Sign Up</button ></a>  
            </p>
        </div>
        </div>
    )
}

export default Signin