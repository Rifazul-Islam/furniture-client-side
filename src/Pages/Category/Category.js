import React from 'react';
import { useLoaderData } from 'react-router-dom';

const Category = () => {

     const products = useLoaderData();
     
     console.log(products)
    return (
        <div>
            Helloss
        </div>
    );
};

export default Category;