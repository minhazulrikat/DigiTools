const Stats = () => {
  return (
    <div className="flex justify-center items-center gradient-primary text-white py-15">
      <div className="container  stats stats-vertical gap-6 sm:stats-horizontal w-full text-center justify-evenly max-w-300">
        <div className="my-auto space-y-3">
          <div className="stat-value text-4xl sm:text-5xl md:text-6xl">31K</div>
          <div className="stat-title text-base text-white/80 ">Downloads</div>
        </div>
         <div className="divider divider-horizontal h-4/5 my-auto bg-white/40 w-0.5"></div>
        <div className="my-auto space-y-3">
          <div className="stat-value text-4xl sm:text-5xl md:text-6xl font-extrabold">4,200</div>
          <div className="stat-title text-base text-white/80 ">New Users</div>
        </div>
        <div className="divider divider-horizontal h-4/5 my-auto bg-white/40 w-0.5"></div>
        <div className="my-auto space-y-3">
          <div className="stat-value text-4xl sm:text-5xl md:text-6xl">1,200</div>
          <div className="stat-title text-base text-white/80 ">New Registers</div>
        </div>
      </div>
    </div>
  );
};

export default Stats;
