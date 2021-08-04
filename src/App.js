
import './App.css'
import { BrowserRouter as Router, Route, Link } from "react-router-dom"
import React, { createContext, useState, useEffect } from 'react'
import M from 'materialize-css'

import axios from 'axios'



// export const url = process.env.URL === 'production' 
//   ? 'https://followmeapplicationapi.herokuapp.com'
//   : 'http://localhost:5000'


// import Profile from './Components/Profile/Profile';
// import Signin from './Components/Signin/Signin';
// import Welcome from './Components/Welcome/Welcome';
import NewPost from './Components/NewPost';
import UserFeed from './Components/UserFeed';
import PostsFeed from './Components/PostsFeed';
import EditPost from './Components/EditPost';
import Explore from './Components/Explore'
// import SearchResults from './Components/SearchResults';

// Westons routes
import Login from './Components/weston/Login'
import Register from './Components/weston/Register/Register'
import Users from './Components/weston/Users'
import LoggedIn from './Components/weston/LoggedIn'
import Logout from './Components/weston/Logout'
import Posts from './Components/weston/Posts'
import CreatePost from './Components/weston/CreatePost'
import UserProfile from './Components/weston/UserProfile'
import UserPosts from './Components/weston/UserPosts'
import LogoutCheckpoint from './Components/weston/LogoutCheckpoint'
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

    const tokenResponse = await axios.post('https://followmeapplicationapi.herokuapp.com/tokenIsValid',
    null,
    {headers: {"auth-token": token}})

    console.log(tokenResponse.data)

    if(tokenResponse.data) {
      const userResponse = await axios.get('https://followmeapplicationapi.herokuapp.com/profile', 
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



const logoutCheckpoint = () => {
  window.alert("Are you sure you want to logout?")
}

const logout = () => {
  setUserData({
    token: undefined,
    user: undefined
  })
  localStorage.setItem("auth-token", "")
  window.location='/login'
}
// console.log(userData.user)
// ________________________





  return (

    <Router>  
    <UserContext.Provider value={{ userData, setUserData }}>  

    {userData.user ? 
      ( 
        <nav>
          <div className="userHeader">
            <div className="nav-left">
              <Link to='/posts/days' className="nav-item">Posts</Link>
              <Link to="/explore" className="nav-item">Explore</Link>
            </div>
            <div className="nav-right">
              <Link to={'/userprofile/'+userData.user.name} className="nav-item">Logged in as: {userData.user.name}</Link>
              <Link to={'/logout'} onClick={logout} className="nav-item">Logout</Link>
            </div>
            {/* <Link to={'/logout'} onClick={logout} className="modal-trigger" href="#modal1">Logout</Link> */}
            {/* <div id="modal1" className="modal">
              <div className="modal-content">
                <h4>Modal Header</h4>
                  <p>A bunch of text</p>
              </div>
              <div className="modal-footer">
                <a href="#!" className="modal-close waves-effect waves-green btn-flat">Agree</a>
              </div>
            </div> */}
          </div>
        </nav> 
      ) :
      ( 
        <nav className="userHeader">
          <div className="nav-right">
          <Link to={'/login'} className="nav-item">Login</Link>
          <Link to={'/register'} className="nav-item">Register</Link>
          </div>
        </nav>
      )
    }

    <div className="App">
  
      <main>
      <Route exact path='/userprofile/:user' component={UserProfile}/>
      <Route exact path='/explore' component={Explore} />
      <Route exact path="/posts/days" component={PostsFeed} />
      {/* <Route exact path='/signin' component={Signin} /> */}
      {/* <Route exact path='/welcome' component={Welcome} /> */}
      {/* <Route exact path='/signup' component={Profile} />  */}
      <Route
          exact path="/posts/edit/:id"
          render={routerProps => (
            <EditPost match={routerProps.match}/>
            )} />

      <Route path="/register" exact component={Register}/>
      <Route path='/login' exact component={Login}/>
      <Route path='/profile/:user' exact component={UserPosts}/>
      {/* <Route path='/loggedIn' exact component={LoggedIn}/> */}
      {/* <Route path="/" exact component={Users}/> */}
      {/* <Route path='/logout' exact component={Logout}/> */}
      {/* <Route path='/posts/days' exact component={Posts}/> */}
      {/* <Route path='/posts/newpost' exact component={CreatePost}/> */}
      </main>
    </div>
    </UserContext.Provider>
    </Router>
  );
}

export default App;
