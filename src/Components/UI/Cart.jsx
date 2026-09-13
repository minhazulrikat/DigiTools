import { toast } from "react-toastify";

const Cart = ({ setAddToCart, cartItem }) => {
  const { icon, title, price } = cartItem;
  const handleRemoveCart = () => {
    toast.info("Item Removed");
    setAddToCart((prev) => {
      return prev.filter((item) => {
        return item.id !== cartItem.id;
      });
    });
  };

  return (
    <div className="space-y-6">
      {/* main container */}

      {/* indevisual cart item  */}
      <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center bg-base-200 p-5 gap-3 rounded-2xl">
        <div className="w-15 h-15 rounded-full border border-base-300 bg-base-100 p-3 hidden sm:block">
          <img className="w-full h-full object-contain" src={icon} alt="icon" />
        </div>
        <div className="flex-1 hidden sm:block">
          <h5 className="text-xl font-medium">{title}</h5>
          <p className="text-base-content/60">${price}</p>
        </div>
        {/* display only on mobile */}
        <div className="sm:hidden flex gap-3">
          <div className="w-15 h-15 rounded-full border border-base-300 bg-base-100 p-3">
            <img
              className="w-full h-full object-contain"
              src={icon}
              alt="icon"
            />
          </div>
          <div className="flex-1">
            <h5 className="text-xl font-medium">{title}</h5>
            <p className="text-base-content/60">${price}</p>
          </div>
        </div>
        <div className="w-full sm:w-fit">
          <button
            onClick={handleRemoveCart}
            className="btn btn-ghost text-error hidden sm:block"
          >
            Remove
          </button>
          <button
            onClick={handleRemoveCart}
            className="btn btn-error sm:hidden"
          >
            Remove
          </button>
        </div>
      </div>
    </div>
  );
};

export default Cart;
