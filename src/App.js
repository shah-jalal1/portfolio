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
import Blogs from './components/Blogs/Blogs';
import Contact from './components/Contact/Contact';

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
        <Route exact path="/blogs">
          <Blogs></Blogs>
        </Route>
        <Route exact path="/contact">
          <Contact></Contact>
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
