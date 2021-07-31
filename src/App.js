import './App.css'
import { Route, Link } from 'react-router-dom'
import Profile from './Components/Profile/Profile';
import Signin from './Components/Signin/Signin';
import Welcome from './Components/Welcome/Welcome';
import Home from './Components/Home/Home';

import YourProfile from './Components/YourProfile/YourProfile';
import EditUser from './Components/Edit/EditUser';
import { useState } from 'react';



import NewPost from './Components/NewPost';
import UserFeed from './Components/UserFeed';
import MainFeed from './Components/MainFeed';


//NOTE: 
  //may have to change "/newPost" to :id and render router.props
  //haven't routed EditPost.js yet
function App() {
 

  return (
    <div className="App">
      <Link to="/newPost">Add to Day</Link>
      <Link to="/signin">Sign In</Link>
      <main>
      <Route exact path='/signin' component={Signin} />
      <Route exact path='/signup' component={Profile} />
      <Route exact path='/welcome' component={Welcome} />
      <Route exact path='/home' component={Home} />

      <Route exact path='/yourProfile' component={YourProfile} />
      <Route
          exact path="/profile/:username"
          render={routerProps => (
            <YourProfile match={routerProps.match}/>
          )} />
      <Route
          exact path="/profile/:username/edit"
          render={routerProps => (
            <EditUser match={routerProps.match}/>
          )} />
      <Route exact path="/newPost" component={NewPost} />
      <Route exact path="/newPost" component={UserFeed} />
      </main>
    </div>
  );
}

export default App;
