import React from 'react';
import Header from './Header';
import Footer from './Footer';
import Form from './Form';
import Grid from '@mui/material/Grid';


const Contact = () =>{
    return (
        <div className="contact-div">
            <Header/>
            <Grid container spacing={2} >

                    <Grid item xs={5}>
                    <div className="contact-body-left">
                    
                    <h1 class="contact-body-left-title">Contact Us</h1>
                    <p>Have any issues ? Or want to ask something, just fill the contact form and we will reach you soon.
                       Or U can call us at number provided below or reach to our office.
                       Or in case of any problem raise an issue in our github repository <a href="https://github.com/PALASH-BAJPAI/PokedeX/">PokedeX</a>
                    </p>
                    <h1 class="contact-body-left-title">Reach Us At</h1>
                    <p>
                        Address : Apollo Bandar, Colaba, Mumbai, Maharashtra 400001
                        <br/>
                        Phone : +91-9888888888
                    </p>
                    </div>
                    </Grid>


                    <Grid item xs={5}>
                        <div className="contact-body-right">
                            <p>Get in touch</p>
                            <div className="contact-form">
                                <Form />
                            </div>
                        </div>
                    </Grid>
                
            </Grid>
            <div className="contact-footer">
            <Footer/>
            </div>
        </div>
    );
}
  
export default Contact;
