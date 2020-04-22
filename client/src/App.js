import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import Navbar from "./component/Navbar/index";
import Footer from "./component/Footer/index"


function App() {
  return (

      <Router>
    
      <Navbar />

        {/* <Route exact path="/" component={About} />
        <Route exact path="/about" component={About} />
        <Route exact path="/discover" component={Discover} />
        <Route exact path="/search" component={Search} /> */}

      <Footer />
   
      </Router>




  );
}

export default App;
