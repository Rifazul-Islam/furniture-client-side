import React, { useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import Booking from '../Booking/Booking';
import CategoryCart from './CategoryCart';

const Category = () => {

     const products = useLoaderData();
     const [productAllData, setProductAllData] = useState(null)
     console.log(products)

     const cancalModal = () =>{

        setProductAllData(null)
}

    return (
        <div>

                <h1 className='text-center  text-3xl font-bold mt-4 mb-5 text-indigo-400 ' > Category Wise Products </h1>

         <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-14'>
             
                           
              {
                 products.map(secondhand => <CategoryCart 
                 
                    key={secondhand._id}
                    secondhand={secondhand}
                    setProductAllData={setProductAllData}
                 
                 ></CategoryCart>  )
              }
        </div>

              {   productAllData &&
                  <Booking

                  productAllData = {productAllData}
                  cancalModal={cancalModal}
                  >

                  </Booking>
              } 
       </div>
    );
};

export default Category;