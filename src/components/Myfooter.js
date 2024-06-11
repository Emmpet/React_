import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import { SocialIcon } from 'react-social-icons';


export class MyFooter extends Component {
    render () {

        return (
            <div className='footer'>
                <div className='column1'><h3>WeLoveMovies</h3><br/>
                <Link to='/'>Home</Link><br/>
                <Link to='/VeckansFilm'>Veckans filmtips</Link><br/>
                <Link to='/TopMovies'>Våra toppfilmer</Link><br/>
                <Link to='/Member'>Bli medlem</Link>
                </div>

                <div className='column3'>
                    <h3>Kontakta oss via:</h3>
                    <p>Mejl: welovemovies@gmail.com</p>
                    <p>Telefonnummer: 02138139613</p>
                </div>

                <div className='column2'>
                    <h3>Se mer om oss:</h3>
                    <SocialIcon network="facebook"></SocialIcon>
                    <SocialIcon network="twitter"></SocialIcon>
                    <SocialIcon network="youtube"></SocialIcon><br/>
                    <SocialIcon network="tiktok"></SocialIcon>
                    <SocialIcon network="instagram"></SocialIcon>
                </div>
            </div>
        );
       
    }
}
    

export default MyFooter;