import React, { Component } from "react";

class ClassComp extends Component{

    render(){
        return <div>
            <h2>This is Class Component</h2>
            <p>My Name is :{this.props.myName}, I am :{this.props.myPost}</p>
        </div>
    }
}
export default ClassComp;