import React from 'react';
import { Link } from 'react-router-dom';

const Categories = ({categorie}) => {
  
    // const { _id,name,img,category} = categorie
    return (
        <div className=' '>
         <div className="card card-compact h-[450px]  bg-base-100 shadow-xl">
         <figure><img src={categorie?.img} className='mt-5 h-[250px]' alt="Shoes" /></figure>
      <div className="card-body">
    <h2 className="card-title"> Name : {categorie?.name} </h2>
    <p> </p>
    <div className="card-actions justify-end ">
    <Link className="btn btn-outline w-full"  to={`/category/${categorie?._id}`}> <button> {categorie?.category}  </button> </Link>
    </div>
  </div>
</div>
        </div>
    );
};

export default Categories;