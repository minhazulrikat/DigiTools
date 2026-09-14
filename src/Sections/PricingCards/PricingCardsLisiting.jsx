import { use } from "react";
import PricingCard from "../../Components/UI/PricingCard";

const PricingCardsLisiting = ({ pricingCardsData }) => {
  const pricingCards = use(pricingCardsData);

  return (
    <>
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {pricingCards.map((card) => {
          return <PricingCard key={card.id} card={card}></PricingCard>;
        })}
      </div>
    </>
  );
};

export default PricingCardsLisiting;
