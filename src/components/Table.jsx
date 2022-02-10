import React from "react";

const Table = (props) => {
    return (
        <React.Fragment>
  <table className="table table-hover ">
        <thead className="">
          <th>
            #
          </th>
          <th>
            Name
          </th>
          <th>
            Surname
          </th>
          <th>
            Contacts
          </th>
          <th>
            Date Moved In
          </th>
          <th>
            Room
          </th>
          <th>
            Due Pay
          </th>
          <th style={{ width: "40px", textAlign: "center" }}>
            Action
          </th>
        </thead>
        <tbody>

          <tr >
            <td>
              1
            </td>
            <td>
              Dakota Rice
            </td>
            <td>
              Niger
            </td>
            <td>
              Oud-Turnhout
            </td>
            <td>
              Oud-Turnhout
            </td>
            <td>
              Oud-Turnhout
            </td>
            <td>
              $36,738
            </td>
            <td className="d-flex border ">
              <button className="ms-auto ps-3 pe-3 border  text-danger">Edit</button>
              <button className="ms-0  ps-3 pe-3 border text-primary">Delete</button>
            </td>
          </tr>

          <tr >
            <td>
              1
            </td>
            <td>
              Dakota Rice
            </td>
            <td>
              Niger
            </td>
            <td>
              Oud-Turnhout
            </td>
            <td>
              Oud-Turnhout
            </td>
            <td>
              Oud-Turnhout
            </td>
            <td>
              $36,738
            </td>
            <td className="d-flex border ">
              <button className="ms-auto ps-3 pe-3 border  text-danger">Edit</button>
              <button className="ms-0  ps-3 pe-3 border text-primary">Delete</button>
            </td>
          </tr>

          <tr >
            <td>
              1
            </td>
            <td>
              Dakota Rice
            </td>
            <td>
              Niger
            </td>
            <td>
              Oud-Turnhout
            </td>
            <td>
              Oud-Turnhout
            </td>
            <td>
              Oud-Turnhout
            </td>
            <td>
              $36,738
            </td>
            <td className="d-flex border ">
              <button className="ms-auto ps-3 pe-3 border  text-danger">Edit</button>
              <button className="ms-0  ps-3 pe-3 border text-primary">Delete</button>
            </td>
          </tr>
        </tbody>
      </table>
        </React.Fragment>
    )

}


export default Table