import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <nav className="flex justify-between items-center p-4 bg-blue-600 text-white">
            <Link to="/" className="text-2xl font-bold">ESENCIA</Link>
            <div className="space-x-4">
                <Link to="/">Home</Link>
                <Link to="/about">About Us</Link>
                <Link to="/products">Products</Link>
                <Link to="/contact">Contact Us</Link>
            </div>
        </nav>
    );
};

export default Navbar;
