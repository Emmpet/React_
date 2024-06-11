import React, { Component } from 'react';

import { Header }  from '../Header';
import { MySidebar } from '../MySidebar';
import { MyFooter } from '../Myfooter';
import { Nameform } from '../Nameform';

export class Member extends Component {
    render () {
        return (
            <div>
                <Header />
                <MySidebar />
                <div className='img'></div>
                <div className='textMedlem'>Älskar du film lika mycket som oss? Vill du vara med och diskutera
                    och dela med dig om dina bästa och kanske sämsta filmer? Skicka din mejladress nedan till oss
                    och få vidare instruktioner hur du gör för att bli medlem i WeLoveMovies.
                </div>
                <Nameform />
                <MyFooter />

            </div>
        );
    }
}

export default Member;