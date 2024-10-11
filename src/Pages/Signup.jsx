import React, { useState } from 'react';
import { FaBars } from 'react-icons/fa';
import { ImCross } from 'react-icons/im';
import { FaSquarespace } from "react-icons/fa";
import Footer from '../Components/Footer'
import { Link } from 'react-router-dom';
import { useForm } from 'react-hook-form';


const SignUp = () => {

    const [mobileDrawerOpen, setMobileDrawerOpen] = useState(false);

    const toggleNavbar = () => {
        setMobileDrawerOpen(!mobileDrawerOpen);
    };

    const { register, handleSubmit } = useForm();
    const [message, setMessage] = useState('');

    const onSubmit = (data) => {
        localStorage.setItem('user', JSON.stringify(data));
        setMessage("Registration successful")
    };

    return (
        <>
            <nav className="sticky top-0 py-3 backdrop-blur-lg border-b border-neutral-700/80">
                <div className="container px-4 mx-auto relative text-sm">
                    <div className="flex justify-between items-center">
                        {/* Logo and Branding */}
                        <Link to='/' className="flex items-center flex-shrink-0">
                            <FaSquarespace className='w-10 h-10 pr-3' />
                            <span className="text-xl tracking-tight">VirtualWorld</span>
                        </Link>


                        {/* Desktop Actions */}
                        <div className="hidden lg:flex justify-center space-x-12 items-center">
                            <Link to='/logIn' className="py-2 px-3 border rounded-md">
                                Sign In
                            </Link>
                            <Link className="py-2 px-3 border rounded-md bg-gradient-to-r from-orange-500 to-orange-800" to='/register'>
                                Create an account
                            </Link>
                        </div>

                        {/* Mobile Menu Button */}
                        <div className="lg:hidden md:flex flex-col justify-end">
                            <button onClick={toggleNavbar}>
                                {mobileDrawerOpen ? <ImCross /> : <FaBars />}
                            </button>
                        </div>
                    </div>
                </div>

                {/* Mobile Drawer */}
                {mobileDrawerOpen && (
                    <div className="lg:hidden block backdrop-blur-lg bg-neutral-900/80 border-t border-neutral-700/80 justify-center items-center">

                        <div className="flex flex-col items-center space-y-4 p-4">
                            <Link className="py-2 px-4 border rounded-md w-full text-center text-white" to='/login'>
                                Sign In
                            </Link>
                            <Link className="py-2 px-4 border rounded-md bg-gradient-to-r from-orange-500 to-orange-800 w-full text-center text-white" to='/register'>
                                Create an account
                            </Link>
                        </div>
                    </div>
                )}
            </nav>

            {/******Main*******/}

            <main className='flex flex-col justify-center items-center text-center py-12'>
                <form
                    className='w-full max-w-md mx-auto p-6 '
                    onSubmit={handleSubmit(onSubmit)}
                >
                    <h2 className='text-2xl font-semibold text-center mb-4'>Registrar</h2>
                    <div className='flex flex-col space-y-3'>
                        <input
                            className='px-4 py-2 border border-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-400'
                            type="text"
                            placeholder='Enter your name'
                            {...register('name', { required: true })}
                        />
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
                        <input
                            className='px-4 py-2 border border-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-400'
                            type="tel"
                            placeholder='Enter your phone no'
                            {...register('phone', { required: true })}
                        />
                        <textarea
                            className='px-4 py-2 border border-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-400'
                            rows='5'
                            placeholder='Enter your message'
                            {...register('message')}
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
    )
}

export default SignUp
