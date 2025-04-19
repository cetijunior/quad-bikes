// 404.jsx
import React from 'react';
import { Bike, Home } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function NotFoundPage() {
    return (
        <div className="min-h-screen flex flex-col justify-center items-center bg-gradient-to-br from-blue-800 to-cyan-600 text-white text-center px-4">
            <Bike size={80} className="text-white mb-4 animate-bounce" />
            <h1 className="text-6xl font-extrabold mb-2">404</h1>
            <p className="text-xl md:text-2xl font-light mb-6">Oops! The page you're looking for doesn't exist.</p>

            <Link
                to="/"
                className="inline-flex items-center bg-white text-blue-700 font-semibold px-6 py-3 rounded-full shadow-md hover:bg-blue-100 transition-all"
            >
                <Home className="mr-2" size={20} /> Go to Homepage
            </Link>
        </div>
    );
}
