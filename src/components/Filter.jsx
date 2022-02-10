import React from "react";

const Filter = (props) => {
    return (
        <React.Fragment>
<div className="p-2 d-flex">
        <span className="items-per-page  p-1">show</span>
        <input style={{ width: "40px" }} className="border m-1" type="number" defaultValue="1" className="me-auto" />
        <input type="text" className="border ms-auto" placeholder="Search here" />
        <button style={{ borderRadius: "0px" }} className="btn p-1 btn-secondary">Search</button>
      </div>
        </React.Fragment>
    )

}


export default Filter