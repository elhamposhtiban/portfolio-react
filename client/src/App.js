import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Navbar from "./component/Navbar/index";
import Footer from "./component/Footer/index";
import Bio from "./component/Pages/bio";
import Portfolio from "./component/Pages/portfolio";
import Contact from "./component/Pages/contact"


function App() {
  return (

      <Router>
        
            <Navbar />
              <Route exact path="/" component={Bio} />
              <Route exact path="/bio" component={Bio} />
              <Route exact path="/contact" component={Contact} />
              <Route exact path="/portfolio" component={Portfolio} />
            <Footer />
      
      </Router>




  );
}

export default App;
