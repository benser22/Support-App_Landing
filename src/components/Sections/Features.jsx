import data from '../../data.json';

function Features() {
  return (
    <section id="features">
      <div className="flex items-center justify-center w-full px-4 mt-20">
        <div className="flex flex-col justify-center items-end text-text-primary space-y-2 px-2">
          <div className="flex items-end ml-auto w-full mx-auto">
            <p
              className="text-2xl sm:text-3xl font-bold lg:w-4/5"
              style={{ lineHeight: '2.8rem' }}
            >
              {data['section-features'].title}
              <img
                src={data['section-features'].emoji.url}
                alt={data['section-features'].emoji.alt}
                className="inline ml-2"
              />
            </p>
          </div>
          <p className="leading-10 self-start lg:w-[90%]">
            {data['section-features'].subtitle}
          </p>
          <div className="flex items-center justify-start gap-8 lg:gap-12 pt-6 self-start w-full">
            <div className="flex flex-col justify-start items-start space-y-4">
              <div className="flex items-center gap-2">
                <img
                  src={data['section-features']['check-icon'].url}
                  alt={data['section-features']['check-icon'].alt}
                  className="w-4"
                />
                <p className="min-w-max truncate text-xs sm:text-[14px]">
                  {data['section-features'].check1}
                </p>
              </div>
              <div className="flex items-center gap-2">
                <img
                  src={data['section-features']['check-icon'].url}
                  alt={data['section-features']['check-icon'].alt}
                  className="w-4"
                />
                <p className="min-w-max truncate text-xs sm:text-[14px]">
                  {data['section-features'].check2}
                </p>
              </div>
              <div className="flex items-center gap-2">
                <img
                  src={data['section-features']['check-icon'].url}
                  alt={data['section-features']['check-icon'].alt}
                  className="w-4"
                />
                <p className="min-w-max truncate text-xs sm:text-[14px]">
                  {data['section-features'].check3}
                </p>
              </div>
            </div>
            <div className="flex flex-col justify-start items-start space-y-4">
              <div className="flex items-center gap-2">
                <img
                  src={data['section-features']['check-icon'].url}
                  alt={data['section-features']['check-icon'].alt}
                  className="w-4"
                />
                <p className="min-w-max truncate text-xs sm:text-[14px]">
                  {data['section-features'].check4}
                </p>
              </div>
              <div className="flex items-center gap-2">
                <img
                  src={data['section-features']['check-icon'].url}
                  alt={data['section-features']['check-icon'].alt}
                  className="w-4"
                />
                <p className="min-w-max truncate text-xs sm:text-[14px]">
                  {data['section-features'].check5}
                </p>
              </div>
              <div className="flex items-center gap-2">
                <img
                  src={data['section-features']['check-icon'].url}
                  alt={data['section-features']['check-icon'].alt}
                  className="w-4"
                />
                <p className="min-w-max truncate text-xs sm:text-[14px]">
                  {data['section-features'].check6}
                </p>
              </div>
            </div>
          </div>
          <div className="flex justify-start items-start py-8 w-full">
            <a href={data['section-features']['action-link']} target="_blank">
              <p className="cursor-pointer text-[#3183FF] hover:brightness-90 active:brightness-110">
                {data['section-features'].action}
              </p>
            </a>
          </div>
        </div>
        <img
          src={data['section-features'].image.url}
          alt={data['section-features'].image.alt}
          className="w-[60%] hidden md:block"
        />
      </div>
    </section>
  );
}
export default Features;
