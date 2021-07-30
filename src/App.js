
import './App.css'
import Profile from './Components/Profile/Profile';
import Signin from './Components/Signin/Signin';
import Welcome from './Components/Welcome/Welcome';
import Home from './Components/Home/Home';
import YourProfile from './Components/YourProfile/YourProfile';
import EditUser from './Components/Edit/EditUser';
import { useState } from 'react';
import { Route, Link } from 'react-router-dom'


function App() {
 

  return (
    <div className="App">
      <Route exact path='/' component={Signin} />
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

  

    </div>
  );
}

export default App;
