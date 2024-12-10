import { useParams } from "react-router-dom";
import products from "../products.json";
import NoContentPage from "../components/noContent";

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

const ProductDetail: React.FC<CartProbs> = ({ cart, setCart }) => {
  const { id } = useParams<{ id: string }>();

  const productId = parseInt(id || "", 10);
  if (isNaN(productId) || productId <= 0) {
    return <NoContentPage name={id || "Invalid Product"} />;
  }

  const product = products.find((p) => p.id === productId);

  if (!product) {
    return <NoContentPage name={productId.toString()} />;
  }

  const isInCart = cart.some((cd) => cd.id === product.id);

  const handleCartToggle = () => {
    if (isInCart) {
      const data = cart.filter((cd) => cd.id !== product.id);
      setCart(data);
      return;
    }

    setCart([
      ...cart,
      {
        id: product.id,
        name: product.title,
        img: product.image,
        quantity: 1,
        price: product.price,
      },
    ]);
  };

  return (
    <main className="flex items-center justify-center p-4">
      <div className="bg-white rounded-lg shadow-md p-6 sm:p-8 dark:bg-gray-800 max-w-3xl">
        <div className="flex flex-col sm:flex-row gap-6">
          {/* PRODUCT IMG, NAME */}
          <div className="sm:w-1/2">
            <img
              src={product.image}
              alt={product.title}
              className="w-full h-auto rounded-lg object-cover"
            />
          </div>

          {/* PRODUCT INFO */}
          <div className="sm:w-1/2 text-gray-900 dark:text-gray-300">
            <h1 className="text-3xl font-bold mb-4">{product.title}</h1>

            <p className="text-gray-700 dark:text-gray-400 mb-4">
              {product.description}
            </p>

            <div className="mb-2">
              <span className="font-semibold">Price:</span> ${product.price}
            </div>

            <div className="mb-2">
              <span className="font-semibold">Category:</span>{" "}
              {product.category}
            </div>

            <div className="mb-4">
              <span className="font-semibold">Rating:</span> ⭐{" "}
              {product.rating.rate} ({product.rating.count} reviews)
            </div>

            {/* CART MANIPUTATION BUTTONS */}
            <div
              className={`text-white cursor-pointer active:scale-95 inline-block ${
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
    </main>
  );
};

export default ProductDetail;
