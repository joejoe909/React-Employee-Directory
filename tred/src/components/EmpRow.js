import React from "react";

function EmpRow(props) {

    return (
        <>
            <tr>
                <td>{props.img}</td>
                <td>{props.name}</td>
                <td>{props.phone}</td>
                <td>{props.email}</td>
                <td>{props.dob}</td>
            </tr>
        </>
    );

}

export default EmpRow;
