import axios from 'axios'
import React, { useEffect, useState } from 'react'
import EditIcon from '@mui/icons-material/Edit';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import AddIcon from '@mui/icons-material/Add';
import { Link } from 'react-router-dom';

const PaductDashComp = () => {
    
const [product,setProduct] = useState([]);
    useEffect(()=>{
        fetchData();
    },[]);

    const fetchData = ()=>{
        axios.get("http://localhost:8888/products").then((res)=>{
            console.log(res.data);
            setProduct(res.data);
        }).catch((error)=>{})
    }

    //delete request 
    const deleteRecord = (id)=>{
        if(window.confirm(`Are you sure to delete product with id :${id}`)){
            axios.delete(`http://localhost:8888/products/${id}`).then(()=>{
                window.alert("Product delete successfully");
                fetchData();
              }).catch((error)=>{})
        }
      
    }
    return (
        <div>
            <h2>This is Product Dashboard Components</h2>
            <Link to="/maindash/addproduct" className='btn btn-primary mb-2'> 
            <AddIcon></AddIcon> Add
            </Link>

            <table className='table table-hover table-striped table-bordered'>
                <thead>
                    <tr>
                        <th>Sr.No</th><th>Name</th><th>Price</th><th>Company</th>
                        <th>Address</th><th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {
                    product.length > 0  &&   product.map((val,index)=>{
                            return <tr>
                                <td>{index+1}</td>
                                <td>{val.pname}</td>
                                <td>{val.pprice}</td>
                                <td>{val.pcompany}</td>
                                <td>{val.address}</td>
                                <td>
                                    <Link to={`/maindash/productedit/${val.id}`} className='btn btn-outline-success btn-sm'>
                                     <EditIcon></EditIcon>
                                    </Link> |
                                    <button type='button' onClick={()=>deleteRecord(val.id)} className='btn btn-outline-danger btn-sm'>
                                        <DeleteOutlineIcon></DeleteOutlineIcon>
                                    </button>
                                </td>
                            </tr>
                        })
                    }
                </tbody>
            </table>
        </div>
    )
}

export default PaductDashComp
