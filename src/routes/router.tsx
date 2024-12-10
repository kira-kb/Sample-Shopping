import { Route, Routes } from "react-router-dom";
import Cart from "../pages/cart";
import { PageNotFound } from "../components/pageNotFound";
import ProductDetail from "../pages/productDetail";
import ProductList from "../pages/productList";

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

const AllRoutes: React.FC<CartProbs> = ({ cart, setCart }) => {
  return (
    <>
      <Routes>
        <Route
          path={"/"}
          element={<ProductList cart={cart} setCart={setCart} />}
        />
        <Route
          path={"/product/:id"}
          element={<ProductDetail cart={cart} setCart={setCart} />}
        />
        <Route
          path={"/cart"}
          element={<Cart cart={cart} setCart={setCart} />}
        />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </>
  );
};

export default AllRoutes;
