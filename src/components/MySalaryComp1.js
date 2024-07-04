import React, { Component } from 'react';
import HOC from './HOC';

class MySalaryComp1 extends Component {
    // constructor(props) {
    //     super(props)
    
    //     this.state = {
    //          salary:950000
    //     }
    // }

    // incrementSalary(){
    //     this.setState((prevState)=>({salary:prevState.salary+1000}))
    // }

    render() {
        return (
            <div>
             <h2>This is My Salary Component One</h2>  
             {/* <p>My Salary is :<strong>{this.state.salary}</strong></p> 
             <button type='button' onClick={()=>this.incrementSalary()}>Salary ++</button> */}
             
             <p>My Salary is :<strong>{this.props.salary}</strong></p> 
             <button type='button' onClick={this.props.incrementSalary}>Salary ++</button>
            </div>
        )
    }
}

// export default MySalaryComp1
export default HOC(MySalaryComp1) 
