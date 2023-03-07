import { useQuery } from '@tanstack/react-query';
import React from 'react';
import SpennerPage from '../Shared/SpennerPage/SpennerPage';
import Categories from './Categories';

const Cetagory = () => {
 
  const url = 'http://localhost:5000/categories'

  const {data:categories = [],isLoading } = useQuery({
        
       queryKey :['categories',],
       queryFn: async ()=> {
        const res = await fetch(url ,{
            
        });
        const data = await res.json() ;
        return  data ;
       }
   })
   if(isLoading){
        return <SpennerPage></SpennerPage>
   }



    return (
        <div className='mt-5 mb-7 '>
        <h1 className='text-4xl text-center text-indigo-500'> Choose your Category</h1>
        
        <div className='grid grid-cols-1  md:grid-cols-2 lg:grid-cols-3 gap-4 mt-6'>
             {
                  categories.map(categorie => <Categories
                  
                    key={categorie._id}
                    categorie = {categorie}

                  >

                  </Categories>)
                
              }
             </div> 
  
        
        
        
        
        </div>
    );
};

export default Cetagory;