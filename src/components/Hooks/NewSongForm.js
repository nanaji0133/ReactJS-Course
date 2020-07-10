import React, { useState } from 'react';

const NewSongForm = (props) =>
{
    const [title, setTitle] = useState("");

    const handleChange = (e) =>
    {
        // const { name, value } = e.target;
        setTitle(e.target.value);
        console.log(e.target.value);
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
                <input type="text" value={ title } onChange={ handleChange } />
            </label>
            <button>add Song</button>

        </form>
    );
};

export default NewSongForm;