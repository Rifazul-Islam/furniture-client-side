import { useQuery } from '@tanstack/react-query';
import React from 'react';
import { toast } from 'react-hot-toast';

const AllSeller = () => {

    const {data:sellers = [] , refetch} = useQuery({

        queryKey:['users'],
        queryFn:async()=>{

            const res = await fetch('http://localhost:5000/users')
            const data = await res.json()
            return data ;
        }
})


const handlarDelete = id =>{
           
    fetch(`http://localhost:5000/sellers/${id}`,{
       method:'DELETE',
    })
    .then(res => res.json())
    .then(data => {
    
       if(data.acknowledged){

            toast.success('delete duyer Successfully')
            refetch()
       }
        
    })
    
}



    return (
        <div>
        <h1 className='text-2xl mt-2'> All Seller  </h1>
        <div className="overflow-x-auto">
 <table className="table w-full mt-4 ">
<thead>
  <tr>
    <th></th>
    <th>Name</th>
    <th>Email</th>
    <th>Verify</th>
    <th> Action </th>
  </tr>
</thead>
<tbody>
 
 {   sellers &&
       sellers.map((seller,i) =>  <tr key={seller._id} >
        <th> {i+1} </th>
        <td>{seller.name} </td>
        <td>{seller.email}</td>
        <td>  Verify </td>
      
        <td className='text-white'> <button className=' btn  btn-xs btn-primary' onClick={()=>handlarDelete(seller._id)} >  Delete </button> </td>
        <td> 
                
        </td>
       
      </tr>)
 } 

 
</tbody>
</table>
</div>
    </div>
    );
};

export default AllSeller;
