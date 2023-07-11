import React from "react";
import { BrowserRouter as Router, Routes, 
  Route,} from "react-router-dom";
import Navbar from "./Component/navbar";
import Shop from "./Component/Shop.js";
import Mobile from "./Component/Mobile";


function App() {
  return (
   
    <Router>
      <Navbar />
      <Routes>
        <Route exact path="/Shop" Component={Shop} />
        <Route exact path="/Mobile" Component={Mobile} />
      </Routes>
    </Router>
   
  );
}

export default App;
