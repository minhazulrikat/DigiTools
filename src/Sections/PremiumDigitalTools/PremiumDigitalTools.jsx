import { Suspense } from "react";
import ProductList from "./ProductList";
import CartItemList from "./CartItemList";

const productsData = fetch("/productsData.json").then((res) => res.json());

const PremiumDigitalTools = ({
  addToCart,
  setAddToCart,
  totalCartItem,
  setCurrentTab,
  currentTab,
}) => {
  const tabHandler = (tab) => {
    setCurrentTab(tab);
  };
  return (
    <section>
      <div className="container max-w-300 mx-auto py-15 sm:py-20 md:py-24 lg:py-32 space-y-10">
        {/* heading text wrapper  */}
        <div className="text-center space-y-4 flex flex-col w-full justify-center items-center">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold">
            Premium Digital Tools
          </h2>
          <p className="text-base-content/60">
            Choose from our curated collection of premium digital products
            designed <br /> to boost your productivity and creativity.
          </p>

          {/* button wrapper */}
          <div className="flex items-center justify-center p-1 w-fit border border-base-300 rounded-full">
            <button
              onClick={() => {
                tabHandler("Products");
              }}
              className={`btn ${currentTab === "Products" ? " gradient-primary text-white " : " btn-ghost "} rounded-full`}
            >
              Products
            </button>
            <button
              onClick={() => {
                tabHandler("Cart");
              }}
              className={`btn ${currentTab === "Cart" ? " gradient-primary text-white " : " btn-ghost "} rounded-full`}
            >
              Cart ({totalCartItem})
            </button>
          </div>
        </div>

        {/* Product and cart, cards container */}
        <div id="premium-tools" className="container mx-auto">
          {currentTab === "Products" ? (
            <Suspense
              fallback={
                <div className="flex items-center justify-center min-h-[60vh]">
                  <span className="loading loading-bars loading-xl"></span>
                </div>
              }
            >
              <ProductList
                addToCart={addToCart}
                setAddToCart={setAddToCart}
                productsData={productsData}
              ></ProductList>
            </Suspense>
          ) : (
            <CartItemList
              setAddToCart={setAddToCart}
              addToCart={addToCart}
            ></CartItemList>
          )}
        </div>
      </div>
    </section>
  );
};

export default PremiumDigitalTools;
