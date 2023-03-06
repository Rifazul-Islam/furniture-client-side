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
         <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4'>
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