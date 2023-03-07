import React from 'react';

const Banner = () => {
    return (
    <div className='mt-2'>
   <div className="carousel w-full h-[500px]">
  <div id="item1" className="carousel-item  w-full">
    <img src="https://www.ikea.com/images/a-slattum-upholstered-bed-and-various-white-nordli-chests-of-8d484dc7644efac6f63d4e9da13cfbe3.jpg" alt='#' className="w-full " /> 
    

    
  </div> 
  <div id="item2" className="carousel-item w-full">
   
    <img src="https://images.pexels.com/photos/2867761/pexels-photo-2867761.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt='#' className="w-full" />
 
  </div> 
  <div id="item3" className="carousel-item w-full">
    <img src="https://images.pexels.com/photos/2098451/pexels-photo-2098451.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt='#' className="w-full" />
  </div> 
 
</div> 
<div className="flex justify-center w-full py-2 gap-2">
  <a href="#item1" className="btn btn-xs">1</a> 
  <a href="#item2" className="btn btn-xs">2</a> 
  <a href="#item3" className="btn btn-xs">3</a> 

</div>
        </div>
    );
};

export default Banner;