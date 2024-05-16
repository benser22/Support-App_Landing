import { useState } from 'react';
import data from '../../data.json';

function Hero() {
  const [email, setEmail] = useState('');
  const [isValidEmail, setIsValidEmail] = useState(false);

  const handleInputChange = (e) => {
    const inputEmail = e.target.value;
    setEmail(inputEmail);
    const re = /\S+@\S+\.\S+/;
    setIsValidEmail(re.test(inputEmail));
  };

  const handleGetStartedClick = () => {
    if (isValidEmail) {
      window.location.href = `mailto:${data.contact}?subject=Contacto&body=Email del contacto: ${email}`;
    }
    setEmail('');
  };

  return (
    <section id="home">
      <div className="text-text-primary bg-[#FFFCF7] pt-24 sm:pt-32 pb-12 w-full">
        <div className="flex flex-col lg:flex-row-reverse lg:gap-8 justify-center px-8 overflow-hidden">
          <img
            src={data['section-hero'].image.url}
            alt={data['section-hero'].image.alt}
            className="lg:w-[30vw] object-cover"
          />
          <div className="px-4">
            <h1 className="text-4xl sm:text-5xl font-bold leading-tight">
              {data['section-hero'].title}
            </h1>
            <p className="py-6 leading-9">{data['section-hero'].subtitle}</p>
            <div className="flex items-center gap-2">
              <input
                type="email"
                value={email}
                onChange={handleInputChange}
                className={`text-xs py-2 px-4 rounded-[4px] shadow-md w-full max-w-[300px]  bg-[#FFFCF7] ${
                  isValidEmail ? '' : 'border-red-500'
                }`}
                placeholder={data['section-hero']['input-placeholder']}
              />
              <button
                disabled={!isValidEmail}
                onClick={handleGetStartedClick}
                className={`shadow-md text-xs text-white bg-primary rounded-[6px] py-2 px-4 min-w-max hover:brightness-110 active:brightness-95 transition-all ${
                  !isValidEmail ? 'cursor-not-allowed opacity-50' : ''
                }`}
              >
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
    </section>
  );
}
export default Hero;
