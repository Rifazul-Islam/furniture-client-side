import React from 'react';
import { Link } from 'react-router-dom';
import { HiStar } from "react-icons/hi2";
import { FaStarHalf, FaStarHalfAlt, IconName } from "react-icons/fa";
const ProductCard = ({product}) => {

    const { img,productName,sellerName, resalePrice,originalPrice,postTime, location,years}= product
    return (
        <div className='mb-5 mt-7'>
        <div className="card card-compact h-[400px]  bg-red-100 flex justify-between  shadow-xl">
        <figure><img className='mt-9 w-full h-80' src={img} alt="Shoes" /></figure>
     <div className="card-body">
      <div className='grid justify-items-start '>
      <p className=' font-bold'> Seller Name : {sellerName}</p>
      <p className=' font-bold'> Product Name : {productName}</p>
      <p className=' font-bold'> Location : {location} </p>
      <p className=' font-bold'>  Resale Price: $ {resalePrice} </p>
      <p className='  font-bold'> Original Price : $ {originalPrice} </p>
      <p className=' font-bold'> Youre : {years} </p>
      <p className=' font-bold'> PostTime : {postTime? postTime:'no time' } </p>
       </div>
     
      </div>
          
           <div className='flex mb-8 ml-3 '>
        
          <button className="btn btn-sm btn-primary "> <span> <Link to={`/home/${product}`}>Advertise</Link> </span> </button>
          <span> <HiStar className='ml-5   text-3xl  text-yellow-500'> </HiStar></span> 
         <span> <HiStar className='ml-1  text-3xl text-yellow-500'> </HiStar> </span>
         <span> <HiStar className='ml-1   text-3xl text-yellow-500'></HiStar>  </span> 
          <span>  <FaStarHalf className='ml-1   text-3xl text-yellow-500' > </FaStarHalf>  </span> 

         </div>                                        
       


    </div> 
       
  
 </div>
    );
};

export default ProductCard;