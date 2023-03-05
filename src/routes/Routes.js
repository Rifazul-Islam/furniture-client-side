import { createBrowserRouter } from "react-router-dom";
import DeshboardLayout from "../DeshboardLayout/DeshboardLayout";
import Main from "../Layout/Main";
import Blog from "../Pages/Blog/Blog";
import Category from "../Pages/Category/Category";
import Myorder from "../Pages/Deshboard/Myorder/Myorder";
import AddProduct from "../Pages/Deshboard/MyProduct/AddProduct";
import MyProduct from "../Pages/Deshboard/MyProduct/MyProduct";
import Home from "../Pages/Home/Home";
import Login from "../Pages/Login/Login";
import Signup from "../Pages/Signup/Signup";

 export const router = createBrowserRouter([
     
     {path:'/', element:<Main></Main>, children:[
 
      {path:'/', element:<Home></Home>},
      {path:'/login', element:<Login></Login>},
      {path:'/signup', element: <Signup></Signup>},
      {path:'/blog', element: <Blog></Blog>},
      {path:'/category/:id', element:<Category></Category>,
    //    loader:({params})=> fetch(`http://localhost:5000/categories/${params.id}`)

    }

     ]},


     {path:'/deshboard', element: <DeshboardLayout></DeshboardLayout>, children:[

      {path:'/deshboard/addProduct', element:<AddProduct></AddProduct> },
      {path:'/deshboard/myProduct', element:<MyProduct></MyProduct> },
      {path:'/deshboard/myorder', element:<Myorder></Myorder> },
     ]}
     
])