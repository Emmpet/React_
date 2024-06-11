import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { VeckansFilm } from './components/Pages/VeckansFilm';
import { TopMovies } from './components/Pages/TopMovies';
import { Member } from './components/Pages/Member';
import { HashRouter as Router, Routes, Route} from 'react-router-dom';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
   <Router>
    <Routes>
      <Route path='/' element={<App />} />
      <Route path='/VeckansFilm' element={<VeckansFilm />} />
      <Route path='/TopMovies' element={<TopMovies />} />
      <Route path='/Member' element={<Member />} />
    </Routes>
   </Router>
    
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
