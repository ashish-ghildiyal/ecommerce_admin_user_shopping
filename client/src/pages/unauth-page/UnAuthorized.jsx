import React from 'react'
import { ShieldAlert } from "lucide-react";
import { Link } from 'react-router';

const UnAuthorized = () => {
  return (
    <div className="flex h-screen flex-col items-center justify-center bg-gray-50">
      <div className="max-w-md text-center rounded-2xl bg-white shadow-lg p-10">
        {/* Icon */}
        <div className="flex justify-center">
          <ShieldAlert className="h-16 w-16 text-red-500" />
        </div>

        {/* Title */}
        <h1 className="mt-6 text-3xl font-bold text-gray-900">
          Unauthorized Access
        </h1>

        {/* Message */}
        <p className="mt-3 text-gray-600">
          You don’t have permission to view this page.  
          Please log in to continue.
        </p>

        {/* CTA Button */}
        <Link
          to={"/auth/login"}
          className="mt-6 inline-block rounded-xl bg-red-500 px-6 py-3 text-white font-medium shadow hover:bg-red-600 transition"
        >
          Go to Login
        </Link>

        {/* Home Link */}
        <p className="mt-4">
          <Link to="/shop/home" className="text-blue-500 hover:underline">
            Back to Home
          </Link>
        </p>
      </div>
    </div>
  );
  
}

export default UnAuthorized