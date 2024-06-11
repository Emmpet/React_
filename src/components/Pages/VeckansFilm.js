import React, { Component } from 'react';

import { Header }  from '../Header';
import { MySidebar } from '../MySidebar';
import { MyFooter } from '../Myfooter';


export class VeckansFilm extends Component {

    state = {
        isLoading: true,
        movie: [],
        error: null
    }

    fetchMovie() {
        fetch('https://www.omdbapi.com/?t=Avatar%3A+The+Way+of+Water&apikey=8bbc94e3')
        .then(response => response.json())
        .then(data => {
            this.setState ({
                movie: data,
                isLoading: false
            })
            console.log(data);
        })
        .catch(error => this.setState({error, isLoading: false}));
    }

    componentDidMount() {
        this.fetchMovie();
    }

    render () {
        const {isLoading, movie, error } = this.state;
    
        return (
            <React.Fragment>
                <div> 
                    <Header />
                    <MySidebar /> 
                </div>
                {error ? <p>{error.message}</p> : null}
                {!isLoading ? (
                <div className='Veckansfilm'>
                <img src={movie.Poster} alt="img description"></img>
                <h3>{movie.Title}</h3>
                <p>{movie.Actors}</p>
                <p>{movie.Plot}</p>
              
                </div>
            ) : (
                <h3>Loading</h3>
            )}
            <MyFooter />
            </React.Fragment>
        );


        }
       
    }
 

export default VeckansFilm;