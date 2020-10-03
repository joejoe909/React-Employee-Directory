import React from "react";
import "./tblHolder.css";
import API from "../util/API"
// import EmpRow from "./EmpRow.js" 
// import  EmployeeList from "./EmployeeList";

//  function GenerateEmpLst(){
//    return <EmployeeList />;
//  }

function Holder() {
  //const empList = GenerateEmpLst();
  // console.log(empList);
  function componentDidMount(){
    getEmployeeList();
  }

  let getEmployeeList =()=>{
    let emp = API.getUsers();
    // let emplist = result.data.results;
    console.log(emp);
    console.log(emp.data);
  }

  componentDidMount();

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


export default Holder;