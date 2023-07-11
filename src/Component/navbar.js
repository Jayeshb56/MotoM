import React from "react";
import "./Navbar.css"
import "bootstrap/dist/css/bootstrap.min.css";
import {Link} from "react-router-dom";
import Avatar from '@mui/material/Avatar';





const Navbar = () => {
  return (
    <div>
    <nav className="navbar navbar-expand-lg navbar-light bg-white">
    <div className="container-fluid">
      <Link className="navbar-brand" to="/Navbar">Moto</Link>
      
        
      <div className="collapse navbar-collapse" id="navbarNavDropdown">
        <ul className="navbar-nav">
          <li className="nav-item">
            <Link className="nav-link active" aria-current="page" to="/Shop">Shop</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/Mobile">Mobile</Link>
          </li>
         
         
           
          
        </ul>
        
      </div>
      <div className="Avatar">
      <Avatar src="/broken-image.jpg" />
      </div>
    </div>
  </nav>
  </div>
  );
};
  
export default Navbar;