import React, { useState } from 'react';
import { FaSquarespace } from "react-icons/fa";
import Footer from '../Components/Footer';
import { Link } from 'react-router-dom';
import { useForm } from 'react-hook-form';

const LogIn = () => {
  const { register, handleSubmit } = useForm();
  const [message, setMessage] = useState('');

  const onSubmit = (data) => {
    const storedUser = JSON.parse(localStorage.getItem('user'));

    if (storedUser && data.email === storedUser.email && data.password === storedUser.password) {
      setMessage('Successfully logged in!');
    } else {
      setMessage('Invalid email or password. Please try again.');
    }
  };

  return (
    <>
      <nav className="sticky top-0 py-3 backdrop-blur-lg border-b border-neutral-700/80">
        <div className="container px-4 mx-auto relative text-sm">
          <div className="flex justify-between items-center">
            <Link to='/' className="flex items-center flex-shrink-0">
              <FaSquarespace className='w-10 h-10 pr-3' />
              <span className="text-xl tracking-tight">VirtualWorld</span>
            </Link>

            <div className="hidden lg:flex justify-center space-x-12 items-center">
              <Link to='/logIn' className="py-2 px-3 border rounded-md">Sign In</Link>
              <Link className="py-2 px-3 border rounded-md bg-gradient-to-r from-orange-500 to-orange-800" to='/register'>Create an account</Link>
            </div>

            <div className="lg:hidden md:flex flex-col justify-end">
              <button>{/* Toggle logic */}</button>
            </div>
          </div>
        </div>
      </nav>

      <main className='flex flex-col justify-center items-center text-center py-12 min-h-[60vh]'>
        <form
          className='w-full max-w-md mx-auto p-6 '
          onSubmit={handleSubmit(onSubmit)}
        >
          <h2 className='text-2xl font-semibold text-center mb-4'>Login</h2>
          <div className='flex flex-col space-y-3'>

            <input
              className='px-4 py-2 border border-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-400'
              type="email"
              placeholder='Enter your email'
              {...register('email', { required: true })}
            />
            <input
              className='px-4 py-2 border border-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-400'
              type="password"
              placeholder='Enter your password'
              {...register('password', { required: true })}
            />

            <button
              type="submit"
              className='py-2 bg-orange-500 text-white rounded-md hover:bg-orange-600 transition duration-200'
            >
              Register
            </button>
          </div>
        </form>
        {message && <p className='text-center mt-10 text-orange-500 mb-4'>{message}</p>}
      </main>


      <div className="max-w-7xl mx-auto pt-20 px-6">
        <Footer />
      </div>
    </>
  );
}

export default LogIn;
