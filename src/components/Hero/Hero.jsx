import data from '../../data.json';

function Hero() {
  return (
    <div>
      <div className="text-text-primary">
        <div className="hero-content flex-col lg:flex-row-reverse lg:gap-8">
          <img
            src={data['section-hero'].image.url}
            alt={data['section-hero'].image.alt}
            className="max-w-[90vw] lg:w-[50vw]"
          />
          <div className="px-4 lg:px-0 lg:w-[35vw]">
            <h1 className="text-5xl font-bold leading-tight">
              {data['section-hero'].title}
            </h1>
            <p className="py-6 leading-9">{data['section-hero'].subtitle}</p>
            <div className="flex items-center gap-2 w-[70vw] lg:w-[30vw]">
              <input
                type="text"
                className="text-xs py-2 px-4 rounded-[4px] shadow-md w-full"
                placeholder={data['section-hero']['input-placeholder']}
              />
              <button className="shadow-md text-xs text-white bg-primary rounded-[6px] py-2 px-4 min-w-max hover:brightness-110 active:brightness-95 transition-all">
                Get Started
              </button>
            </div>
            <div className="flex flex-wrap items-center mt-8 gap-4">
              <p className="text-[#56627260] text-xs font-bold">
                {data['section-hero'].sponsors.text}
              </p>
              {data['section-hero'].sponsors['sponsors-logos'].map((logo) => (
                <img
                  src={logo.url}
                  alt={logo.alt}
                  key={logo.id}
                  className="h-5"
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Hero;
