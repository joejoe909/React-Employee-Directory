import React from "react";
import "./tblHolder.css";
import EmpRow from "./EmpRow.js" 

function Holder() {
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
          <EmpRow />
          <EmpRow />
          <EmpRow />
          <EmpRow />
          
        </tbody>
      </table>
    </>
  );
}


export default Holder;