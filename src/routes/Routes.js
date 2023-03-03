import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Catagory from "../Pages/Catagory/Catagory";
import Home from "../Pages/Home/Home";
import Login from "../Pages/Login/Login";
import Signup from "../Pages/Signup/Signup";

 export const router = createBrowserRouter([
     
     {path:'/', element:<Main></Main>, children:[
 
      {path:'/', element:<Home></Home>},
      {path:'/login', element:<Login></Login>},
      {path:'/signup', element: <Signup></Signup>},
      {path:'catagory/:id', element:<Catagory></Catagory>,
      
      loader:({params})=> fetch(`https://localhost:5000/categories${params.id}`)
     }

     ]}
     
])