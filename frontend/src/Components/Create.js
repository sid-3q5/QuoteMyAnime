import './Inside.scss';
import React, { useState, useEffect } from "react";
import axios from "axios";

const url = "http://127.0.0.1:8000/api/anime/";

const Create = () => {
    const [anime, setAnime] = useState('');
    const [character, setCharacter] = useState('');
    const [quote, setQuote] = useState('');

    function onCreate(event) {
        event.preventDefault();
        const postData = {
            anime,
            character,
            quote
        };

        axios.post(url, postData)
        .then((res) => {
            console.log(res.data);
        })
        .catch((err) => {
            console.log(err);
        });
    
    }


    return ( 
        <div className="section">
                <h1>Quote By Anime Name</h1>
                <form onSubmit={onCreate}>
                    <input 
                    type="text" 
                    required
                    value={anime}
                    placeholder="Anime Name" 
                    onChange={(e) => setAnime(e.target.value)}
                />
                <input 
                    type="text" 
                    required
                    value={character}
                    placeholder="Character Name" 
                    onChange={(e) => setCharacter(e.target.value)}
                />
                <textarea 
                    required
                    value={quote}
                    placeholder="Quote"
                    onChange={(e) => setQuote(e.target.value)}
                />
                    <br />
                    {<button>Submit Quote</button>}
                </form>
            </div>
     );
}
 
export default Create;