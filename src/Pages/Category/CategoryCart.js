import React from 'react';
import { HiStar } from "react-icons/hi2";
const CategoryCart = ({secondhand,setProductAllData}) => {

    const { img, ProductName,sellerName, resalePrice,originalPrice,postTime, location,years} = secondhand

    return (
        <div className='mb-5 mt-3 grid justify-items-start '>
        <div className="card card-compact h-[400px] sm:w-96  lg:w-[250px]  bg-base-200 flex justify-between  shadow-xl">
        <figure><img className='mt-9 h-64  sm:w-[500px] lg:w-80 ' src={img} alt="Shoes" /></figure>
     <div className="card-body">
      <div className=' '>
      <p className=' font-bold'> SellerName: {sellerName}</p>
      <p className=' font-bold'> ProductName : {ProductName}</p>
      <p className=' font-bold'> Location : {location} </p>
      <p className=' font-bold'>  Resale Price: ${resalePrice} </p>
      <p className='  font-bold'> Original Price : ${originalPrice} </p>
      <p className=' font-bold'> Youre : {years} </p>
      <p className=' font-bold'> PostTime : {postTime? postTime:'no time' } </p>
     
      
      </div>
     
    </div>
    <div className="card-actions justify-start mb-5 mr-3">
 

   <span>  <label
    htmlFor="booking-modal"
       onClick={()=>setProductAllData(secondhand)}
      
       className="btn ml-3 btn-success btn-sm ">  Booking 
       </label> </span>  <span> <HiStar className='ml-5  mt-2 text-2xl  text-yellow-500'> </HiStar></span> 
    <span> <HiStar className='ml-1 mt-2  text-2xl text-yellow-500'> </HiStar> </span>
     <span> <HiStar className='ml-1 mt-2  text-2xl text-yellow-500'></HiStar> </span>

    </div>
 </div>

</div>
    );
};

export default CategoryCart;