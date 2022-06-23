import React from 'react';
import Header from './Header';
import Footer from './Footer'

const About = () =>{
    return (
        <div className="about-div">
        <Header/>
        <div className="about-body">
        The Pokédex (ポケモン図鑑ずかん, Pokemon Zukan, Illustrated Pokémon Encyclopedia) is an electronic device created and designed
        to catalog and provide information regarding the various species of Pokémon featured in the Pokémon video game, anime and
        manga series. The name Pokédex is a neologism including "Pokémon" (which itself is a portmanteau of "pocket" and "monster")
        and "index". The Japanese name is simply "Pokémon Encyclopedia", as it can feature every Pokémon on it, depending on the 
        Pokédex.
        </div>
        <Footer/>
        </div>
    );
}

export default About;
