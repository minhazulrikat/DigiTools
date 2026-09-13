import React from 'react';

const PricingCard = () => {
    return (
         <div className="card bg-base-100 border-2 border-base-300 rounded-2xl">
      <div className="card-body relative gap-4">
       
        {/* card image */}
        <div className="h-15 w-15 rounded-full border border-base-300 p-3 flex items-center justify-center">
          <img className="w-full h-full object-contain" src='' alt="" />
        </div>
        {/* heading and paragraph */}
        <div className="space-y-4">
          <h2 className="text-2xl font-bold">Starter</h2>
          <p className="text-base-content/60 text-base">Perfect for getting started</p>
        </div>
        {/* price and duration  */}
        <div>
          <h2 className="text-2xl font-bold">
            $0
            <span className="text-base text-base-content/60 font-normal">
              /month
            </span>
          </h2>
        </div>
        {/* features list  */}
        <ul className="flex flex-col flex-1 justify-start items-start gap-2 text-xs">
          {features.map((feature, index) => {
            return (
              <li key={index}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="size-4 me-2 inline-block text-success"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M5 13l4 4L19 7"
                  />
                </svg>
                <span className="text-base text-base-content/60">
                  {feature}
                </span>
              </li>
            );
          })}
        </ul>
        {/* action button  */}
        <div className="w-full">
          <button
            onClick={handleAddToCart}
            className={`${isAdded ? "btn-success " : "gradient-primary "} rounded-full text-white btn btn-block text-base py-3 transition-all duration-300`}
          >
            {isAdded ? "Added to Cart" : "Buy Now"}
          </button>
        </div>
      </div>
    </div>
    );
};

export default PricingCard;