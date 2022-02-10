import React from "react";

const Pagination = (props) => {
    return (
        <React.Fragment>
            <div className="table-footer d-flex">
                <span style={{ fontSize: "20px" }} className="items-showing ms-2">showing 5 of 10</span>
                <ul className="pagination ms-auto me-2">
                    <button style={{ borderRadius: "0px" }} className="btn btn-secondary">prev</button>
                    <li className="page-item border pe-2 p-2">1</li>
                    <li className="page-item p-2 border">2</li>
                    <li className="page-item p-2 border">3</li>
                    <li className="page-item p-2 border">4</li>
                    <button style={{ borderRadius: "0px" }} className="btn btn-primary">Next</button>
                </ul>
            </div>
        </React.Fragment>
    )

}


export default Pagination