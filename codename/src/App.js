import {
  Spinner,
} from 'react-bootstrap';
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
import './App.css';

function App() {
  var b = true;
  if (b) {
    return (
      <div className="App">
        <Router>
          <Header/>
          
          <Context/>
          <MapChart/>
          <Analysis/>
          <Methodology/>
          <About/>

          <Footer/>
        </Router>
      </div>
    );
  } else { // Loading screen
    const loadStyle = { // Spinner style
      'position': 'fixed',
      'top': '50%',
      'left': '50%',
    };

    return ( // Return loading screen
      <div style={loadStyle}>
        <Spinner animation="border" variant="dark" />
      </div>
    );
  }
}

export default App;
