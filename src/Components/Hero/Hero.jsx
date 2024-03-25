const Hero = () => {
  return (
    <>
      <div className="py-12 h-auto sm:py-0 dark:bg-black dark:text-white duration-300 overflow-hidden ">
        <div className="container min-h-[700px] flex relative mt-10">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 place-items-center relative z-10">
            {/* hero text section */}
            <div className="order-2 sm:order-1 space-y-5 lg:pr-20 relative">
              <h1 data-aos="fade-up" className="text-4xl font-semibold">
                {" "}
                <span className=" bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary">
                  Sizni brendingini necha kishi ko'rdi?
                </span>
              </h1>
              <p data-aos="fade-up" data-aos-delay="300">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ab
                molestias quia exercitationem ex inventore labore beatae cumque
                et quaerat voluptas?
              </p>
              <div className="flex gap-6 z-10">
                <button
                  data-aos="fade-up"
                  data-aos-delay="500"
                  className="primary-btn"
                >
                  Click me
                </button>
              </div>
            </div>
            {/* image section */}
            <div
              data-aos="fade-up"
              data-aos-offset="0"
              className="order-1 sm:order-2"
            >
              <img src="https://picsum.photos/500" alt=""/>
            </div>
          </div>

          {/* Animated Blob */}
          <div className="h-[500px] w-[500px] bg-gradient-to-r from-primary to-secondary rounded-full absolute top-0 blur-3xl animated-wrapper"></div>
        </div>
      </div >
    </>
  );
};

export default Hero;
