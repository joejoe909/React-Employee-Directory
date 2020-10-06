import React from "react";
import "./style.css";
import { Navbar } from 'reactstrap';


function Navigationbar(){
    
    return(
        <div>
            <Navbar className="myNavBar">
                <h1 className="h1Color">Employee Directory</h1>
            </Navbar>
        </div>
    )

}

export default Navigationbar;