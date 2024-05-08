import data from '../../data.json';

function Explore() {
  return (
    <section id="explore">
      <div className="bg-bg-secondary h-auto pt-20">
        <div className="hidden md:block">
          <div className="absolute left-1/2 transform -translate-x-1/2 border-[rgba(256,256,256,0.2)] mt-16 border-b-2 w-[82%] max-w-[1300px]"></div>
          <div className="flex items-center justify-around gap-8 py-7">
            <div className="flex flex-col items-center space-y-4">
              <img
                src={data['section-explore'].stages[0].icon.url}
                alt={data['section-explore'].stages[0].icon.alt}
                className="w-8 border-b-2 pb-1 border-primary"
              />
              <p className="text-primary text-xs">
                {data['section-explore'].stages[0].text}
              </p>
            </div>
            <div className="flex flex-col items-center space-y-4">
              <img
                src={data['section-explore'].stages[1].icon.url}
                alt={data['section-explore'].stages[1].icon.alt}
                className="w-8 pb-1"
              />
              <p className="text-white text-xs">
                {data['section-explore'].stages[1].text}
              </p>
            </div>
            <div className="flex flex-col items-center space-y-4">
              <img
                src={data['section-explore'].stages[2].icon.url}
                alt={data['section-explore'].stages[2].icon.alt}
                className="w-8 pb-1"
              />
              <p className="text-white text-xs">
                {data['section-explore'].stages[2].text}
              </p>
            </div>
            <div className="flex flex-col items-center space-y-4">
              <img
                src={data['section-explore'].stages[3].icon.url}
                alt={data['section-explore'].stages[3].icon.alt}
                className="w-8 pb-1"
              />
              <p className="text-white text-xs">
                {data['section-explore'].stages[3].text}
              </p>
            </div>
            <div className="flex flex-col items-center space-y-4">
              <img
                src={data['section-explore'].stages[4].icon.url}
                alt={data['section-explore'].stages[4].icon.alt}
                className="w-8 pb-1"
              />
              <p className="text-white text-xs">
                {data['section-explore'].stages[4].text}
              </p>
            </div>
          </div>
        </div>

        <div className="flex">
          <div className="flex flex-col items-center justify-center px-8 text-white">
            <p className="text-3xl font-bold leading-relaxed">
              {data['section-explore'].title}
            </p>
            <p className="mt-4 text-md pr-8 leading-8">
              {data['section-explore'].paragraph}
            </p>
            <a
              href={data['section-explore']['action-link']}
              target="_blank"
              className="self-start"
            >
              <button className="mt-4 mb-10 sm:mb-2 py-2 text-[14px] w-full sm:w-max px-4 bg-primary rounded-md hover:brightness-105 active:brightness-95">
                {data['section-explore'].button}
              </button>
            </a>
          </div>
          <img
            src={data['section-explore'].image.url}
            alt={data['section-explore'].image.alt}
            className="hidden sm:block ml-auto mt-12 md:mt-30 w-1/2 rounded-tl-xl"
          />
        </div>
      </div>
    </section>
  );
}
export default Explore;
