import React from 'react';
import { AiOutlineFilter, AiOutlineHome } from "react-icons/ai";
import { BsArchive, BsCart} from "react-icons/bs";
import { BiCookie  } from "react-icons/bi";
import {  SiC } from "react-icons/si";
const Section1 = () => {
    return (
        <div className='text-center mt-14 mb-16'>
                <h1 className='text-gray-600 text-2xl' >What makes Stark Store shop so powerful? </h1>
                <h1 className='text-5xl' >Theme features</h1>
       
                <div className='grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mt-7'>
                   
               

                   <div>
              
                <div className="card   h-[250px] shadow-xl bg-gray-300">
                <button className='text-5xl text-center mx-auto text-blue-400 mt-3'> <AiOutlineHome></AiOutlineHome> </button>
                <div className="card-body text-justify">
               <h2 className="card-title ">5++ HOMEPAGES</h2>
               <p className=''>Various homepages & ability to update more in the future </p>
              
             </div>
           </div>
                   
                    </div>
           
           
           
           
                    <div>
              
              <div className="card  shadow-xl h-[250px] bg-gray-300">
              <button className='text-5xl text-center mx-auto text-blue-400 mt-3'> <AiOutlineFilter></AiOutlineFilter> </button>
           <div className="card-body text-justify">
             <h2 className="card-title ">AJAX PRODUCT FILTERS + PRODUCT COLOR SWATCHES</h2>
             <p className=''>Advanced AJAX product filters widget for eCommerce. </p>
            
           </div>
           </div>
                 
                  </div>
           
           
           
           
                  <div>
              
              <div className="card  bg-gray-300 h-[250px] shadow-xl">
              <button className='text-5xl text-center mx-auto text-blue-400 mt-3'><BsArchive></BsArchive>  </button>
             <div className="card-body text-justify">
             <h2 className="card-title ">4++ HEADERS</h2>
             <p className=''>Modern header types included in Stark Store shop for any type of website.</p>
            
           </div>
           </div>
                 
                  </div>
           
           
           
                  <div>
              
              <div className="card  h-[250px] bg-gray-300 shadow-xl">
              <button className='text-5xl text-center mx-auto text-blue-400 mt-3'> <BsCart></BsCart>  </button>
             <div className="card-body text-justify">
             <h2 className="card-title ">AJAX CART </h2>
             <p className=''>It allows you to add and auto update your shopping cart without any click.</p>
            
           </div>
           </div>
                 
                  </div>
           
           
           
                  <div>
              
              <div className="card  h-[250px] bg-gray-300 shadow-xl">
              <button className='text-5xl text-center mx-auto text-blue-400 mt-3'> <BiCookie></BiCookie>  </button>
             <div className="card-body text-justify">
             <h2 className="card-title ">MULTICOLOR</h2>
             <p className=''>Easy to change the main color in Admin Panel.</p>
            
           </div>
           </div>
                 
                  </div>
           
           
           
           
                  <div>
              
              <div className="card  h-[250px] bg-gray-300 shadow-xl">
              <button className='text-5xl text-center mx-auto text-blue-400 mt-3'> <SiC></SiC>  </button>
             <div className="card-body text-justify">
             <h2 className="card-title ">3++ FOOTERS </h2>
             <p className=''>Customizable footer & easy to change in Admin Panel.</p>
            
           </div>
           </div>
                 
                  </div>
           
                       
                        </div>
       
       
       
        </div>

    );
};

export default Section1;