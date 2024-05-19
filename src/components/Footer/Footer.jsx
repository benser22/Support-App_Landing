import data from '../../data.json';
import { Link } from 'react-scroll';

function Footer() {
  const handleButtonClick = () => {
    window.location.href = `mailto:${data.contact}?subject=Contact`;
  };

  return (
    <footer className="py-8 bg-[#20202D] mx-auto max-w-screen">
      <div className="flex items-center justify-around flex-wrap gap-4">
        <div className="flex items-center gap-2">
          <a href="/" className="flex items-center gap-2">
            <img
              src={data['section-footer'].logo.url}
              alt={data['section-footer'].logo.alt}
              className="h-10 hover:brightness-110 active:brightness-90"
            />
            <p className="text-white font-semi-bold mr-2 hover:text-primary">
              {data['section-footer'].logo.text}
            </p>
          </a>
          <p className="text-[10px] text-[#AEAEB6]">
            {data['section-footer'].copywrite}
          </p>
        </div>
        <div className="flex items-center gap-6">
          {data['section-footer'].links.map((link, index) => (
            <Link
              to={link.href}
              key={link.id + index}
              spy={false}
              smooth={true}
              duration={500}
              offset={-75}
              className="cursor-pointer"
            >
              <p className="text-[14px] text-white hover:text-primary active:text-text-primary transition-all cursor-pointer">
                {link.text}
              </p>
            </Link>
          ))}
        </div>
        <div className="flex items-center mx-2 space-x-6">
          <a href={data['section-header']['blog-ref']} target="_blank">
            <p className="flex items-center gap-2 cursor-pointer sm:text-[12px] lg:text-[14px] w-max border-b-2 border-transparent hover:border-b-2 text-white hover:border-primary menu-item">
              <img
                src={data['section-header']['blog-button-icon']}
                alt="blog icon"
                className="h-4"
                style={{ filter: 'invert(1)' }}
              />
              {data['section-header']['blog-button']}
            </p>
          </a>
          <a onClick={handleButtonClick}>
            <p className="flex items-center gap-2 cursor-pointer sm:text-[12px] lg:text-[14px] w-max border-b-2 border-transparent hover:border-b-2 text-white hover:border-primary menu-item">
              <img
                src={data['section-header']['contact-icon']}
                alt="login icon"
                className="h-4"
                style={{ filter: 'invert(1)' }}
              />
              {data['section-header'].contact}
            </p>
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
