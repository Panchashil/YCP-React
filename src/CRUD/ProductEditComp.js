import axios from 'axios';
import React, { useEffect,useState } from 'react'
import { useParams,useNavigate } from 'react-router-dom'
const ProductEditComp = () => {
   
    const {id} = useParams();
    const nav = useNavigate();

    const [productData,setProductData] = useState({
        id:"",
        pname:'',
        pprice:'',
        pcompany:'',
        address:''  
      });

      const inputChangeHandler = (event)=>{
        setProductData({...productData,[event.target.name]:event.target.value})
      }

    useEffect(()=>{
      axios.get(`http://localhost:8888/products/${id}`).then((res)=>{
        // console.log(res.data);
        setProductData(res.data);
      }).catch((error)=>{})
    },[]);

    // put request
const addData = (event)=>{
    event.preventDefault();
    axios.put(`http://localhost:8888/products/${id}`,productData).then(()=>{
        window.alert("Product Updated Successfully");
        nav("/maindash/productdash");
    }).catch((error)=>{})
}
    return (
        <div>
            <h2>This is product Edit Components</h2>
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

export default ProductEditComp
