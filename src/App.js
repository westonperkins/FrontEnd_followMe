
import './App.css'
import Profile from './Components/Profile/Profile';
import Signin from './Components/Signin/Signin';
import Welcome from './Components/Welcome/Welcome';
import Home from './Components/Home/Home';
import { Route, Link } from 'react-router-dom'


function App() {
  return (
    <div className="App">
      <Route exact path='/' component={Signin} />
      <Route exact path='/signup' component={Profile} />
      <Route exact path='/welcome' component={Welcome} />
      <Route exact path='/home' component={Home} />
    </div>
  );
}

export default App;
