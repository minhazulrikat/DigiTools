import { useState } from "react";
import Navbar from "./Sections/Navbar/Navbar"
import PremiumDigitalTools from "./Sections/PremiumDigitalTools/PremiumDigitalTools"

function App() {
  const [addToCart,setAddToCart] = useState([]);
  const totalCartItem = addToCart.length;
  return (
    <>
    <Navbar totalCartItem= {totalCartItem}></Navbar>
    <PremiumDigitalTools addToCart={addToCart} setAddToCart={setAddToCart} totalCartItem={totalCartItem}></PremiumDigitalTools>
    </>
  )
}

export default App
