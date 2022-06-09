import { useState } from "react";
import Product from "./Product";
import Table from "../pages/Table";
function ViewProduct(){

const [tableData, setTableData] = useState([])
    return(
       <div>
            <Table tableData={tableData}/>
           
       </div>
    )
}
export default ViewProduct;