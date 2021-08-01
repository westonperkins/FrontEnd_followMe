
import './App.css'
import { BrowserRouter as Router, Route, Link } from "react-router-dom"
import React, { createContext, useState, useEffect } from 'react'

import axios from 'axios'

import Profile from './Components/Profile/Profile';
import Signin from './Components/Signin/Signin';
import Welcome from './Components/Welcome/Welcome';
import NewPost from './Components/NewPost';
import UserFeed from './Components/UserFeed';
import MainFeed from './Components/MainFeed';
import EditPost from './Components/EditPost';
import SearchResults from './Components/SearchResults';

// Westons routes
import Login from './components/Login'
import Test from './components/Test'
import Users from './components/Users'
import LoggedIn from './components/LoggedIn'
import Logout from './components/Logout'
import Posts from './components/Posts'
import CreatePost from './components/CreatePost'
// ____________

export const UserContext = createContext()

function App() {

const initialState = {instance:'',imageUpload: ''};
const [postData, setPostData] = useState(initialState)

// USER AUTH 
const [userData, setUserData] = useState({
  token: undefined,
  user: undefined
})

useEffect(() => {
  const isLoggedIn = async () => {
    let token = localStorage.getItem("auth-token")
    if(token == null) {
      localStorage.setItem("auth-token", "")
      token = ""
    }

    const tokenResponse = await axios.post('http://localhost:5000/tokenIsValid',
    null,
    {headers: {"auth-token": token}})

    console.log(tokenResponse.data)

    if(tokenResponse.data) {
      const userResponse = await axios.get('http://localhost:5000/profile', 
      {headers: {'auth-token': token}}
      )
      setUserData({
        token: token,
        user: userResponse.data
      })
    }
  }
  isLoggedIn()
}, [])

const logout = () => {
  setUserData({
    token: undefined,
    user: undefined
  })
  localStorage.setItem("auth-token", "")
  window.location='/login'
}
console.log(userData.user)
// ________________________

  return (

    <Router>  
    <UserContext.Provider value={{ userData, setUserData }}>  

    {userData.user ? 
      ( 
        <nav>
          <Link to={'/'}>Users ({userData.user.name})</Link>
          <br></br>
          <Link to={'/logout'} onClick={logout}>Logout</Link>
          <br></br>
          <Link to={'/posts/days'}>Posts</Link>
          <br></br>
          <Link to={'/posts/newpost'}>Create Post</Link>
        </nav> 
      ) :
      ( 
        <nav>
          <Link to={'/login'}>Login</Link>
          <br></br>
          <Link to={'/register'}>Register</Link>
        </nav>
      )
    }

    <div className="App">
      <nav>
        <div className="nav-wrapper">
            <Link to="/">Explore</Link>
            <ul id="nav-mobile" className="right hide-on-med-and-down">
              <li><Link to="/posts/days">Posts and Activity</Link></li>
              <li><Link to="/signin">Sign in</Link></li>
            </ul>
        </div>
      </nav>
      <main>
      <Route exact path='/signin' component={Signin} />
      <Route exact path='/signup' component={Profile} />
      <Route exact path='/welcome' component={Welcome} />
      <Route exact path='/' component={MainFeed} />
      <Route exact path="/posts/days" component={UserFeed} />
      <Route
          exact path="/posts/edit/:id"
          render={routerProps => (
            <EditPost match={routerProps.match}/>
            )} />

      <Route path="/register" exact component={Test}/>
      <Route path="/" exact component={Users}/>
      <Route path='/login' exact component={Login}/>
      {/* <Route path='/logout' exact component={Logout}/> */}
      <Route path='/loggedIn' exact component={LoggedIn}/>
      <Route path='/posts/days' exact component={Posts}/>
      <Route path='/posts/newpost' exact component={CreatePost}/>
      </main>
    </div>
    </UserContext.Provider>
    </Router>
  );
}

export default App;
