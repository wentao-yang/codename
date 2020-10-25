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
}

export default App;
