import React, {Component} from "react";
import axios from "axios";
import "./tblHolder.css";
import EmpRow from "./EmpRow"

class Holder extends Component {
  state = {
    search: "",
    results: []
  };
  componentDidMount() {
    axios.get('https://randomuser.me/api/?results=10&inc=name,registered,picture,cell,email')
    .then(res=>{
      console.log(res.data.results)
      let rslt = res.data.results;
      rslt.data.results.map(empList=>({
        image: `${empList.picture.thumbnail}`,
        name: `${empList.name.first}${empList.name.last}`,
        phone: `${empList.cell}`,
        email: `${empList.email}`,
        dob: `${empList.dob.date}`    
      }));
      console.log(JSON.parse(rslt));
      this.results=JSON.parse(rslt);
      
    }).catch(err=> console.log(err));
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
            {this.state.results.map(emp =>(
              <EmpRow img= {this.results.picture.thumbnail}/> 
            ))}
          </tbody>
        </table>
      </>
    );
  }
}


export default Holder;