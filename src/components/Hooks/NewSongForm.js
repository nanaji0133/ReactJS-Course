import React, { useState } from 'react';

const NewSongForm = (props) =>
{
    const [title, setTitle] = useState("");

    const handleChange = (e) =>
    {
        setTitle(e.target.value);
    };

    const handleSubmit = (e) =>
    {
        e.preventDefault();
        props.addSong(title);
        setTitle("")
    };

    return (
        <form onSubmit={ handleSubmit }>
            <label>Song:
                <input type="text" value={ title } required onChange={ handleChange } />
            </label>
            <button>add Song</button>

        </form>
    );
};

export default NewSongForm;