import React from 'react';
import {
  BrowserRouter as Router, Route, Switch,
} from 'react-router-dom';
import Home from './home';
import Nav from './nav';
import About from './about';
import Contact from './contact';
import Portfolio from './portfolio';
import OurStories from './ourStories';
import HydroPlanter from './hydro';
import NextGen from './nextGen';
import Snappy from './snappy';
import Pavilion from './pavilion';
import StudioArt from './studioart';
import Technolosis from './technolosis';
import Pickpocked from './pickpocked';
import FearNot from './fear';
import Spill from './spill';
import Dart from './dart';

const FallBack = (props) => {
  return <div>URL Not Found</div>;
};

function App(props) {
  return (
    <Router>
      <div>
        <Nav />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/about" component={About} />
          <Route exact path="/contact" component={Contact} />
          <Route exact path="/portfolio" component={Portfolio} />
          <Route exact path="/portfolio/ourstories" component={OurStories} />
          <Route exact path="/portfolio/nextgen" component={NextGen} />
          <Route exact path="/portfolio/snappy" component={Snappy} />
          <Route exact path="/portfolio/pavilion" component={Pavilion} />
          <Route exact path="/portfolio/studioart" component={StudioArt} />
          <Route exact path="/portfolio/technolosis" component={Technolosis} />
          <Route exact path="/portfolio/pickpocked" component={Pickpocked} />
          <Route exact path="/portfolio/hydro" component={HydroPlanter} />
          <Route exact path="/portfolio/fearnot" component={FearNot} />
          <Route exact path="/portfolio/spillthebeans" component={Spill} />
          <Route exact path="/portfolio/dartterm" component={Dart} />
          <Route component={FallBack} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
