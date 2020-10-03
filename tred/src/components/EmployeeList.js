import React, {Component} from "react";
import axios from "axios";
//import EmpRow from "./EmpRow";
//import TestEmp from "./TestEmp.json"


class EmployeeList extends React.Component{
        state = {
            search: "",
            employees: []
        }

    componentDidMount(){
        console.log("Line 11 EmployeeList.js");
        this.getRandomUsers();
    
    }

    getRandomUsers = () => {
        let empListt = axios.get("https://randomuser.me/api/results=200&nat=us");
    };


    render(empList){
        
        return(
            <div>Hello</div>
        )
    }


}

export default EmployeeList;