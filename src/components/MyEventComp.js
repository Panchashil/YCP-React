import React,{Component} from "react";

class MyEventComp extends Component{
   
    greeting(){
        window.alert("Welcome you all In YCP AIT");
    }
   welcome(std1,std2,std3){
     window.alert(`Welcome You ${std1}, ${std2}, ${std3}`)
   }
    render(){
        return <div>
            <h2>This is My Event Component</h2>
            <button type="button" onClick={()=>this.greeting()}>cleck on me to call Greeting</button>
           <h2 onMouseOver={()=>this.welcome("Shreyas","Tejas","Anmol")}>Hover on me to call welcome function</h2>
        </div>
    }
}
export default MyEventComp;