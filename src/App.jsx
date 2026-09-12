import { useState } from "react";
import Navbar from "./Sections/Navbar/Navbar";
import PremiumDigitalTools from "./Sections/PremiumDigitalTools/PremiumDigitalTools";
import Hero from "./Sections/Hero/Hero";
import Stats from "./Sections/Stats/Stats";
import Footer from "./Sections/Footer/Footer";

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
      <Stats></Stats>
      <PremiumDigitalTools
        currentTab={currentTab}
        setCurrentTab={setCurrentTab}
        addToCart={addToCart}
        setAddToCart={setAddToCart}
        totalCartItem={totalCartItem}
      ></PremiumDigitalTools>
      <Footer></Footer>
    </>
  );
}

export default App;
