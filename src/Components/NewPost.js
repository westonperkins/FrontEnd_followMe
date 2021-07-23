import React from 'react'
import { useState } from 'react';

const NewPost = () => {
    const initialState = {post:''};
    const [formState, setFormState] = useState(initialState)

    const handleSubmit = (e) => {
        e.preventDefault()

        console.log(formState);
        setFormState(initialState)
    }

    const handleChange = (e) => {
        setFormState({...formState, [e.target.id]: e.target.value})
    }

    return (
        <div>
            <a href="/">Back</a>
            <form onSubmit={handleSubmit}>
                <label htmlFor="post"/>
                <textarea onChange={handleChange} id="post" cols="30" rows="10">Type something here...</textarea>
                <button>Add Picture</button>
                <button>Add Gif</button>
                <button type="submit">Post</button>
            </form>
        </div>
    )
}

export default NewPost
