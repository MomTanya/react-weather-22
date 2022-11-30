import React from 'react';
import Weather from './Weather';
import './App.css';

export default function App() {
  return (
  
  <div className='App'>
    <div className='container'>
          <Weather />
          <footer>
            This project was coded by {" "} 
            <a href='https://jocular-choux-52b0c5.netlify.app/' target="_blank" rel="noreferrer">Tetiana Matvienko</a>{" "}and is{" "}
            <a href='https://github.com/MomTanya/react-weather-22' target="_blank" rel="noreferrer">open-soursed on GitHub</a>
          </footer>
     </div>
  </div>
    );
}

