import data from '../../data.json';

function About() {
  return (
    <section id="about">
      <div className="flex items-start w-full px-4 my-20">
        <img
          src={data['section-about'].image.url}
          alt={data['section-about'].image.alt}
          className="w-1/2 hidden lg:block"
        />
        <div className="flex flex-col justify-center items-start text-text-primary space-y-2 px-4">
          <div className="flex items-center">
            <p
              className="text-2xl sm:text-3xl lg:w-4/5 font-bold"
              style={{ lineHeight: '2.8rem' }}
            >
              {data['section-about'].title}
              <img
                src={data['section-about'].emoji.url}
                alt={data['section-about'].emoji.alt}
                className="inline ml-2"
              />
            </p>
          </div>
          <p className="lg:w-4/5 leading-10">
            {data['section-about'].subtitle}
          </p>
          <div className="p-6 shadow-xl lg:w-5/6 space-y-2 rounded-xl">
            <p className="font-semibold">
              {data['section-about']['title-paragraph']}
            </p>
            <p className="text-[14px] leading-8">
              {data['section-about'].paragraph}
            </p>
          </div>
          <div className="p-6 py-4 shadow-xl w-full  lg:w-5/6 flex items-center justify-between bg-[#F6F8FB] rounded-xl">
            <p className="font-semibold text-[14px]">
              {' '}
              {data['section-about'].action1}
            </p>
            <img
              src={data['section-about'].arrow.url}
              alt={data['section-about'].arrow.url}
              className="h-4 cursor-pointer hover-effect active:invert-[80] transition-all"
            />
          </div>
          <div className="p-6 py-4 shadow-xl w-full lg:w-5/6 flex items-center justify-between bg-[#F6F8FB] rounded-xl">
            <p className="font-semibold text-[14px]">
              {' '}
              {data['section-about'].action2}
            </p>
            <img
              src={data['section-about'].arrow.url}
              alt={data['section-about'].arrow.url}
              className="h-4 cursor-pointer hover-effect active:invert-[80] transition-all"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
export default About;
