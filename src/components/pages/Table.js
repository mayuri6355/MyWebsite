function Table({tableData}){
    return(
        <table className="table">
            <thead>
                <tr>
                    <th>S.N</th>
                    <th>Product Name</th>
                    <th>Price</th>
                    <th>Quntity</th>
                </tr>
            </thead>
            <tbody>
            {
                tableData.map((data, index)=>{
                    return(
                        <tr key={index}>
                            <td>{index+1}</td>
                            <td>{data.productName}</td>
                            <td>{data.price}</td>
                            <td>{data.quntity}</td>
                        </tr>
                    )
                })
            }
            </tbody>
        </table>
    )
}

export default Table;