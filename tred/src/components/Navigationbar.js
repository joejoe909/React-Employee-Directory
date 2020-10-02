import React from "react";
import "./style.css";


function Navigationbar(){
    const st = { background: 'blue' };
    return(
        <navbar style = {st} className ="myNavBar">
            <h1 className="h1Color">Employee Directory</h1>
        </navbar> 
    )

}

export default Navigationbar;