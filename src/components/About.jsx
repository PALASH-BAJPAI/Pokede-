import React from 'react';
import Header from './Header';
import Footer from './Footer';
import Card from './Card';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';





const About = () =>{
    return (
        <div className="about-div">
        <Header/>
        <div className="about-title">What is Pokédex ??</div>

            <div className="about-body">
                <div className="about-content">
                The Pokédex (ポケモン図鑑ずかん, Pokemon Zukan, Illustrated Pokémon Encyclopedia) is an electronic device created and designed
                to catalog and provide information regarding the various species of Pokémon featured in the Pokémon video game, anime and
                manga series. The name Pokédex is a neologism including "Pokémon" (which itself is a portmanteau of "pocket" and "monster")
                and "index". The Japanese name is simply "Pokémon Encyclopedia", as it can feature every Pokémon on it, depending on the 
                Pokédex.
                </div>
            </div>

            <div className="about-title-2">
                Types of Pokédex
            </div>
            <div className="about-cards">
            <Box sx={{ flexGrow: 1 }}>
            <Grid container spacing={2}>

                <Grid item xs={4}>
                <Card num='1' title="Kanto"/>
                </Grid>

                <Grid item xs={4}>
                <Card num='2' title="Johto"/>
                </Grid>

                <Grid item xs={4}>
                <Card num='3' title="Hoenn"/>
                </Grid>


                <Grid item xs={4}>
                <Card num='4' title="Kanto upgraded"/>
                </Grid>

                <Grid item xs={4}>
                <Card num='5' title="Sinnoh"/>
                </Grid>

                <Grid item xs={4}>
                <Card num='6' title="Johto upgraded"/>
                </Grid>
                

                <Grid item xs={4}>
                <Card num='7' title="Unova"/>
                </Grid>

                <Grid item xs={4}>
                <Card num='8' title="Kalos"/>
                </Grid>

                <Grid item xs={4}>
                <Card num='9' title="Hoenn upgraded"/>
                </Grid>


            </Grid>
            </Box>

            </div>


        <Footer/>
        </div>
    );
}

export default About;
