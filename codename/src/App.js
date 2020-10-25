<<<<<<< HEAD
import React from 'react';
import {
  Spinner,
} from 'react-bootstrap';
import MapChart from './components/MapChart';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './Views/Home';
=======
import Header from './Components/Header';
import Context from './Components/Context';
import MapChart from './Components/MapChart';
import Analysis from './Components/Analysis';
import Methodology from './Components/Methodology';
import About from './Components/About';
import Footer from './Components/Footer';
>>>>>>> 131db0d5ae30043649f2ba54cdb9495c1ef8cdb7
import {
  BrowserRouter as Router,
} from 'react-router-dom';
import DatePicker from 'react-date-picker'
import React, { useState } from 'react';
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
