import React from 'react';
import './App.css';
import Header from "./components/header.js";
import Navigationbar from "./components/Navigationbar.js";
import Holder from "./components/tblHolder.js";
import SearchBar from "./components/SearchBar.js"; //will need to employe react router here


function App() {
  return (
    <div className="App">
        <Navigationbar />
        <Header />
        <SearchBar />
        <Holder />
     </div>  
  );
}

export default App;
