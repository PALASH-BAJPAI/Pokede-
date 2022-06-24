import React from 'react';
import { Link } from "react-router-dom";



const Header = () =>{
    return (
    <div className="header-div">
        <Link to="/">
        <div className="header-logo">
        <img src={require("../img/pokeball.png")} alt="pokeball" className="header-img"/>
        <p>PokedeẊ</p>
        </div>
        </Link>
        
        <ul className ="header-nav">
            <li><Link to="/" className="header-link">Home</Link></li>
            <li><Link to="/about" className="header-link">About</Link></li>
            <li><Link to="/contact" className="header-link">Contact</Link></li>
        </ul>
    </div>
    );
}

export default Header;