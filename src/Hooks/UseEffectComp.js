import React, { useEffect, useState } from 'react'

const UseEffectComp = () => {
const [count,setCount] = useState(0);
const [salary,setSalary] = useState(55000); 

// case:1
    // useEffect(()=>{
    //     console.log("useEffect call");
    //     setCount(count+1);
    // });

// case:2
    // useEffect(()=>{
    //     console.log("useEffect call");
    //     setCount(count+1);
    // },[]);

// case:3
    useEffect(()=>{
        console.log("useEffect call");
        setCount(count+1);
    },[salary]);
    
    return (
        <div>
            <h2>This is UseEffect Hooks components</h2>
            <p>Counter Value Is:<strong>{count}</strong></p>
            <p>My Salary Is:<strong>{salary}</strong></p>
            <button type='button' onClick={()=>setSalary(salary+1000)}>Increment Salary</button>
        </div>
    )
}

export default UseEffectComp
