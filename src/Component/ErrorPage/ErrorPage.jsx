import React from 'react';
import { useNavigate } from 'react-router';


const ErrorPage = () => {
    const navigate = useNavigate();

    return (
        <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 px-4">
            <h1 className="text-7xl font-extrabold text-red-500">404</h1>
            
            <h2 className="mt-4 text-2xl font-semibold text-gray-800">
                Page Not Found
            </h2>

            <p className="mt-2 text-gray-500 text-center max-w-md">
                Sorry, the page you are looking for doesn’t exist or has been moved.
            </p>

            <div className="mt-6 flex gap-4">
                <button
                    onClick={() => navigate('/')}
                    className="px-5 py-2 bg-blue-600 text-white rounded-lg shadow hover:bg-blue-700 transition"
                >
                    Go Home
                </button>

                <button
                    onClick={() => navigate(-1)}
                    className="px-5 py-2 bg-gray-200 text-gray-800 rounded-lg hover:bg-gray-300 transition"
                >
                    Go Back
                </button>
            </div>
        </div>
    );
};

export default ErrorPage;