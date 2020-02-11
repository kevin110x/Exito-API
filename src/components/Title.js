import React from 'react';
import logo from "../resources/LogoS.png";
import { Link } from 'react-router-dom';
 
export const Title = ({ children }) => (
  <div>
    <h1 className="title Title">{children}
    <img src={logo} className="LogoS" alt="logo" />
        <span style={{paddingLeft: "40px"}}>Spotify</span>
        <Link to='/' className="List" style={{fontSize: "14px",paddingTop: "10px", color: "white"}}>LISTA DE ARTISTAS</Link>
    </h1>
  </div>
)
