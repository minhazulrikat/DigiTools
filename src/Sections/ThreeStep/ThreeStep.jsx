import { Suspense } from "react";
import ThreeStepList from "./ThreeStepList";

const threeStepData = fetch("/threeStepData.json").then(res=> res.json());
const ThreeStep = () => {
  return (
    <div className="bg-base-200 ">
      <div className="container max-w-300 mx-auto px-4 py-15 md:py-20 lg:py-30 space-y-10">
        <div className="flex justify-center flex-col text-center space-y-4">
        <h3 className="text-3xl sm:text-4xl md:text-5xl font-extrabold">
          Get Started in 3 Steps
        </h3>
        <p className="text-base-content/60">
          Start using premium digital tools in minutes, not hours.
        </p>
      </div>
      <Suspense
        fallback={
          <div className="flex items-center justify-center min-h-[30vh]">
            <span className="loading loading-bars loading-xl"></span>
          </div>
        }
      >
        <ThreeStepList threeStepData={threeStepData}></ThreeStepList>
      </Suspense>
      </div>
    </div>
  );
};

export default ThreeStep;
