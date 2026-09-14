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
    <div className="flex justify-center items-center flex-col sm:flex-row gap-4 ">
        <a href="#products" className="btn btn-white text-base rounded-full border-none">
            <span className="gradient-primary bg-clip-text text-transparent">Explore Products</span>
        </a>
        <a className="btn btn-white btn-outline text-base border-white text-white rounded-full hover:text-base-content">View Pricing</a>
    </div>
      </div>
    </div>
    </section>
  );
};

export default CTA;
