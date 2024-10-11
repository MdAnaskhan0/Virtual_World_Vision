import React from 'react'
import { platformLinks, resourcesLinks, communityLinks } from '../Constants/Constants'
import { FaFacebook, FaInstagram, FaTwitter, FaTiktok } from 'react-icons/fa'

const Footer = () => {
    return (
        <>
            <footer className='mt-20 border-t py-10 border-neutral-700'>
                <div className='grid grid-cols-2 lg:grid-cols-4 gap-20'>
                    <div>
                        <h3 className='text-md font-semibold mb-4'>Resources</h3>
                        <ul className='space-y-2'>
                            {resourcesLinks.map((link, index) => (
                                <li key={index}>
                                    <a className='text-neutral-300 hover:text-white' href={link.href}>{link.text}</a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div>
                        <h3 className='text-md font-semibold mb-4'>Platform</h3>
                        <ul className='space-y-2'>
                            {platformLinks.map((link, index) => (
                                <li key={index}>
                                    <a className='text-neutral-300 hover:text-white' href={link.href}>{link.text}</a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div>
                        <h3 className='text-md font-semibold mb-4'>Resources</h3>
                        <ul className='space-y-2'>
                            {communityLinks.map((link, index) => (
                                <li key={index}>
                                    <a className='text-neutral-300 hover:text-white' href={link.href}>{link.text}</a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div>
                        <h3 className='text-md font-semibold mb-4'>Social Links</h3>
                        <div className='flex flex-row space-x-4 w-full'>
                            <FaFacebook className='w-[20px] h-[20px] text-neutral-300 hover:text-white'/>
                            <FaInstagram className='w-[20px] h-[20px] text-neutral-300 hover:text-white'/>
                            <FaTwitter className='w-[20px] h-[20px] text-neutral-300 hover:text-white'/>
                            <FaTiktok className='w-[20px] h-[20px] text-neutral-300 hover:text-white'/>
                        </div>
                    </div>
                </div>
            </footer>
        </>
    )
}

export default Footer