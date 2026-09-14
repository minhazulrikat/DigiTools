import Banner from "../../assets/banner.png";
import Play from "../../assets/Play.png";

const Hero = () => {
  return (
    <section className="hero bg-base-100 min-h-screen py-15">
      <div className="hero-content flex-col lg:flex-row-reverse gap-15">
        <div className="lg:max-w-2/5">
          <img
            alt="hero component"
            src={Banner}
            className="w-full h-auto rounded-lg shadow-md"
          />
        </div>
        <div className="lg:max-w-3/5 space-y-8">
          <div className="space-y-4">
            {/* content wrapper */}
            <div className="badge badge-primary badge-soft badge-xl rounded-full">
              <span className="relative flex h-4 w-4 items-center justify-center rounded-full bg-primary/20">
                <span className="absolute h-3 w-3 rounded-full bg-primary/30 animate-ping"></span>
                <span className="relative h-2 w-2 rounded-full bg-primary "></span>
              </span>
              <span className="text-base bg-clip-text gradient-primary">
                New: AI-Powered Tools Available
              </span>
            </div>
            <h1 className="text-4xl sm:text-5xl md:text-7xl font-extrabold leading-tight">
              Supercharge Your <br /> Digital Workflow
            </h1>
            <p className="leading-loose text-base-content/60 md:text-lg">
              Access premium AI tools, design assets, templates, and
              productivity <br />
              software—all in one place. Start creating faster today. <br />{" "}
              Explore Products
            </p>
          </div>
          <div className="flex gap-4 items-center">
            <a href="#products" className="btn gradient-primary text-white font-bold rounded-full">
              {" "}
              Explore Products
            </a>
            <button className="btn btn-outline btn-primary text-transparent bg-clip-text gradient-primary text-base font-bold rounded-full">
              {" "}
              <img src={Play} alt="playbutton" />
              Watch Demo
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
