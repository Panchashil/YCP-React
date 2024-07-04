import React ,{useEffect, useState}from 'react'

const UseStateComp = () => {
       const [count,setCount] = useState(0); 
       const [name,setName] = useState("Panchashil");
       const [breakFast,setBreakFast] = useState([
        {id:1,name:"Vadapav"},
        {id:2,name:"Idali"},
        {id:3,name:"Upma"},
        {id:4,name:"Poha"},
        {id:5,name:"Dosa"}
    ])

       const counterInc = ()=>{
        setCount(count+1);
       }

    useEffect(()=>{
        let brArray= breakFast;
        let brIndex = breakFast.findIndex((b)=>b.id===3); // index 2
        let brData = breakFast.find((b)=>b.id===3); // complete object
        if(brData){
           brArray.splice(brIndex,1,{name:"Bhaje"});
           setBreakFast(brArray);
        }
    },[name])
    
    return (
        <div>
          <h2>This is UseState components</h2>  
          <p>Counter value is :<strong>{count}</strong></p>
          <button type='button' onClick={()=>counterInc()}>Counter++</button>{' '}
          <button type='button' onClick={()=>setCount(count+1)}>Counter++</button>
          <hr/>
          <p>My Name is :<strong>{name}</strong></p>
          <button type='button' onClick={()=>setName("Panchashil Wankhede")}>Change name</button>
        
          <ul>
            {
             breakFast.length > 0 &&  breakFast.map((val,index)=>{
                    // return <li key={val.id}>{val.name}</li>
                    return <li key={index}>{val.name}</li>
                })
            }
          </ul>
        </div>
    )
}

export default UseStateComp
