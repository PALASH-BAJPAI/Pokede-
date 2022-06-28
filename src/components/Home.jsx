import React from 'react';
import Header from './Header';
import Footer from './Footer';
import Pokemon from './Pokemon';

const Home = () =>{
    return (
        <div className="home-div">
            <Header/>
            <div className="pokemon-home">
            <Pokemon/>
            </div>
            <div className="home-footer">
            <Footer/>
            </div>
        </div>
    );
}

export default Home;
