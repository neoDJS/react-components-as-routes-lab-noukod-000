import React from 'react';
import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom';
import NavBar from '../components/NavBar';
import Home from '../components/Home';
import Actors from '../components/Actors';
import Directors from '../components/Directors';
import Movies from '../components/Movies';


const App = (props) => {
  return (
    <Router>
      {/*{code here}*/}
      <React.Fragment>
        <Navbar />
        <Route exact path="/" component ={Home} />
        <Route exact path="/about" component ={About} />
        <Route exact path="/login" component ={Login} />
      </React.Fragment>
    </Router>
  );
};

export default App
