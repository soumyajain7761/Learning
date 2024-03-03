import logo from './logo.svg';
import './App.css';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle";
import About from './components/About';
import Contact from './components/Contact';
import Home from './components/Home';
import Service from './components/Service';
import Navbar from './components/Navbar';
import { Switch, Route } from "react-router-dom";

function App() {
  return (
    <>
      <Navbar/>

      <Switch>
        <Route exact path="/" component={Home}></Route>
        <Route exact path="/about" component={About}></Route>
        <Route exact path="/contact" component={Contact}></Route>
        <Route exact path="/service" component={Service}></Route> 
      </Switch>
      
    </>
  );
}

export default App;
