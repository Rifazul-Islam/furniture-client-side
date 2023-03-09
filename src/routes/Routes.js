import { createBrowserRouter } from "react-router-dom";
import DeshboardLayout from "../DeshboardLayout/DeshboardLayout";
import Main from "../Layout/Main";
import Blog from "../Pages/Blog/Blog";
import Category from "../Pages/Category/Category";
import AllBuyer from "../Pages/Deshboard/AllBuyer/AllBuyer";
import AllSeller from "../Pages/Deshboard/AllSeller/AllSeller";
import Myorder from "../Pages/Deshboard/Myorder/Myorder";
import AddProduct from "../Pages/Deshboard/MyProduct/AddProduct";
import MyProduct from "../Pages/Deshboard/MyProduct/MyProduct";
import Payments from "../Pages/Deshboard/Payments/Payments";
import Report from "../Pages/Deshboard/Report/Report";
import Home from "../Pages/Home/Home";
import Login from "../Pages/Login/Login";
import ErrorCheck from "../Pages/Shared/ErrorCheck/ErrorCheck";
import Signup from "../Pages/Signup/Signup";

 export const router = createBrowserRouter([
     
     {path:'/', element:<Main></Main>,
     errorElement:<ErrorCheck></ErrorCheck>,
     children:[
 
      {path:'/', element:<Home></Home>},
      {path:'/login', element:<Login></Login>},
      {path:'/signup', element: <Signup></Signup>},
      {path:'/blog', element: <Blog></Blog>},
      {path:'/category/:id', element:<Category></Category>,
      loader:({params})=> fetch(`https://furnitures-ten.vercel.app/categories/${params.id}`)

    }

     ]},


     {path:'/deshboard', element: <DeshboardLayout></DeshboardLayout>, children:[

      {path:'/deshboard/addProduct', element:<AddProduct></AddProduct> },
      {path:'/deshboard/myProduct', element:<MyProduct></MyProduct> },
      {path:'/deshboard/myOrders', element:<Myorder></Myorder> },
      {path:'/deshboard/allBuyer', element:<AllBuyer></AllBuyer>},
      {path:'/deshboard/allSeller', element:<AllSeller></AllSeller>},
      {path:'/deshboard/report', element: <Report></Report> },
      {path:'/deshboard/payments/:id', element: <Payments></Payments>,
    
      loader:({params})=> fetch(`https://furnitures-ten.vercel.app/bookings/${params.id}`)  
    
    },
     ]}
     
])