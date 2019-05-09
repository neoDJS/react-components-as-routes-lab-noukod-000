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
        <NavBarNavBar />
        <Route exact path="/" component ={Home} />
        <Route exact path="/about" component ={Actors} />
        <Route exact path="/login" component ={Directors} />
        <Route exact path="/login" component ={Movies} />
      </React.Fragment>
    </Router>
  );
};

export default App
