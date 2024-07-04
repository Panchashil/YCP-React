import React, { Component } from 'react'

const HOC = (WrapperComponent) => {
      
    class HocComp extends Component{
        constructor(props) {
            super(props)
            this.state = {
                 salary:950000
            }
        }
    
        incrementSalary=()=>{
            this.setState((prevState)=>({salary:prevState.salary+1000}))
        }
        render(){
            return <div>
                <WrapperComponent salary={this.state.salary} incrementSalary={this.incrementSalary} {...this.props} />
            </div>
        }
    }

     return HocComp;
}

export default HOC;
