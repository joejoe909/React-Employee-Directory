import React from "react";

function EmpRow(props) {
    let im = <img alt="random user" src={props.image} />;
    return (
        <>
            <tr key={props.id}>
                <td>{im}</td>
                <td>{props.name}</td>
                <td>{props.phone}</td>
                <td>{props.email}</td>
                <td>{props.dob}</td>
            </tr>
        </>
    );

}

export default EmpRow;
