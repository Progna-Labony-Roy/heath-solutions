import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';
import './Signup.css'

const Signup = () => {
  const [error,setError]=useState('');
    const { register, formState: { errors }, handleSubmit } = useForm();
  const handleSignup = (data) => console.log(data);

  
    return (
      <div className='inner-div'>
      <div className="justify-center">
      <form className="signup-div rounded-md" onSubmit={handleSubmit(handleSignup)}>
        
        <div className="title flex justify-between py-3">
          <p className="text-blue-300 text-xs font-semibold ml-4">NOT A MEMBER !</p>
          {/* <p className="text-gray text-xs font-semibold mr-4">Need help?</p> */}
        </div>
        <div className="form-control w-full px-6 mt-4">
        <input
            {...register("username", { required: "Enter your username" })}
            type="text"
            placeholder="username"
            className="user-input rounded-md w-full my-2"
          />
          {errors.username && (
            <span className="text-red-500 text-xs">{errors.username.message}</span>
          )}
          <input
            {...register("email", { required: "Enter your email" })}
            type="text"
            placeholder="Email"
            className="user-input rounded-md w-full my-2"
          />
          {errors.email && (
            <span className="text-red-500 text-xs">{errors.email.message}</span>
          )}
          <input
            {...register("password", { required: "Wrong password" })}
            type="password"
            placeholder="password"
            className="user-input rounded-md w-full mt-2"
          />
          {errors.password && (
            <span className="text-red-500 text-xs">{errors.password.message}</span>
          )}
        </div>
        <input
          type="submit"
          value="SIGN UP"
          className="all-btn rounded text-orange-500 text-xs font-semibold py-2.5 px-36 mt-5 mb-5  my-6"
        />      
        <p className="text-danger">{error}</p>
      </form>
      <div className="create-account mt-6">
    <p className="text-blue-300 text-xs font-semibold">Already have an account?</p>
      <Link to='/signin'><button className="all-btn rounded-full text-xs text-orange-500 font-semibold px-3 py-2 mt-2">
          Sign in
        </button></Link>
    </div>
    </div>     
      </div>
    );
};

export default Signup;