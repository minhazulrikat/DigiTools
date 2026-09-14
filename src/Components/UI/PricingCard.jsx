const PricingCard = ({ card }) => {
  const { features, billing, price, description, title, buttonText, badge } =
    card;
  return (
    <div className={`card ${badge ? " gradient-primary text-white ":" bg-base-100 "} border-2 border-base-300 rounded-2xl`}>
      <div className="card-body relative gap-4">
        {/* heading and paragraph */}
        <div className="space-y-4">
          <h2 className="text-2xl font-bold">{title}</h2>
          <p className={`${badge ? ' text-base-100/80 ': ' text-base-content/60 '} text-base`}>{description}</p>
        </div>
        {/* price and duration  */}
        <div>
          <h2 className="text-2xl font-bold">
            ${price}
            <span className={`text-base ${badge ? ' text-base-100/80 ': ' text-base-content/60 '} font-normal`}>
              /{billing}
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
                <span className={`text-base ${badge ? " text-base-100/80 ": " text-base-content/60 "}`}>
                  {feature}
                </span>
              </li>
            );
          })}
        </ul>
        {/* action button  */}
        <div className="w-full">
          <button
            className={` ${badge ? " bg-base-100 " : " gradient-primary "} rounded-full btn btn-block text-base py-3 transition-all duration-300`}
          >
            <span className={`${badge ? ' gradient-primary bg-clip-text text-transparent ': ' text-white '}`}>{buttonText}</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default PricingCard;
