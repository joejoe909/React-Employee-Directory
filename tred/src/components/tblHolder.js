import React, {Component} from "react";
import "./tblHolder.css";
import API from "../util/API"
// import EmpRow from "./EmpRow"

class Holder extends Component {
  componentDidMount() {
    let emp = API.getUsers();
    console.log(emp); //PromiseResult.data

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