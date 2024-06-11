import React, { Component } from 'react';


import { Link } from 'react-router-dom';
import { AiFillStar, AiFillCrown, AiFillHeart, AiFillHome } from 'react-icons/ai';

export class MySidebar extends Component {
    render () {

    return (
        <div>
        
              <nav>
                <ul className='sidebar'>
                   <AiFillHome /><Link to='/'>Hem</Link><br/>
                   <AiFillCrown /><Link to='/VeckansFilm'>Veckans filmtips</Link><br/>
                   <AiFillStar /><Link to='/TopMovies'>Våra toppfilmer</Link><br/>
                   <AiFillHeart /><Link to='/Member'>Bli medlem</Link>
                </ul>
              </nav>
        </div>
    );

    }
   
}


export default MySidebar;