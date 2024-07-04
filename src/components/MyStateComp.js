import React,{Component} from "react";

class MyStateComp extends Component{
     constructor(){
        super();
        this.state = {
            empName:"Panchashil",
            empSalary:85000
        }
        setTimeout(()=>{
            // this.setState({empName:"Panchashil Wankhede",empSalary:this.state.empSalary+10000});

            this.setState((prevState)=>({empName:"Panchashil Wankhede",empSalary:prevState.empSalary+10000}));
        },3000)
     }
    render(){
        const {empName,empSalary} = this.state; // destructure state
        const {company,address} = this.props; // destructure props
        return <div>
            <h2>This is MyStateComp</h2>
            {/* <p>Employee Name is :<strong>{this.state.empName}</strong></p>
            <p>Employee Salary is :<strong>{this.state.empSalary}</strong></p> */}
            <p>Employee Name is :<strong>{empName}</strong></p>
            <p>Employee Salary is :<strong>{empSalary}</strong></p>
            
            {/* <p>Company Name is :<strong>{this.props.company}</strong></p>
            <p>Address  is :<strong>{this.props.address}</strong></p> */}
            <p>Company Name is :<strong>{company}</strong></p>
            <p>Address  is :<strong>{address}</strong></p>
        </div>
    }
}
export default MyStateComp;
