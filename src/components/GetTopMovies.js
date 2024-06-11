import React, { Component } from 'react';


export class GetTopMovies extends Component {

    state = {
        isLoading: true,
        error: null,
        movie1: [],
        movie2: [],
        movie3: []
    }

    fetchMovies () {
        Promise.all([fetch('https://www.omdbapi.com/?t=avatar&apikey=8bbc94e3'),
         fetch('https://www.omdbapi.com/?t=titanic&apikey=8bbc94e3'), fetch('https://www.omdbapi.com/?t=john+wick&apikey=8bbc94e3')])
         .then( ([res1, res2, res3]) => {
            return Promise.all([res1.json(), res2.json(), res3.json()])
         })
         .then(data => {
            this.setState ({
                isLoading: false,
                movie1: data,
                movie2: data,
                movie3: data
            })

            console.log(data);
         })
         .catch(error => this.setState({error, isLoading: false}));
    }

    componentDidMount() {
        this.fetchMovies();
    }
   render () {
    const {isLoading, error, movie1, movie2, movie3} = this.state;

    return (
            <React.Fragment>
            
            {error ? <p>{error.message}</p> : null}
                {!isLoading ? (
                    <div>

                        <div className='MovieOne'>
                        <h3>2</h3>    
                        <img src={movie1[0].Poster} alt="img movie1 description"></img>   
                        <h3>{movie1[0].Title}</h3>
                        <p>{movie1[0].Actors}</p>
                        <p>{movie1[0].Plot}</p>
                        </div>

                        <div className='MovieTwo'>
                        <h3>1</h3>    
                        <img src={movie2[1].Poster} alt="img movie2 description"></img>   
                        <h3>{movie2[1].Title}</h3>
                        <p>{movie2[1].Actors}</p>
                        <p>{movie2[1].Plot}</p>
                        </div>
                    

                        <div className='MovieThree'>
                        <h3>3</h3>    
                        <img src={movie3[2].Poster} alt="img movie3 description"></img>   
                        <h3>{movie3[2].Title}</h3>
                        <p>{movie3[2].Actors}</p>
                        <p>{movie3[2].Plot}</p>
                        </div>
                    </div>
                ) : (
                   <p>Loading</p>
                )}
                
            
            </React.Fragment>
        );
    }
}

export default GetTopMovies;