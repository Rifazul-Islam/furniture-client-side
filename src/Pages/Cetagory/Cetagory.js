import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Categories from './Categories';

const Cetagory = () => {

  const [categories, setCategories] = useState([])

   useEffect(()=>{

        fetch('http://localhost:5000/categories') 
        .then(res => res.json())
        .then(data => setCategories(data))
   })
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