import { Spinner } from 'react-bootstrap';
import logo from './logo.svg';
import './App.css';

function App() {
  var b = true;
  if (b) {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Hello World
          </a>
        </header>
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
