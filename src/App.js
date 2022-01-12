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
import { createBrowserHistory } from 'history';

const trackingId = "UA-216933057-1";
ReactGA.initialize(trackingId);

const history = createBrowserHistory();

// Initialize google analytics page view tracking
history.listen(location => {
  ReactGA.set({ page: location.pathname }); // Update the user's current page
  ReactGA.pageview(location.pathname); // Record a pageview for the given page
});

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
    </Router>
    </div>
  );
}

export default App;
