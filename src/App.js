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
