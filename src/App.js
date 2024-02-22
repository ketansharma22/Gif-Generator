import React from 'react';
import './App.css';
import Random from './components/Random';
import Searchgif from './components/Searchgif';

function App() {
  return (
    <div className="App">
        <div className='heading'>
            <h1>RANDOM GIFS</h1>
        </div>
        <div className='randomgif'>
            <Random></Random>
        </div>
        <div className='Searchgif'>
            <Searchgif/>
        </div>
    </div>
  );
}

export default App;
