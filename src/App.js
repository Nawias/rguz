import React from "react";
import "./App.css";
import CookiesComponent from "./components/Cookies";
import Header from "./components/Header";
import Home from "./components/Home";
import About from "./components/About";
import Services from "./components/Services";
import Work from "./components/Work";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { CookiesProvider } from "react-cookie";

function App() {
  return (
    <div className="App">
      <Router>
        <CookiesProvider>
          <CookiesComponent />
        </CookiesProvider>
        <Header />
        <div className="appBody">
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route path="/o-nas">
              <About />
            </Route>
            <Route path="/uslugi">
              <Services />
            </Route>
            <Route path="/praca">
              <Work />
            </Route>
            <Route path="/kontakt">
              <Contact />
            </Route>
          </Switch>
        </div>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
