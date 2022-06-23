import React from 'react';
import Header from './Header';
import Footer from './Footer'

const Home = () =>{
    return (
        <div className="home-div">
            <Header/>
            <div className="home-body">
                Home
            </div>
            <Footer/>
        </div>
    );
}

export default Home;
