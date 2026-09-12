import { toast } from "react-toastify";
import Cart from "../../Components/UI/Cart";

const CartItemList = ({ addToCart, setAddToCart }) => {
  const totalAmount = addToCart.reduce((acc, current) => {
    acc = acc + current.price;
    return acc;
  }, 0);
  const handleCheckOut = () => {
    setAddToCart([]);
    toast("Checkout Processing");
  };
  return (
    <div className="container mx-auto border border-base-300 rounded-md p-6 lg:p-10">
      {addToCart.length === 0 ? (
        <div className="space-y-2 min-h-[30vh] flex flex-col items-center justify-center bg-base-200">
          <h1 className="text-2xl font-bold text-center">No Item added Yet</h1>
          <p className="text-base-content/60 text-base text-center">
            To add items go to Product and add items to cart first
          </p>
        </div>
      ) : (
        <div className="space-y-6">
          <h2 className="text-2xl font-bold">Your Cart</h2>
          {addToCart.map((cartItem, index) => {
            return (
              <Cart
                key={index}
                cartItem={cartItem}
                setAddToCart={setAddToCart}
              ></Cart>
            );
          })}
          {/* checkout button and total amount */}

          <div className="flex justify-between items-center">
            <p className="flex-1 text-base-content/60 text-base">Total</p>
            <h5 className="font-bold text-2xl">${totalAmount}</h5>
          </div>

          <div>
            <button
              onClick={handleCheckOut}
              className="btn gradient-primary btn-block text-white rounded-full"
            >
              Proceed to Checkout
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default CartItemList;
