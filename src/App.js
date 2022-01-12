import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import home from './Components/pages/home';
import sweeteats from './Components/pages/sweeteats';
import lhmedia from './Components/pages/lhmedia';
import openspace from './Components/pages/openspace';
import emerald from './Components/pages/emerald';
import cms from './Components/pages/cms';

import ReactGA from 'react-ga';
// import RouteChangeTracker from './Components/Main/RouteChangeTracker'

const TRACKING_ID = "G-199HKKRZ60";
ReactGA.initialize(TRACKING_ID);
function App() {

  return (
    <div className="App">
    <Router>
      <Switch>
        <Route path="/" exact component={home}/>
        <Route path="/projects-sweeteats" exact component={sweeteats}/>
        <Route path="/projects-lhmedia" exact component={lhmedia}/>
        <Route path="/projects-openspace" exact component={openspace}/>
        <Route path="/projects-emerald" exact component={emerald}/>
        <Route path="/projects-cms" exact component={cms}/>
      </Switch>
      <Route path="/" render={({location}) => {
        if (typeof window.ga === 'function') {
          window.ga('set', 'page', location.pathname + location.search);
          window.ga('send', 'pageview');
        }
        return null;
      }} />
    </Router>
    </div>
  );
}

export default App;
