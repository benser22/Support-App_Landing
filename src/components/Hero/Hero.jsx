import data from '../../data.json';

function Hero() {
  return (
    <div>
      <div className="bg-slate-300">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <img
            src={data['section-hero'].image.url}
            alt={data['section-hero'].image.alt}
            className="max-w-sm"
          />
          <div className="w-1/2">
            <h1 className="text-5xl font-bold">Box Office News!</h1>
            <p className="py-6">
              Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
              excepturi exercitationem quasi. In deleniti eaque aut repudiandae
              et a id nisi.
            </p>
            <button className="btn btn-primary">Get Started</button>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Hero;
