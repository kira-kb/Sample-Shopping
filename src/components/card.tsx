import { Link } from "react-router-dom";

interface CartData {
  id: number;
  name: string;
  price: number;
  img: string;
  quantity: number;
}

interface CardProps {
  id: number;
  name: string;
  category: string;
  description: string;
  ratting: number;
  price: number;
  img: string;
  cart: CartData[];
  setCart: (param: CartData[]) => void;
}

const RemoveBtn: React.FC = () => (
  <>
    <span>Remove</span>
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={1.5}
      stroke="currentColor"
      className="size-6 inline"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0"
      />
    </svg>
  </>
);
const Card: React.FC<CardProps> = ({
  id,
  name,
  description,
  category,
  img,
  ratting,
  price,
  cart,
  setCart,
}) => {
  const ratingNumber = Math.ceil(ratting);
  const isInCart = cart.some((item) => item.id === id);

  // Handle Add/Remove from Cart
  const handleCartToggle = () => {
    if (isInCart) {
      setCart(cart.filter((item) => item.id !== id));
    } else {
      setCart([...cart, { id, name, price, img, quantity: 1 }]);
    }
  };

  return (
    <div className="w-full max-w-sm bg-white border hover:scale-95 border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 transition-all delay-100 ease-in-out">
      <Link to={`/product/${id}`}>
        <div>
          <img className="p-8 rounded-t-lg" src={img} alt="product image" />
        </div>
      </Link>

      <div className="px-5 pb-5">
        <Link to={`/product/${id}`}>
          <div className="mb-2">
            <h5 className="text-xl font-semibold tracking-tight text-gray-900 dark:text-white">
              {name}
            </h5>
          </div>
          <h5 className="text-1x font-semibold tracking-tight text-gray-600 dark:text-gray-200">
            {description}
          </h5>
          <h5 className="text-base font-semibold tracking-tight text-gray-600 dark:text-gray-200">
            🏷️ {category}
          </h5>
        </Link>

        <div className="flex items-center mt-2.5 mb-5">
          <div className="flex items-center space-x-1 rtl:space-x-reverse">
            {Array(ratingNumber)
              .fill(null)
              .map((_, i) => (
                <svg
                  key={i}
                  className="w-4 h-4 text-yellow-300"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 22 20"
                >
                  <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                </svg>
              ))}

            {5 - ratingNumber > 0
              ? Array(5 - ratingNumber)
                  .fill(null)
                  .map((_, i) => (
                    <svg
                      key={i}
                      className="w-4 h-4 text-gray-200 dark:text-gray-600"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="currentColor"
                      viewBox="0 0 22 20"
                    >
                      <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                    </svg>
                  ))
              : ""}
          </div>

          <span className="bg-blue-100 text-blue-800 text-xs font-semibold px-2.5 py-0.5 rounded dark:bg-blue-200 dark:text-blue-800 ms-3">
            {ratting.toFixed(1)}
          </span>
        </div>

        <div className="flex items-center justify-between">
          <span className="text-3xl font-bold text-gray-900 dark:text-white">
            ${price.toFixed(2)}
          </span>

          <div
            className={`text-white cursor-pointer active:scale-95 ${
              isInCart
                ? "bg-red-700 hover:bg-red-800"
                : "bg-blue-700 hover:bg-blue-800"
            } focus:ring-4 focus:outline-none focus:ring-${
              isInCart ? "red" : "blue"
            }-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center`}
            onClick={handleCartToggle}
          >
            {isInCart ? <RemoveBtn /> : "Add to Cart"}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;

// import { Link } from "react-router-dom";
// // import useLocalStorage from "./useLocalStarage";
// // import { useEffect, useState } from "react";

// interface CartData {
//   id: number;
//   name: string;
//   price: number;
//   img: string;
// }

// interface CardProbs {
//   id: number;
//   name: string;
//   category: string;
//   description: string;
//   ratting: number;
//   price: number;
//   img: string;
//   cart: CartData[];
//   setCart: (param: CartData[]) => void;
// }

// const Card: React.FC<CardProbs> = ({
//   id,
//   name,
//   description,
//   category,
//   img,
//   ratting,
//   price,
//   cart,
//   setCart,
// }) => {
//   const rattingNumber = Math.ceil(ratting);

//   return (
//     <div className="w-full max-w-sm bg-white border hover:bg-slate-600 border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 transition-all delay-100 ease-in-out">
//       {/* hover:scale-105 */}
//       <Link to={`/product/${id}`}>
//         {/* IMAGE */}

//         <div>
//           <img className="p-8 rounded-t-lg" src={img} alt="product image" />
//         </div>
//       </Link>

//       <div className="px-5 pb-5">
//         {/* NAME */}
//         <Link to={`/product/${id}`}>
//           <div className="mb-2">
//             <h5 className="text-xl font-semibold tracking-tight text-gray-900 dark:text-white">
//               {name}
//             </h5>
//           </div>

//           <div>
//             <h5 className="text-1x font-semibold tracking-tight text-gray-600 dark:text-gray-200">
//               {description}
//             </h5>
//           </div>

//           <div>
//             <h5 className="text-base font-semibold tracking-tight text-gray-600 dark:text-gray-200">
//               🏷️ {category}
//             </h5>
//           </div>
//         </Link>

//         {/* RATTINGS */}

//         <div className="flex items-center mt-2.5 mb-5">
//           <div className="flex items-center space-x-1 rtl:space-x-reverse">
//             {Array(rattingNumber)
//               .fill(null)
//               .map((_, i) => (
//                 <svg
//                   key={i}
//                   className="w-4 h-4 text-yellow-300"
//                   aria-hidden="true"
//                   xmlns="http://www.w3.org/2000/svg"
//                   fill="currentColor"
//                   viewBox="0 0 22 20"
//                 >
//                   <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
//                 </svg>
//               ))}

//             {5 - rattingNumber > 0
//               ? Array(5 - rattingNumber)
//                   .fill(null)
//                   .map((_, i) => (
//                     <svg
//                       key={i}
//                       className="w-4 h-4 text-gray-200 dark:text-gray-600"
//                       aria-hidden="true"
//                       xmlns="http://www.w3.org/2000/svg"
//                       fill="currentColor"
//                       viewBox="0 0 22 20"
//                     >
//                       <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
//                     </svg>
//                   ))
//               : ""}
//           </div>

//           {/* RATTING OUTOF */}

//           <span className="bg-blue-100 text-blue-800 text-xs font-semibold px-2.5 py-0.5 rounded dark:bg-blue-200 dark:text-blue-800 ms-3">
//             5.0
//           </span>
//         </div>
//         <div className="flex items-center justify-between">
//           {/* PRICE */}

//           <span className="text-3xl font-bold text-gray-900 dark:text-white">
//             ${price}
//           </span>
//           {/* ADD TO CART */}

//           {/* {cart.length > 0 ? (
//             ""
//           ) : (
//             <div
//               className="text-white cursor-pointer active:scale-95 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
//               // onClick={() => setCart([...cart, { id, name, price, img }])}
//               onClick={() => {
//                 const fil = cart.filter((cd) => cd.id !== id);
//                 fil.push({ id, name, price, img });
//                 return setCart(fil);
//               }}
//             >
//               Add to cart
//             </div>
//           )} */}

//           {cart.map((item, i) =>
//             item.id === id ? (
//               // console.log(item);
//               <div
//                 key={i}
//                 className="text-white flex flex-row flex-nowrap cursor-pointer active:scale-95 bg-red-700 hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center "
//                 onClick={() => {
//                   const fil = cart.filter((cd) => cd.id !== id);
//                   return setCart(fil);
//                 }}
//               >
//                 Remove
//                 <svg
//                   xmlns="http://www.w3.org/2000/svg"
//                   fill="none"
//                   viewBox="0 0 24 24"
//                   strokeWidth={1.5}
//                   stroke="currentColor"
//                   className="size-6 inline"
//                 >
//                   <path
//                     strokeLinecap="round"
//                     strokeLinejoin="round"
//                     d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0"
//                   />
//                 </svg>
//               </div>
//             ) : (
//               <div
//                 key={i}
//                 className="text-white cursor-pointer active:scale-95 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
//                 // onClick={() => setCart([...cart, { id, name, price, img }])}
//                 onClick={() => {
//                   const fil = cart.filter((cd) => cd.id !== id);
//                   fil.push({ id, name, price, img });
//                   return setCart(fil);
//                 }}
//               >
//                 Add to cart
//               </div>
//             )
//           )}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Card;
