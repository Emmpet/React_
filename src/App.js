import './App.css';

import { Header } from './components/Header';
import { MySidebar } from './components/MySidebar';
import { ImgSlide } from './components/ImgSlide';
import { MyFooter } from './components/Myfooter';



function App() {

  return (
    
    <div className="App">
      <Header />
      <MySidebar />
      <div className='Welcome' >
        <h2>Hej och välkommen till WeLoveMovies!</h2>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit,
           sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
           Sed tempus urna et pharetra pharetra massa. Aliquet nec ullamcorper sit amet risus. Vitae tempus quam pellentesque nec nam aliquam sem et tortor. 
           Placerat orci nulla pellentesque dignissim enim sit amet venenatis urna. Duis at consectetur lorem donec massa. Gravida in fermentum et sollicitudin ac orci phasellus egestas tellus. 
           Dictum sit amet justo donec. 
           Quisque sagittis purus sit amet volutpat consequat. 
           Id aliquet risus feugiat in.
        </p>
      </div>
      <ImgSlide />
      <MyFooter />
 
    </div>
  
  );
}

export default App;
