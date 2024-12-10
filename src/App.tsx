// import { BrowserRouter as Router } from "react-router-dom";
import { useState, useEffect } from "react";
// import { useState } from "react";
import Header from "./components/header";
import "./App.css";
import AllRoutes from "./routes/router";
import Footer from "./components/footer";
import useLocalStorage from "./components/useLocalStarage";

interface CartProbs {
  id: number;
  name: string;
  price: number;
  img: string;
  quantity: number;
}

function App() {
  const [savedData, setSavedData] = useLocalStorage<CartProbs[]>("cart", []);
  const [cartData, setCartData] = useState<CartProbs[]>(savedData);

  useEffect(() => {
    setSavedData(cartData);
  }, [cartData, setSavedData]);

  return (
    <main>
      <Header cart={cartData} />
      <AllRoutes cart={cartData} setCart={setCartData} />
      <Footer />
    </main>
  );
}

export default App;
