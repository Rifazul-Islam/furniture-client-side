import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';
import { FcGoogle, IconName } from "react-icons/fc";
const Login = () => {

    const {register, formState: { errors }, handleSubmit} = useForm()

    const [loginUser, setLoginUser]=useState('')
      
    


    return (
        <div className='h-[600px]   flex justify-center items-center'>
         <div className='w-96 border-2  p-10'>
        <h2 className='text-2xl text-center'> Login Page </h2>

 <form >

<div className="form-control w-full max-w-xs">
<label className="label">
<span className="label-text text-2xl">Email</span>
</label>
<input type="text"
{...register("email", {required:"Plase your vaild email"}

)} 
className="input input-bordered w-full max-w-xs" />
{/* {errors.mail && <p role="alert">{errors.mail?.message}</p>} */}

 {errors.email && <p role="alert" className='text-red-500'>{errors.email.message}  </p>}
</div>


<div className="form-control w-full max-w-xs">
<label className="label">
<span className="label-password text-2xl">Password</span>
</label>
<input type="password" {...register("password", {required:"Not Password vidation",
//  maxLength:{value: 1, message:"pleas six digit"}
})} 

className="input input-bordered w-full max-w-xs" />
{errors.password && <p role="alert" className="text-red-600"> {errors.password.message} </p>}
<label className="label mt-3">

</label>
<p className='text-red-600'>  </p>
</div>
<input type="submit" className='btn  w-full border-none hover:text-gray-100 bg-gradient-to-r from-emerald-500 to-indigo-500 text-white mt-3' value="Login" />
</form>  

  <p className='mt-3 mb-4'> New go to  <Link to='/signup' className='text-green-500' > Create New Accout</Link> </p>
 <button   className='btn btn-outline btn-primary w-full'><FcGoogle className='mr-3 text-2xl'></FcGoogle>   CONTINUE WITH GOOGLE</button>
 </div>   
</div>
    );
};

export default Login;