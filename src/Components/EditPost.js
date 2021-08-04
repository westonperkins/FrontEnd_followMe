import React from 'react'
import { useState, useEffect } from 'react'
import { Route, Link } from 'react-router-dom'
import axios from 'axios';
import M from 'materialize-css'

const EditPost = ({match}) => {
    const [updateData, setUpdateData] = useState([])

    useEffect(() => {
        getUpdateData()
    },[])

    const getUpdateData = () => {
       axios.get(`https://followmeapplicationapi.herokuapp.com/posts/${match.params.id}`)
        // .then(res => res.json())
        .then(res => {
          console.log(res)
          console.log(match.params.id)
          setUpdateData(res)
        })
        .catch(err => {
          console.error(err);
        });
    }

    const updatePost = (e) => {
        e.preventDefault()
        const editedPostData = {
            instance: updateData.instance,
            imageUpload: updateData.imageUpload,
        };
        console.log(editedPostData, "test")
        axios.put(`https://followmeapplicationapi.herokuapp.com/posts/${match.params.id}/edit`, editedPostData)
        .then(res => {
            console.log(res)
            console.log(match.params.id)
            setUpdateData(res)
          })
        .then(window.location='/posts/days')
    }

    const handleChange = (e) => {
        setUpdateData({...updateData, [e.target.id]: e.target.value})
    }

    return (

        <div id="create-post-container" className="row">
            {updatePost ? 
            <form onSubmit={updatePost} className="col s12">
                <div className="row">
                <div className="input-field col s12">
                <label htmlFor="instance"/>
                <textarea id="instance" className="materialize-textarea" onChange={handleChange}>{updateData.instance}</textarea>
                <a href="/posts/days" className="btn waves-effect waves-light" id="x">Cancel</a>
                <button type="submit" className="btn waves-effect waves-light">Update</button>
                </div>
            </div>
            </form> : null
            }
        </div>
    )
}

export default EditPost
