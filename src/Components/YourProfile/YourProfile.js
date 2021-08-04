import React,{ useState, useEffect } from 'react'
import { Link } from 'react-router-dom';
import axios from 'axios';


const YourProfile = ({match}) => {
    const [persons, setPersons] = useState([])

    useEffect(() => {
      // console.log(persons.username);
      axios.get(`http://localhost:5000/${match.params.username}`)
      // axios.get('http://localhost:5000/')
      // .then(res => res.json())
      .then(res => setPersons(res.data))
      .catch(console.err)
    }, [])

    const fetchProfile = () => {
    
      axios.get(`https://followmeapplicationapi.herokuapp.com/`)
      .then(res => res.data)
      .then(res => setPersons(res))
      .catch(err => {console.error(err)})
    }
    
  // delete user
  function deleteUser(e){
    e.preventDefault()
    console.log('delete clicked');
    
    axios.delete(`https://followmeapplicationapi.herokuapp.com/${match.params.username}`)
    .then(() => {fetchProfile()})
    .then(() => console.log(`deleted username: "${match.params.username}" successful`) )
    .catch(err => {console.error(err)})
 }



    return (
        <div>
            <h1>welcome to your profile</h1>
       
          {persons.map(person => (
            <div>
                  <p><em style={userStyle}>name</em>: {person.name}</p>
                  <p><em style={userStyle}>username</em>: {person.username}</p>
                  <p><em style={userStyle}>password</em>: {person.password}</p>
                  <p><em style={userStyle}>email</em>: {person.email}</p>
                  <p><em style={userStyle}>company</em>: {person.company}</p>
                  <p><em style={userStyle}>occupation</em>: {person.occupation}</p>
                  <p><em style={userStyle}>position</em>: {person.position}</p>
                  <p><em style={userStyle}>software</em>: {person.software.map(p => <li key={p} value={p}>{p}</li> )}</p>
                  <p><em style={userStyle}>hardware</em>: {person.hardware.map(b => <li key={b} value={b}>{b}</li> )}</p>

                 
          
            </div>
              )
          ) }



   <div className="homeButton">
    
        <Link to={'/'}>
        <button id='cancel'>Log Out</button>
        </Link>
    
        <button id='cancel' onClick={deleteUser}>Delete</button>
        
        <Link to={`/profile/${match.params.username}/edit`}>
        <button id='cancel' style={updateButton}>Edit</button>
        </Link>
   


        <Link to={'/Home'}>
        <button id='back'>Your Post</button>
        </Link>

</div>
        </div>
    )
  }
  const userStyle = {
            fontSize: '25px',
            color:'yellow'
            }
const updateButton = {
  background: 'green'
}
export default YourProfile
