import { use } from "react";
import ThreeStepCard from "../../Components/UI/ThreeStepCard";


const ThreeStepList = ({threeStepData}) => {
    const cardsData = use(threeStepData);
    console.log(cardsData)
    return (
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {cardsData.map((data)=>{
                return(
                    <ThreeStepCard key={data.id} data = {data}></ThreeStepCard>
                )
            })}
        </div>
    );
};

export default ThreeStepList;