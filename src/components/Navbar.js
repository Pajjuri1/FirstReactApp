import React from "react";
import reactLogo from "../images/react-icon-small.png";

export default function Navbar(){
    return(
       <nav>
           <img src={reactLogo} alt="ReactLogo" className='nav-image' />
           <h1 className='nav-heading'>React Facts</h1>
       </nav>
    )
}