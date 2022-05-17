import React from "react";
import Main from "./components/Main";
import Navbar from "./components/Navbar";

export default function App(){
    return(
        <div className='container-fluid'>
            <div className="row">
            <div className="col">
            <Navbar />
            <Main />
            </div>   
  
            </div>

        </div>   
    )
}