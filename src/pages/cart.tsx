import React from "react";
import EmptyCart from "../components/emptyCart";
import { Link } from "react-router-dom";

interface CartData {
  id: number;
  name: string;
  price: number;
  img: string;
  quantity: number;
}

interface CartProbs {
  cart: CartData[];
  setCart: (param: CartData[]) => void;
}

const Cart: React.FC<CartProbs> = ({ cart, setCart }) => {
  // const handleInput = (e: React.ChangeEvent<HTMLInputElement>) => {
  //   if (+e.target.value > 0) {
  //     const data = cart.map(cd => {
  //       if (cd.id === item.id) cd.quantity = +e.target.value
  //     })
  //     setCart(data)
  //   }
  // }
  let totalPrice = 0;

  cart.map((item) => (totalPrice += item.price * item.quantity));

  return (
    <main className="p-4 text-gray-800 dark:text-gray-200 bg-gray-50 dark:bg-gray-900 min-h-screen">
      {/* Cart heading */}
      <h1 className="text-3xl font-bold mb-6">Shopping Cart</h1>

      {/* Map through each cart item */}
      {cart.length > 0 ? (
        cart.map((item, i) => (
          <div
            key={item.id}
            className="flex flex-col md:flex-row justify-between items-center mb-6 p-4 border-b-2 border-gray-300 dark:border-gray-700"
          >
            {/* Product image and name */}
            <Link
              to={`/product/${item.id}`}
              className="flex flex-col md:flex-row gap-6 items-center max-w-md w-full hover:text-blue-700 cursor-pointer"
            >
              <img
                src={item.img}
                className="w-24 h-24 object-cover rounded-md"
                alt={item.name}
              />
              <div>
                <div className="text-lg font-semibold">{item.name}</div>
                <div className="text-gray-600 dark:text-gray-400">
                  ${item.price.toFixed(2)}
                </div>
              </div>
            </Link>

            {/* Quantity selector */}
            <div className="flex items-center mt-4 md:mt-0">
              <input
                type="number"
                min={1}
                // defaultValue={1}
                value={item.quantity}
                className="w-16 px-2 py-1 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-center text-gray-800"
                onChange={(e) => {
                  if (+e.target.value > 0) {
                    const data = cart.map((cd) => {
                      if (cd.id === item.id) cd.quantity = +e.target.value;
                      return cd;
                    });
                    setCart(data);
                  }
                }}
              />
            </div>

            {/* Remove button */}
            <div
              key={i}
              className="flex items-center mt-4 md:mt-0 text-white cursor-pointer bg-red-700 hover:bg-red-800 px-5 py-2.5 rounded-lg transition-all ease-in-out"
              onClick={() => {
                const filteredCart = cart.filter((cd) => cd.id !== item.id);
                setCart(filteredCart);
              }}
            >
              Remove
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6 ml-2"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0"
                />
              </svg>
            </div>
          </div>
        ))
      ) : (
        <EmptyCart />
      )}

      {cart.length > 0 ? (
        <div>
          <div className="mb-4 font-bold border-b-2 text-base">Total price</div>
          {cart.map((item) => (
            <div className="flex">
              <span>👉</span>
              <div
                key={item.id}
                className="mb-6 inline-block border-b-2 border-gray-500 pb-2"
              >
                <div className="font-bold inline-block ">{item.name}</div>{" "}
                <br />
                <div className="inline-block">
                  <span className="font-bold border-b-2">Unit Price: </span> 💲
                  {item.price}
                </div>
                <div className="inline-block ml-3">
                  <span className="font-bold border-b-2">Sum Price: </span>💲
                  {item.price * item.quantity}
                </div>
              </div>
            </div>
          ))}

          {/* <br /> */}
          <div className="mt-4 flex justify-end border-b-2">
            <span className="font-bold">Total Payment: 💲</span>{" "}
            {totalPrice.toFixed(0)}
          </div>
        </div>
      ) : (
        ""
      )}
    </main>
  );
};

export default Cart;
