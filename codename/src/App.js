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
import React, { useState } from 'react';
import './App.css';

function App() {
  // Changes date of map
  const [dateValue, onChange] = useState(new Date());

  return (
    <div className="App">
      <Router>
        <Header/>
        
        <Context/>

        <p>Enter a date between 1/22/20 and 11/22/20 to view past, present, and future COVID-19 Hotspots:{"\n"}</p>
        <DatePicker
          onChange={onChange}
          value={dateValue}
        />

        <MapChart dateValue={dateValue}/>
        <Analysis/>
        <br/>
        <Methodology/>
        <About/>

        <Footer/>
      </Router>
    </div>
  );
}

export default App;
