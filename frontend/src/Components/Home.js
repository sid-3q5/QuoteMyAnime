import { Helmet } from 'react-helmet';
import './Home.scss';
import { Link } from 'react-router-dom';
import { FcNext } from "react-icons/fc";

const Home = () => {
    return ( 
        
        <div>
            <Helmet>
                <title>QuoteMyAnime</title>
            </Helmet>
            <div className="title">
                <h1>QuoteMyAnime</h1>
                <p>A free restful API serving quality anime quotes</p>
                
                <p2>Technology used to build :  
                    <a href="https://reactjs.org/" target="_blank" rel="noreferrer">ReactJS</a>,
                    <a href="https://www.npmjs.com/package/axios" target="_blank" rel="noreferrer">Axois</a>,
                    <a href="https://docs.gitlab.com/ee/development/fe_guide/style/scss.html" target="_blank" rel="noreferrer">SCSS</a>and     
                    <a href="https://www.django-rest-framework.org/" target="_blank" rel="noreferrer">Django REST Framework</a>,
                </p2>
                
                <div className="start">
                    <Link to="/app">
                        <button> Get Started  <FcNext /> </button>
                    </Link> 
                </div>
                   
            </div>
        </div>
     );
}
 
export default Home;