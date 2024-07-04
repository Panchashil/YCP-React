import React, { Component } from 'react'

class MyCounterComp extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
           count:0  
        }
    }
    counterIncrement(){
        this.setState((prevState)=>({count:prevState.count+1}))
    }
    render() {
        return (
            <>
               <h2>This is My Counter Component</h2> 
               <p>Counter Value is: <strong>{this.state.count}</strong></p>
               <button type='button' 
               onClick={()=>this.counterIncrement()}> Counte ++</button>
               <button type='button' >Counte --</button>
            </>
        )
    }
}

export default MyCounterComp
