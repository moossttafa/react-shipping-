import React, {useState , useEffect} from 'react';
import {BrowserRouter as Router , Switch  , Route} from "react-router-dom"
import Home from "./Components/Page/Home"
import './App.css';
import Navbar from './Components/Navbar/Navbar';
import About from './Components/Page/About';
import Chapping from './Components/Page/chapping';
import ContactUs from './Components/Page/ContactUs';
import {SignInOutContainer} from './Components/Page/Register';
import Loading  from "react-loader-spinner";

function App() {
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
       setTimeout(() => {
      setIsLoading(false);
    }, 2500);
  }, []);
  return ( 
    <>
     {isLoading==true ? (
      <Loading style={{ margin:  "50% 35% "}}
      type="Grid"
       type="Puff"
        color="#00BFFF"
       height={100}
       width={100}
       timeout={3000} //3 secs
        />
 
    ) :
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
  }
  </>
   );
}

export default App;
