import React, { Component } from "react";
import axios from "axios";
import "./tblHolder.css";
import EmpRow from "./EmpRow"
import SearchBar from "./SearchBar.js"; //will need to employe react router here

class Holder extends Component {
  constructor() {
    super()
    this.state = {
      search: "",   //stores original list from API.
      results: []
    };
  }

  //https://www.medianic.co.uk/introduction-to-api-calls-with-react-and-axios/
  //(from the link above) Note that I didn’t use the id option provided in the API due to the fact that it sometimes returns null for some users.So, just to make sure that there will be a unique value for each user, I included the registered option in the API.
  componentDidMount() {
    axios.get('https://randomuser.me/api/?results=200&inc=name,registered,picture,cell,email,dob,login')
      .then(res => res.data.results.map(result => (
        {
          image: result.picture.thumbnail,
          name: `${result.name.first} ${result.name.last}`,
          phone: result.cell,
          email: result.email,
          dob: result.dob.date,
          key: result.login.salt,  // I was playing with this but this helps prevent an error
          id:result.register
        }
      ))).then(newData => {
        this.setState({ store: newData, results: newData })
      }
      ).catch(err => console.log(err));
    console.log(this.state.results);
    this.checkResults();
  }

  checkResults() {
    console.log(this.state.results);
  }

  filterResults(emp) {
    const {search} = this.state;
    if (!search) return true;

    for (const key in emp) {
      if (emp[key].toLowerCase().includes(search.toLowerCase()))
        return true;
    }
    return false;
  };

  handleInputChange = (e) => {
    const { name, value } = e.target;
    this.setState({
      [name]: value,
    });
  }

  render() {

    console.log(this.state.results)
    const rslt = this.state.results;
    // let refnd = rslt.map((emp) => <EmpRow {...emp} />);
  
    return (
      <>
        <SearchBar
          search={this.state.search}
          handleInputChange={this.handleInputChange}
        />
        <div>
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
             {rslt.map((emp)=> <EmpRow{...emp}/>)} 
            </tbody>
          </table>
        </div>
      </>
    );
  }
}

export default Holder;