import { Switch, Route } from 'react-router-dom';

import HomePage from './pages/HomePage/HomePage'
import LandingPage from './pages/LandingPage/LandingPage'
import MyCafes from './pages/MyCafes/MyCafes';

import './App.css';


const App = ()=> {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/" component={LandingPage} />
        <Route path="/home" component={HomePage} />
        <Route path="/mycafes" component={MyCafes}/>
      </Switch>
    </div>
  );
}

export default App;
