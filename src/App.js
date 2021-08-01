import './App.css'
import { Route, Link } from 'react-router-dom'
import React, { useState } from "react";
import Profile from './Components/Profile/Profile';
import Signin from './Components/Signin/Signin';
import Welcome from './Components/Welcome/Welcome';
import NewPost from './Components/NewPost';
import UserFeed from './Components/UserFeed';
import MainFeed from './Components/MainFeed';
import EditPost from './Components/EditPost';
import SearchResults from './Components/SearchResults';

function App() {
const initialState = {instance:'',imageUpload: ''};
const [postData, setPostData] = useState(initialState)

  return (
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
      </main>
    </div>
  );
}

export default App;
