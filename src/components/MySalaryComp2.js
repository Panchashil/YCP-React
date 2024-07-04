import React, { Component } from 'react';
import HOC from './HOC';

class MySalaryComp2 extends Component {
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
                <h2>This is My Salary Component Two</h2>  
              {/* <p>My Salary is :<strong>{this.state.salary}</strong></p> 
             <h2 onMouseOver={()=>this.incrementSalary()}>Salary ++</h2> */}
             
             <p>My Salary is :<strong>{this.props.salary}</strong></p> 
             <h2 onMouseOver={this.props.incrementSalary}>Salary ++</h2>
            </div>
        )
    }
}

export default HOC(MySalaryComp2) 
