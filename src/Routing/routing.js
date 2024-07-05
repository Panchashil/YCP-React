import { createBrowserRouter } from "react-router-dom";
import ClassComp from "../components/ClassComp";
import FormValComp from "../components/FormValComp";
import ParentComp from "../components/ParentComp";
import MyImagesComp from "../components/MyImagesComp";
import ReactHooksComp from '../Hooks/ReactHooksComp';
import UseStateComp from '../Hooks/UseStateComp';
import UseEffectComp from '../Hooks/UseEffectComp';
import PageNotFoundComp from "../layout/PageNotFoundComp";
import MainDashboard from "../layout/MainDashboard";
import PaductDashComp from "../CRUD/PaductDashComp";
import AddProductComp from "../CRUD/AddProductComp";
import ProductEditComp from "../CRUD/ProductEditComp";


const router = createBrowserRouter([

    {path:"maindash",element:<MainDashboard />,children:[
             //2.default routing 
    {path:"",element:<MyImagesComp />},
    {path:"images",element:<MyImagesComp />},
    // 1. naming roputing 
    {path:"classcomp",element:<ClassComp />},
     {path:"productdash",element:<PaductDashComp />},
     {path:"addproduct",element:<AddProductComp />},
     {path:"productedit/:id",element:<ProductEditComp />},
    // 3.parameterize routing 
    {path:"parent/:id",element:<ParentComp />},
    {path:"parent",element:<ParentComp />},
    {path:"formval",element:<FormValComp />},
    // 4.child routing 
    {path:"hooks",element:<ReactHooksComp />,children:[
        {path:"usestate",element:<UseStateComp />},
        {path:"useeffect",element:<UseEffectComp />}
    ]},
    ]},
   
    //5.wild card routing 
    {path:"*",element:<PageNotFoundComp />}
    
]);
export default router;