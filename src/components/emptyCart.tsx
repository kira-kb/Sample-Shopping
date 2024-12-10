import React from "react";
import { Link } from "react-router-dom";

const EmptyCart: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center text-center bg-gray-50 dark:bg-gray-900 text-gray-800 dark:text-gray-200">
      <div className="mb-6">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-24 h-24 mx-auto text-gray-400 dark:text-gray-600"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 0 0-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 0 0-16.536-1.84M7.5 14.25 5.106 5.272M6 20.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm12.75 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z"
          />
        </svg>
      </div>

      <h1 className="text-3xl font-bold mb-4">Your Cart is Empty</h1>
      <p className="text-gray-600 dark:text-gray-400 mb-8">
        Looks like you haven't added anything to your cart yet.
      </p>

      <Link
        to={"/"}
        className="bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 px-6 rounded-lg transition-all ease-in-out"
      >
        Continue Shopping
      </Link>
    </div>
  );
};

export default EmptyCart;
