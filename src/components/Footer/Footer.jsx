import React from 'react';
import data from '../../data.json';
import { Link } from 'react-scroll';

function Footer() {
  const handleClick = (e) => {
    e.target.style.filter = 'brightness(150%)';
    setTimeout(() => {
      e.target.style.filter = 'none';
    }, 50);
  };

  return (
    <footer className="py-8 bg-[#20202D] mx-auto max-w-screen">
      <div className="flex items-center justify-around flex-wrap gap-4">
        <div className="flex items-center gap-2">
          <a href="#">
            <img
              src={data['section-footer']['logo-white'].url}
              alt={data['section-footer']['logo-white'].alt}
              className="h-10 hover:brightness-110 active:brightness-90"
            />
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
      </div>
    </footer>
  );
}

export default Footer;
