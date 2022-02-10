import React from "react";
import Table from './Table'
import Filter from './Filter'
import Pagination from './Pagination'

const App = (props) => {
    return (
        <React.Fragment>
<div className="table-container">
      <Filter />
    <Table />
     <Pagination />
    </div>
        </React.Fragment>
    )

}


export default App