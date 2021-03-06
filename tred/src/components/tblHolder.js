import React, { Component } from "react";
import axios from "axios";
import "./tblHolder.css";
import EmpRow from "./EmpRow";
import SearchBar from "./SearchBar.js"; //will need to employe react router here

class Holder extends Component {
  constructor(props) {
    super(props);
    this.state = {
      //Do not modify state directly, the only place you can is here in the constructor.
      search: "",
      results: [],
      isToggleOn: true,

    };
  }
  // https://www.medianic.co.uk/introduction-to-api-calls-with-react-and-axios/
  //  (from the link above) Note that I didn’t use the id option provided in the API due to the fact that it sometimes returns null for some users.So, just to make sure that there will be a unique value for each user, I included the registered option in the API.
  componentDidMount() {
    axios
      .get(
        "https://randomuser.me/api/?results=20&inc=name,registered,picture,cell,email,dob,login"
      )
      .then((res) =>
        res.data.results.map((result) => ({
          image: result.picture.thumbnail,
          name: `${result.name.first} ${result.name.last}`,
          phone: result.cell,
          email: result.email,
          dob: result.dob.date,
          key: result.login.salt, // I was playing with this but this helps prevent an error
        }))
      )
      .then((newData) => {
        this.setState({ results: newData });
      })
      .catch((err) => console.log(err));
  }

  handleInputChange = (event) => {
    const { name, value } = event.target;
    this.setState({
      [name]: value,
    });
  };

  handleClick=(e)=>{
    // e.preventDefault();
    console.log("A Click event occured");
  }

  searchMode(search) {
    if (search) return true;
  }

  filterResults = (emp) => {
    const { search } = this.state;
    if (!search) return true;

    for (const key in emp) {
      if (emp[key].toLowerCase().includes(search.toLowerCase())) return true;
    }

    return false;
  };

  render() {
    const { results, search } = this.state;

    return (
      <>
        <div>
          <SearchBar
            search={this.state.search}
            handleInputChange={this.handleInputChange}
          />
        </div>
        <div>
          <table className="blueTable">
            <thead>
              <tr onClick={this.handleClick}>
                <th>Image</th>
                <th> <button> Name</button></th>
                <th>Phone</th>
                <th>Email</th>
                <th>DOB</th>
              </tr>
            </thead>
            <tbody>
              {search
                ? results
                    .filter(this.filterResults)
                    .map((emp) => <EmpRow {...emp} />)
                : results.map((emp) => <EmpRow {...emp} />)}
            </tbody>
          </table>
        </div>
      </>
    );
  }
}

export default Holder;
