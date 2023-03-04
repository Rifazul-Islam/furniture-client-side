import React, { useContext } from 'react';
import { Link, Outlet } from 'react-router-dom';
import { AuthContext } from '../constext/AuthProvider';
import Footer from '../Pages/Shared/Footer/Footer';
import Navbar from '../Pages/Shared/Navbar/Navbar';

const DeshboardLayout = () => {

    const {user} = useContext(AuthContext)
    // const [isAdmin] = useAdmin(user?.email)
    // const [isBuyer] = useBuyer(user?.email)
    // const [isSeller] = useSeller(user?.email)

    return (
        <div >
         <Navbar></Navbar>
         <div className="drawer drawer-mobile">
          <input id="deshboard-drawer" type="checkbox" className="drawer-toggle" />
     
      <div className="drawer-content">
       <Outlet></Outlet>
        
      
      </div> 
    
       <div className="drawer-side">
        <label htmlFor="deshboard-drawer" className="drawer-overlay"></label> 
        <ul className="menu p-4 w-80 bg-base-100 text-base-content">
           
           {/* {
             isAdmin && <>
             <li><Link to='/deshboard/allSeller'> All Seller </Link></li> 
            <li><Link to='/deshboard/allBuyer'> All Buyer </Link></li> 
            <li><Link to='/deshboard/reportedItem'> Reported Items </Link></li> 
              </>
              
           } */}
    
{/*     
          {
              isBuyer && 
              <li><Link to='/deshboard/myOrders'> My Orders</Link></li> 
          },
     */}
    
               
    
         
               
          
              <li><Link to='/deshboard/addProduct' > Add Product</Link></li>
             <li><Link to='/deshboard/myProduct' > my Product</Link></li>
           
               
        </ul>
      
      </div>
    </div>
          <Footer></Footer>
    </div>
        );
};

export default DeshboardLayout;