import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Home from './components/Home/home/Home';
import Header from './components/Header/Header';
import About from './components/About/About';
import Porjects from './components/Projects/Porjects';

function App() {
  return (
    <Router>
      <Header></Header>
      <Switch>
        <Route exact path="/">
          <Home></Home>
        </Route>
        <Route exact path="/home">
          <Home></Home>
        </Route>
        <Route exact path="/about">
          <About></About>
        </Route>
        <Route exact path="/projects">
          <Porjects></Porjects>
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
