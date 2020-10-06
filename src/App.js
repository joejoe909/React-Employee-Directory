import React from 'react';
import './App.css';
import Header from "./components/header.js";
import Navigationbar from "./components/Navigationbar.js";
import Holder from "./components/tblHolder.js";

function App() {
  return (
    <div className="App">
        <Navigationbar />
        <Header />
        <Holder />
     </div>  
  );
}

export default App;
