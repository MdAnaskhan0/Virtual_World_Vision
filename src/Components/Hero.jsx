import React from 'react'
import video1 from '../assets/video1.mp4'
import video2 from '../assets/video2.mp4'

const Hero = () => {
    return (
        <>
            <div className="flex flex-col item-center mt-6 lg:mt-20">
                <h1 className="text-3xl sm:text-6xl lg:text7xl text-center tracking-wide">
                    VirtualWorld build tools <span className='bg-gradient-to-r from-orange-500 to-red-700 text-transparent bg-clip-text'> for developers</span>
                </h1>
                <p className="mt-10 text-sm sm:text-lg text-center text-neutral-500 max-w-4xl">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus esse, iure harum ad nostrum architecto illum laborum magni et corporis rerum? Doloribus aspernatur sapiente deleniti harum facilis voluptate sunt esse!
                </p>
                <div className="flex justify-center my-10">
                    <a className='bg-gradient-to-r from-orange-500 to-red-800 py-3 px-3 rounded-md' href="#">Start for free</a>
                    <a href="#" className="py-3 px-4 mx-3 rounded-md border">Documentation</a>
                </div>

                <div className="flex mt-10 justify-center">
                    <video autoPlay loop muted className='rounded-lg w-1/2 border border-orange-700 shadow-orange-400 mx-2 my-4'><source src={video1} type='video/mp4' />Your browser does not support the video tag.</video>
                    <video autoPlay loop muted className='rounded-lg w-1/2 border border-orange-700 shadow-orange-400 mx-2 my-4'><source src={video2} type='video/mp4' />Your browser does not support the video tag.</video>
                </div>

            </div>
        </>
    )
}

export default Hero
