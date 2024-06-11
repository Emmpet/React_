import React, { Component } from 'react';

import { Header }  from '../Header';
import { MySidebar } from '../MySidebar';
import { MyFooter } from '../Myfooter';
import { GetTopMovies } from '../GetTopMovies';

export class TopMovies extends Component {
    render () {
        return (
            <div>
                <Header />
                <MySidebar />
                <GetTopMovies />
                <MyFooter />
            </div>
        );
    }
}

export default TopMovies;