import React, { Component } from "react";


class EmpRow extends Component({thumbnail, name, phone, email, dob}) {
    constructor(props){
        this.image = {thumbnail};
        this.name = {name};
        this.phone = {phone};
        this.email = {email};
        this.dob = {dob};
    }
    render() {
        return (
            <>
                <tr>
                    <td><img src ={this.image}/></td>
                    <td>{this.name}</td>
                    <td>{this.phone}</td>
                    <td>{this.email}</td>
                    <td>{this.dob}</td>
                </tr>
            </>
        );
    }
}

export default EmpRow;
