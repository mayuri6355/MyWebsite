
function FormInput({handleChange, formInputData, handleSubmit}){
    return(
    
        <div className="form-col col">
         
           
      ProductName:
         <div className="col">
            <input type="text" onChange={handleChange} value={formInputData.productName} name="productName" className="form-control"  placeholder="Product Name" /><br></br>
          </div>
          Price:<div className="col">
            <input type="email" onChange={handleChange} value={formInputData.price} name="price" className="form-control" placeholder="price" /><br></br>
          </div>
         Quntity: <div className="col">
            <input type="text" onChange={handleChange} value={formInputData.quntity} name="quntity" className="form-control" placeholder="Quntity" /><br></br>
          </div>
          <div className="col">
            <input type="submit" onClick={handleSubmit} className="btn btn-primary" value="Add Product" ></input>
          </div>
        </div>
     
      
    )
    }
    
    export default FormInput;