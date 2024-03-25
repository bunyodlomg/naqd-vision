const Banner = () => {
  return (
    <div className="container grid grid-cols-1  sm:grid-cols-2 md:grid-cols-2 gap-10 ">
      <img className="mx-auto" src="https://picsum.photos/400" alt="" />
      <div className="order-2 sm:order-1 space-y-5 lg:pr-20 relative z-30">
        <h1 data-aos="fade-up" className="text-4xl font-semibold">
          {" "}
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary">
            Sizni brendingini necha kishi ko'rdi?
          </span>
        </h1>
        <p data-aos="fade-up" data-aos-delay="300">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ab
          molestias quia exercitationem ex inventore labore beatae cumque
          et quaerat voluptas?
        </p>
        <div className="flex gap-6">
          <button
            data-aos="fade-up"
            data-aos-delay="500"
            className="primary-btn"
          >
            Click me
          </button>
        </div>
      </div>
    </div>
  );
};

export default Banner;