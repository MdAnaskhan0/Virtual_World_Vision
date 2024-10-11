import React from 'react';
import NavBar from '../Components/NavBar';
import Footer from '../Components/Footer';
import { Link } from 'react-router-dom'; // Import Link for navigation

const PageNotFound = () => {
    return (
        <>
            <main className='flex justify-center items-center text-center min-h-screen py-12'>
                <div>
                    <h1 className='text-4xl bg-gradient-to-r from-orange-500 to-red-700 text-transparent bg-clip-text'>
                        404 Not Found
                    </h1>
                    <p className='mt-4 text-lg text-neutral-300'>
                        Oops! The page you are looking for does not exist.
                    </p>
                    <Link to="/" className='mt-6 inline-block py-2 px-4 bg-orange-500 text-white rounded-md hover:bg-orange-600'>
                        Go Back to Home
                    </Link>
                </div>
            </main>
        </>
    );
};

export default PageNotFound;
