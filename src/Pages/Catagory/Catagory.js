import React from 'react';
import { useLoaderData } from 'react-router-dom';

const Catagory = () => {

    const secondhanProducts = useLoaderData([])
    console.log(secondhanProducts)
    return (
        <div>
            Hello Everyone
        </div>
    );
};

export default Catagory;