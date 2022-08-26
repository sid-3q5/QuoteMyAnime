import './Inside.scss';
import React, { useState, useEffect } from "react";
import axios from "axios";
import { AiFillCopy } from "react-icons/ai";
import { Link } from 'react-router-dom';

const url = "http://127.0.0.1:8000/api/anime/";

const Name = () => {

    const [data, setData] = useState([]);
    const [name, setName] = useState('Naruto');

    useEffect(() => {
        const getData = async () =>{
            handleSubmit();
        }

        getData();
    },[]);

    const handleSubmit = (e) => {
        if (e && e.preventDefault) { e.preventDefault(); }
        axios.get(url,
            {
                method: 'GET',
                params: {
                    anime: name,
                },
            })
            .then((res) => {
                setData(res.data);
                console.log(res.data);
            })
            .catch((err) => {
                console.log(err);
            });
    }

  
    function copy(text){
        navigator.clipboard.writeText(text);
        alert("Copied!!");
      }
      
        

    return ( 
        <div className="container"> 
            {/* OPTIONS DIV */}
            <div className="options">
                    <Link to="/app/anime" >
                        <li>Get quote by anime name</li>
                    </Link>
                    <Link to="/app/character">
                        <li>Get quote by character name</li>
                    </Link>
            </div>
            <div className="section">
                <h1>Quote By Anime Name</h1>
                <form onSubmit={handleSubmit}>
                    <input 
                    type="text" 
                    required
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                />
                    <br />
                    {<button>Get Quotes</button>}
                </form>
            </div>
            <h1>Quotes</h1>
            {(() => {
                        if (data.length === 0) {
                        return (
                            <div className="names">
                                <h3 id="copy" style={{textAlign: "center"}}> <span> Does Not Exist  </span></h3>
                            </div>
                        )
                        } 
                        else {
                        return (
                            data.map((anime) => ( 
                                <div key={anime.id} className="names">
                                    <button  onClick={() => copy(`Anime : ${anime.anime} \n Character : ${anime.character} \n Quote : ${anime.quote}`)}> <AiFillCopy /> </button>
                                   <h3 id="copy" > <span> Anime  </span><span1>: </span1>"{anime.anime}"</h3>
                                    <p id="copy" > <span> Character </span><span1>: </span1>"{anime.character}"</p>
                                    <p id="copy" > <span>  Quote </span><span1>: </span1>"{anime.quote}"</p>
                                </div>
                                ))
                        )
                        }
                    })()}
        </div>
     );
}
 
export default Name;