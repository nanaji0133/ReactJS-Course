import React, { useEffect, useState } from 'react';
import uuid from "uuid/dist/v1";
import NewSongForm from './NewSongForm';

const SongList = () =>
{
    const [songs, setSongs] = useState([
        { title: "Song 1", id: 1 },
        { title: "Song 2", id: 2 },
        { title: "Song 3", id: 3 }
    ]);

    const [age, setAge] = useState(22);

    useEffect(() =>
    {
        console.log("hook ran:", songs);
    }, [songs]);

    useEffect(() =>
    {
        console.log("hook ran:", age);
    }, [age]);

    const addSong = (title) => setSongs([...songs, { title, id: uuid() }]);

    return (
        <div className="song-list">
            <ul>
                { songs.map(song => <li key={ song.id }>{ song.title }</li>) }
            </ul>
            {/* <button onClick={ addSong }>Add a song</button> */ }
            <NewSongForm addSong={ addSong } />
            <button onClick={ () => setAge(age + 1) } >Age inc to 1: { age }</button>
        </div>
    );
};

export default SongList;