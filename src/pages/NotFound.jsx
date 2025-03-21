import React from "react";
import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
      <h1 className="text-6xl font-bold text-gray-800">404</h1>
      <p className="text-xl text-gray-600 mt-2">Oops! Page not found.</p>
      <Link to="/" className="mt-4 bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-700">
        Go Home
      </Link>
    </div>
  );
};

export default NotFound;
