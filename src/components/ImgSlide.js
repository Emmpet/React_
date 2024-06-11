import React, { Component } from 'react';

import { Slide } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css';


export class ImgSlide extends Component {
  render () {

    const images = [
      { url: 'img/bild1_1_900x380.jpg',
        caption: 'Klassiska filmer'
        
      },
      {
        url: 'img/bild2_900x380.jpg',
        caption: 'Nya filmer'
      },
      {
        url: 'img/bild3_900x380.jpg',
        caption: 'Gillar du vår sida? Bli medlem hos oss!'
      },
    ];

    return (
        <div className="slide-container">
          <Slide>
           {images.map((slideImage, index)=> (
              <div className="each-slide" key={index}>
                <div style={{'backgroundImage': `url(${slideImage.url})`}}>
                  <span>{slideImage.caption}</span>
                </div>
              </div>
            ))} 
          </Slide>
        </div>
      );
};
}
    

export default ImgSlide;