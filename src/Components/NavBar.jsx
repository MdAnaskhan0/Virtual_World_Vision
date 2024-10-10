import React, { useState } from 'react';
import logo from '../assets/logo.png';
import { navItems } from '../Constants/Constants';
import { FaBars } from 'react-icons/fa';
import { ImCross } from 'react-icons/im';

const NavBar = () => {
    const [mobileDrawerOpen, setMobileDrawerOpen] = useState(false);

    const toggleNavbar = () => {
        setMobileDrawerOpen(!mobileDrawerOpen);
    };

    return (
        <>
            <nav className="sticky top-0 py-3 backdrop-blur-lg border-b border-neutral-700/80">
                <div className="container px-4 mx-auto relative text-sm">
                    <div className="flex justify-between items-center">
                        {/* Logo and Branding */}
                        <div className="flex items-center flex-shrink-0">
                            <img className="w-10 mr-2" src={logo} alt="logo" />
                            <span className="text-xl tracking-tight">VirtualWorld</span>
                        </div>

                        {/* Desktop Menu */}
                        <ul className="hidden lg:flex ml-14 space-x-12 pt-2">
                            {navItems.map((item, index) => (
                                <li key={index}>
                                    <a className="hover:text-orange-500" href={item.href}>
                                        {item.label}
                                    </a>
                                </li>
                            ))}
                        </ul>

                        {/* Desktop Actions */}
                        <div className="hidden lg:flex justify-center space-x-12 items-center">
                            <a className="py-2 px-3 border rounded-md" href="#">
                                Sign In
                            </a>
                            <a className="py-2 px-3 border rounded-md bg-gradient-to-r from-orange-500 to-orange-800" href="#">
                                Create an account
                            </a>
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
                        <ul className="space-y-4 p-4 flex flex-col justify-center items-left">
                            {navItems.map((item, index) => (
                                <li key={index}>
                                    <a className="block text-white hover:text-orange-500" href={item.href}>
                                        {item.label}
                                    </a>
                                </li>
                            ))}
                        </ul>
                        <div className="flex flex-col items-center space-y-4 p-4">
                            <a className="py-2 px-4 border rounded-md w-full text-center text-white" href="#">
                                Sign In
                            </a>
                            <a className="py-2 px-4 border rounded-md bg-gradient-to-r from-orange-500 to-orange-800 w-full text-center text-white" href="#">
                                Create an account
                            </a>
                        </div>
                    </div>
                )}
            </nav>
        </>
    );
};

export default NavBar;
