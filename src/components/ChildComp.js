import React from 'react'

const ChildComp = (props) => {

    const {name,salary,changeDetail} = props;
    return (
        <div>
            <h2>This is Child Component</h2>
            {/* <p>Employee name is :<strong>{props.name}</strong></p>
            <p>Employee Salary is :<strong>{props.salary}</strong></p> */}
            <p>Employee name is :<strong>{name}</strong></p>
            <p>Employee Salary is :<strong>{salary}</strong></p>
        </div>
    )
}

export default ChildComp
