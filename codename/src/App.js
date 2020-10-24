import React from 'react';
import {
  Spinner,
} from 'react-bootstrap';
import MapChart from './components/MapChart';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './Views/Home';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom';
import './App.css';

function App() {
  var b = true;
  if (b) {
    return (
      <div className="App">
        <Router>
          <Header/>
          
          <div>
            {/* Routing */}
            <Switch>
              <Route exact path='/'>
                <Home />
              </Route>
            </Switch>
          </div>
          <MapChart/>

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
