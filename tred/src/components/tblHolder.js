import React, {Component} from "react";
import axios from "axios";
import "./tblHolder.css";
import API from "../util/API"
// import EmpRow from "./EmpRow"

class Holder extends Component {
  state = {
    search: "",
    results:[]
  };

  constructRows(){
    
  }

  componentDidMount() {
    axios.get("https://randomuser.me/api/?results=50")
    .then(res=>{
      console.log(res.data.results)
      let rslt = res.data.results;
      this.results = rslt;
      console.log(this.results);
    })
    .catch(err=> console.log(err));
    
  }

  render() {
    return (
      <>
        <table className="blueTable">
          <thead>
            <tr>
              <th>Image</th>
              <th>Name</th>
              <th>Phone</th>
              <th>Email</th>
              <th>DOB</th>
            </tr>
          </thead>

          <tbody>


          </tbody>
        </table>
      </>
    );
  }
}


export default Holder;