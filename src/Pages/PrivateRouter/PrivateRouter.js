import React, { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { AuthContext } from '../../constext/AuthProvider';

const PrivateRouter = ({children}) => {
    const {user ,  loding} = useContext(AuthContext)
    const location = useLocation()
      
    if(loding){

           return <div> Loding... </div>
    }
   

       if(user){
         return children
       }

       return <Navigate to='/login' state={{from:location}} replace></Navigate>
};

export default PrivateRouter;