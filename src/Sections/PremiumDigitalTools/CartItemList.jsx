import Cart from "../../Components/UI/Cart";

const CartItemList = ({ addToCart, setAddToCart }) => {
  return (
    <div className="container mx-auto border border-base-300 rounded-md p-6 lg:p-10">
      {addToCart.length===0?
    <div className="space-y-2">
        <h1 className="text-2xl font-bold text-center">No Item added Yet</h1>
        <p className="text-base-content/60 text-base text-center">
          To add items go to Product and add items to cart first
        </p>
      </div> : <Cart addToCart={addToCart} setAddToCart={setAddToCart} ></Cart>

    }
      
    </div>
  );
};

export default CartItemList;
