import React, { useState } from 'react'

const FormValComp = () => {
    const [user,setUser] = useState({
        fname:"",
        lname:"",
        email:"",
        password:"",
        term:false
    });

    const inputChangeHandler = (event)=>{
    //  console.log(event.target.type);
    //  console.log(event.target.name);
    //  console.log(event.target.value);
    //  setUser({[event.target.name]:event.target.value})
    const {type,name,value,checked} = event.target;
    setUser({...user,[name]:type==="checkbox"? checked : value});
    }

    const chekAll = (event)=>{
     event.preventDefault();
     if(user.fname.trim()===""){
       window.alert("fname is required");
       return false;
     }
     if(!user.fname.match('[a-zA-Z]{2,15}')){
        window.alert("fname must contain Only character min-2 and max-15");
        return false;
     }
     if(user.term===false){
        window.alert("please accept term and condition");
        return false;
     }
    
     window.alert(JSON.stringify(user));
    }
    return (
        <div>
           <h2>This is Form validation Component</h2> 
           <form onSubmit={chekAll}>
            <label>Enter First Name:</label>
            <input type='text' name='fname' onChange={inputChangeHandler} value={user.fname} /> <br /><br />
             <label>
                <input type='checkbox' name='term'  onChange={inputChangeHandler} value={user.term} /> 
                I Accept Term And Condition
             </label><br /><br />
           <button type='submit' className='btn btn-primary'>Submit</button>
           </form>
        </div>
    )
}

export default FormValComp
