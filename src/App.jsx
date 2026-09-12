import { useState } from "react";
import Navbar from "./Sections/Navbar/Navbar";
import PremiumDigitalTools from "./Sections/PremiumDigitalTools/PremiumDigitalTools";
import Hero from "./Sections/Hero/Hero";

function App() {
  const [addToCart, setAddToCart] = useState([]);
  const totalCartItem = addToCart.length;
  const [currentTab, setCurrentTab] = useState("Products");

  const handleCartClick = () => {
    setCurrentTab("Cart");

    document.getElementById("premium-tools")?.scrollIntoView({
      behavior: "smooth",
    });
  };
  return (
    <>
      <Navbar
        handleCartClick={handleCartClick}
        totalCartItem={totalCartItem}
      ></Navbar>
      <Hero></Hero>
      <PremiumDigitalTools
        currentTab={currentTab}
        setCurrentTab={setCurrentTab}
        addToCart={addToCart}
        setAddToCart={setAddToCart}
        totalCartItem={totalCartItem}
      ></PremiumDigitalTools>
    </>
  );
}

export default App;
