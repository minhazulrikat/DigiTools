import Rocket from "../../assets/rocket.png";
import User from "../../assets/user.png";
import Box from "../../assets/package.png";

const ThreeStepCard = ({data}) => {
    const {step,icon,description,title} = data;
    console.log(icon)

    const icons = {
  user: User,
  box: Box,
  rocket: Rocket,
};

  return (
    <div className="card bg-base-100 p-6 flex justify-center items-center gap-4 relative">
        <span className="rounded-full absolute top-5 right-5 gradient-primary text-white text-sm w-6 h-6 flex justify-center items-center">{step}</span>
      <figure className="w-25 h-24.75 p-5 bg-[linear-gradient(89.15deg,#4f39f633_-31.72%,#9514fa33_99.89%)] rounded-full ">
        <img
          src={icons[icon]}
          alt="Shoes"
          className="w-full object-contain"
        />
      </figure>
      <div className="items-center justify-center flex flex-col gap-4 text-center w-full">
        <h2 className="card-title text-2xl font-bold text-center ">{title}</h2>
        <p className="text-base-content/60 leading-loose">
          {description}
        </p>
        
      </div>
    </div>
  );
};

export default ThreeStepCard;
