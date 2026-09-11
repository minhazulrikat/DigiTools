import { useState } from "react";

const PremiumDigitalTools = () => {
  const [currentTab, setCurrentTab] = useState("Products");
  const tabHandler = (tab) => {
    setCurrentTab(tab);
  };
  return (
    <section>
      <div className="container mx-auto py-32">
        {/* heading text wrapper  */}
        <div className="text-center space-y-4 flex flex-col w-full justify-center items-center">
          <h2 className="text-3xl sm:text-4xl md:text-6xl font-extrabold">
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
              Cart(0)
            </button>
          </div>
        </div>

       {/* Product and cart, cards container */}
       
      </div>
    </section>
  );
};

export default PremiumDigitalTools;
