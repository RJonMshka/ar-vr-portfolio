
import './App.css';
import {
  HashRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Home from "./Components/Home/Home";
import Header from './Components/Header/Header';
import Footer from './Components/Footer/Footer';
import Project1 from "./Components/Project1/Project1";
import About from "./Components/About/About";
import Project2 from './Components/Project2/Project2';

export default function App() {
  return (
    <Router>
      <div className="app">
      <Header />
        {/*
          A <Switch> looks through all its children <Route>
          elements and renders the first one whose path
          matches the current URL. Use a <Switch> any time
          you have multiple routes, but you want only one
          of them to render at a time
        */} 
        <main className="main">
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route path="/project1">
              <Project1 />
            </Route>
            <Route path="/project2">
              <Project2 />
            </Route>
            <Route path="/about">
              <About />
            </Route>
          </Switch>
        </main>
        <Footer />
      </div>
    </Router>
  );
};
