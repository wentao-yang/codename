
import React, { useState } from 'react';
import Header from './Components/Header';
import Context from './Components/Context';
import MapChart from './Components/MapChart';
import Analysis from './Components/Analysis';
import Methodology from './Components/Methodology';
import About from './Components/About';
import Footer from './Components/Footer';

import {
  BrowserRouter as Router,
} from 'react-router-dom';
import DatePicker from 'react-date-picker'
import './App.css';

function App() {
  const [dateValue, onChange] = useState(new Date());

  return (
    <div className="App">
      <Router>
        <Header/>
        
        <Context/>

        <p>Enter a date between 1/22/20 and 11/22/20 for the map{"\n"}</p>
        <DatePicker
          onChange={onChange}
          value={dateValue}
        />

        <MapChart/>
        <Analysis/>
        <Methodology/>
        <About/>

        <Footer/>
      </Router>
    </div>
  );
}

export default App;
