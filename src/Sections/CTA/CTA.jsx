const CTA = () => {
  return (
    <section className="gradient-primary">
      <div className="container mx-auto max-w-300 py-15 sm:py-20 md:py-30 px-4 space-y-10">
        <div className="text-center space-y-4 flex flex-col w-full justify-center items-center">
          <h2 className="text-white text-3xl sm:text-4xl md:text-5xl font-extrabold">
            Premium Digital Tools
          </h2>
          <p className="text-white/60">
            Join thousands of professionals who are already using Digitools to
            work smarter. <br /> Start your free trial today.
          </p>
        </div>

        {/* action wrapper */}
        <div className="space-y-4 flex justify-center items-center flex-col">
          <div className="flex justify-center items-center flex-col min-[380px]:flex-row gap-4 ">
            <a
              href="#products"
              className="btn btn-white text-base rounded-full border-none"
            >
              <span className="gradient-primary bg-clip-text text-transparent">
                Explore Products
              </span>
            </a>
            <a
              href="#pricing"
              className="btn bg-transparent border-none p-0  text-white hover:bg-white rounded-full text-base "
            >
               <span className="gradient-primary py-1 px-4 bg-clip-text hover:text-transparent border border-white w-full h-full flex justify-center items-center rounded-full">
            View Pricing
              </span>  
          
            </a>
          </div>
          <div className="text-white/60">
            <p>14-day free trial • No credit card required • Cancel anytime</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTA;
