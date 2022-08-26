import './Inside.scss';
import { useState, useEffect } from "react";
import axios from "axios";
import { Link } from 'react-router-dom';
import { AiFillCopy } from "react-icons/ai";

const url = "http://127.0.0.1:8000/api/anime/";

const Inside = () => {
    const [data, setData] = useState([]);
    
    useEffect(() => {
        const getData = async () => {
                axios({
                    method: 'GET',
                    url: url
                })
                    .then((response) => {
                        setData(response.data);
                        console.log(response);
                    })
                    .catch((error) => console.log(error));
        }
        getData();
    },[]);

    function copy(text){
        navigator.clipboard.writeText(text);
        alert("Copied!!");
      }

    return ( 
        <div className="container"> 
            <h3>Available options :</h3>

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
                <h1>Quote</h1>
                {
                    data.map((anime) => ( 
                        <div key={anime.id} className="names">
                            <button  onClick={() => copy(`Anime : ${anime.anime} \n Character : ${anime.character} \n Quote : ${anime.quote}`)}> <AiFillCopy /> </button>
                           <h3 id="copy" > <span> Anime  </span><span1>: </span1>"{anime.anime}"</h3>
                            <p id="copy" > <span> Character </span><span1>: </span1>"{anime.character}"</p>
                            <p id="copy" > <span>  Quote </span><span1>: </span1>"{anime.quote}"</p>
                        </div>
                        
                    ))
                }
            </div>
        </div>
     );
}
 
export default Inside;