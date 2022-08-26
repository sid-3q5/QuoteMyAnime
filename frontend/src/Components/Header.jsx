import React from "react";
import { Link } from 'react-router-dom';
import { AiOutlineGithub } from "react-icons/ai";

const Header = () => {
    return (
        <div>
            <div className="color"></div>
            <nav className="header">
                    <h2>QuoteMyAnime</h2>
                    <div>
                        <Link to="/tvshows">Guide</Link>
                        <Link to="/movies"> <span> <AiOutlineGithub /> </span>Github</Link>
                    </div>
            </nav>
        </div>
    );
}

export default Header;