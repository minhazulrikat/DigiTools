import { Suspense } from "react";
import PricingCardsLisiting from "./PricingCardsLisiting";

const pricingCardsData = fetch("/pricingCardsData.json").then((res) =>
  res.json(),
);

const PricingCards = () => {
  return (
    <>
      <section id="pricing" className="container mx-auto max-w-300 py-15 sm:py-20 md:py-30 px-4">
        <div className="text-center space-y-4 flex flex-col w-full justify-center items-center mb-10">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold">
           Simple, Transparent Pricing
          </h2>
          <p className="text-base-content/60">
            Choose the plan that fits your needs. Upgrade or downgrade anytime.
          </p>
        </div>

        <Suspense
          fallback={
            <div className="flex items-center justify-center min-h-[30vh]">
              <span className="loading loading-bars loading-xl"></span>
            </div>
          }
        >
          <PricingCardsLisiting
            pricingCardsData={pricingCardsData}
          ></PricingCardsLisiting>
        </Suspense>
      </section>
    </>
  );
};

export default PricingCards;
