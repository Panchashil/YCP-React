import logo from './logo.svg';
import './App.css';
import FunctionComp from './components/FunctionComp';
import ClassComp from './components/ClassComp';
import MyStateComp from './components/MyStateComp';
import MyEventComp from './components/MyEventComp';
import MyCounterComp from './components/MyCounterComp';
import ConditionalRenComp from './components/ConditionalRenComp';
import ParentComp from './components/ParentComp';
import MyImagesComp from './components/MyImagesComp';
import MySalaryComp1 from './components/MySalaryComp1';
import MySalaryComp2 from './components/MySalaryComp2';
import UseStateComp from './Hooks/UseStateComp';
import UseEffectComp from './Hooks/UseEffectComp';
import FormValComp from './components/FormValComp';

function App() {
  return (
    <div className="App">
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}
   <h1>Welcome You All In My React Session</h1>
    
    {/* <FunctionComp myName="Panchashil Wankhede" myPost="Fullstack Developer" />
    <ClassComp myName="Anmol chaware" myPost="React Developer" /> */}
   {/* <MyStateComp company="Hematite Infotech Pvt Ltd" address="Pune" /> */}
   {/* <MyEventComp />
   <MyCounterComp />
   <ConditionalRenComp />
   <ParentComp />
   <MyImagesComp /> */}
   {/* <MySalaryComp1 /> */}
   {/* <MySalaryComp2 /> */}
   {/* <UseStateComp /> */}
   {/* <UseEffectComp /> */}
   <FormValComp />
    </div>
  );
}

export default App;
