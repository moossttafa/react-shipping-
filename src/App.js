import React from 'react';
import {BrowserRouter as Router , Switch  , Route} from "react-router-dom"
import Home from "./Components/Page/Home"
import './App.css';
import Navbar from './Components/Navbar/Navbar';
import About from './Components/Page/About';
import Chapping from './Components/Page/chapping';
import ContactUs from './Components/Page/ContactUs';
import {SignInOutContainer} from './Components/Page/Register';

function App() {
 
  return ( 
    <Router>
      <Navbar />
      <Switch>
        <Route exact path="/"> 
          <Home />
        </Route>
        <Route path="/about">
           <About />
         </Route>
         <Route path="/contactus">
           <ContactUs />
         </Route>
         <Route path="/shapping">
           <Chapping />
         </Route>
         <Route path="/register">
           <SignInOutContainer />
         </Route>
      </Switch>
    </Router>
  );
}

export default App;
