import Card from "../components/card";
import Products from "../products.json";

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

const ProductList: React.FC<CartProbs> = ({ cart, setCart }) => {
  return (
    <main className="flex flex-wrap gap-5">
      {Products.map((product) => (
        <Card
          key={product.id}
          id={product.id}
          img={product.image}
          name={product.title}
          category={product.category}
          description={product.description}
          price={product.price}
          ratting={+product.rating.rate}
          cart={cart}
          setCart={setCart}
        />
      ))}
    </main>
  );
};

export default ProductList;
