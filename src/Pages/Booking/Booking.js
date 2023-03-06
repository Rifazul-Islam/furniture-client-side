import React, { useContext } from 'react';
import { toast } from 'react-hot-toast';
import { AuthContext } from '../../constext/AuthProvider';

const Booking = ({productAllData,cancalModal}) => {

    const {user} = useContext(AuthContext)

    const {ProductName,resalePrice, img} = productAllData
          
   
    
      const handleSubmit = (event)=>{

        event.preventDefault();
        const form = event.target;
        const categorName = form.categorName.value;
         const price = form.resalePrice.value;
        const name = form.name.value;
        const email = form.email.value;
        const phone = form.phone.value;
        const location = form.location.value;
     
      console.log({categorName,price, name, email,phone,location})
      
      cancalModal()

      const booking = {
           
        ProductName,
        price,
        name,
        email,
        phone,
        location,
        img
      }

      console.log(booking)
      fetch('http://localhost:5000/bookings',{

        method: 'POST',
        headers:{
            'content-type':'application/json'
        },
      body:JSON.stringify(booking)
       })
       .then(res => res.json() )
       .then(data => {
           
          if(data.acknowledged){

              toast.success('Booking Info database Save')
          }
           
       })
    
       
      }



    return (
        <div>
        <input type="checkbox" id="booking-modal" className="modal-toggle" />
         <div className="modal">
        <div className="modal-box relative">
       <label htmlFor="booking-modal" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
       
           <form onSubmit={ handleSubmit} className='grid grid-cols-1 gap-3 mt-5'>
           <input  name= 'categorName'  type="text" default value={ProductName} className="input input-bordered w-full " />
           <input name='resalePrice'  type="text" default value={resalePrice} className="input input-bordered w-full " />
           <input name='name' type="text" default value={user?.displayName} disabled readOnly placeholder="User Name" className="input input-bordered w-full " />
           <input name='email'  type="text" default value={user?.email} disabled readOnly placeholder="user Email" className="input input-bordered w-full " />
           <input name='phone' type="text" placeholder=" your phone number" className="input input-bordered w-full " />
           <input name='location' type="text" placeholder=" meeting Location" className="input input-bordered w-full " />
            
           <br/>
          
           <input  type="submit" value="Submit" className="btn" />
              
           </form>  
      </div>
  </div>    
              
          </div>
    );
};

export default Booking;