import data from '../../data.json';

function Supports() {
  return (
    <section id="support">
      <div className="px-4 sm:px-0 text-text-primary flex flex-col sm:flex-row items-center justify-center sm:py-12 py-4 gap-4">
        {data['section-support'].cards.map((card) => (
          <div
            className="rounded-xl flex flex-col md:flex-row items-center gap-4 md:gap-0 md:items-start p-4 py-8 sm:w-[40vw] hover:bg-[#F6F8FB]"
            key={card.id}
            style={{ boxShadow: '0 0 6px rgba(0, 0, 0, 0.2)' }}
          >
            <div className="min-w-[80px] max-w-[120px] sm:max-w-[80px]">
              <img src={card.icon} alt={card.alt} className="rounded-3xl" />
            </div>
            <div className="flex flex-col justify-center gap-4 px-4">
              <div className="flex justify-between items-center">
                <h2 className="text-lg font-bold md:text-xl tracking-tight	">
                  {card.title}
                </h2>
                <a href="/support" target="_blank">
                  <img
                    src={data['section-support'].arrow.url}
                    alt={data['section-support'].arrow.alt}
                    className="h-4 cursor-pointer hover-effect"
                  />
                </a>
              </div>
              <p className="text-md w-[85%] leading-6">{card.paragraph}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
export default Supports;
