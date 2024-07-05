import axios from 'axios';
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';

const AddProductComp = () => {
    const nav = useNavigate();
    const [productData,setProductData] = useState({
      pname:'',
      pprice:'',
      pcompany:'',
      address:''  
    });

const inputChangeHandler = (event)=>{
     setProductData({...productData,[event.target.name]:event.target.value})
}
// post request
const addData = (event)=>{
    event.preventDefault();
    axios.post("http://localhost:8888/products",productData).then(()=>{
        window.alert("Product Added Successfully");
        nav("/maindash/productdash");
    }).catch((error)=>{})
}
    return (
        <div>
            <h2>This is Add Product Components</h2>
            <form onSubmit={addData}>
                <lable>Enter Product Name:</lable>
                <input type='text' name="pname" onChange={inputChangeHandler} value={productData.pname} /> <br/><br/>
                <lable>Enter Product Price:</lable>
                <input type='text' name="pprice" onChange={inputChangeHandler} value={productData.pprice} /> <br/><br/>
                <lable>Enter Product Company:</lable>
                <input type='text' name="pcompany" onChange={inputChangeHandler} value={productData.pcompany} /> <br/><br/>
                <lable>Enter Product Address:</lable>
                <input type='text' name="address" onChange={inputChangeHandler} value={productData.address} /> <br/><br/>
               <button type='submit' className='btn btn-primary mt-2'>Submit</button>
            </form>
        </div>
    )
}

export default AddProductComp
