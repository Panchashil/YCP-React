import React, { Component } from 'react'
import ChildComp from './ChildComp';

class ParentComp extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             empName:"Anmol",
             empSal:95000
        }
    }
    
    changeEmpDetail(){
       this.setState((prevState)=>({empName:"Anmol Chaudhary",
        empSal:prevState.empSal+10000})); 
    }
    render() {
        const {empName,empSal} = this.state;
        return (
            <>
                <h2>This is Parent Component</h2>
                <p>Employee name is :<strong>{empName}</strong></p>
                <p>Employee Salary is :<strong>{empSal}</strong></p>
                <button type='button' onClick={()=>this.changeEmpDetail()}>
                    change emp Detail</button>

               <hr />
               <ChildComp name={empName} salary={empSal}></ChildComp>    
            </>
        )
    }
}

export default ParentComp
