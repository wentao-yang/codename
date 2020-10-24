<<<<<<< HEAD
import React from 'react';
import './App.css';

function App() {
  return (
    <div className="App">
      
    </div>
  );
=======
import {
  Spinner,
} from 'react-bootstrap';
import Header from './Components/Header';
import Footer from './Components/Footer';
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
>>>>>>> master
}

export default App;
