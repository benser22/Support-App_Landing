import { useState } from 'react';
import { Link } from 'react-scroll';
import data from '../../data.json';
import PropTypes from 'prop-types';

const MenuMobile = ({ isOpen, onClick }) => {
  const [isOpenDrop, setIsOpenDrop] = useState({});

  const handleDropdownToggle = (itemId) => {
    setIsOpenDrop((prevState) => ({
      ...prevState,
      [itemId]: !prevState[itemId],
    }));
  };

  const handleButtonClick = () => {
    window.location.href = `mailto:${data.contact}?subject=Contacto`;
  };

  return (
    <div
      className={`${
        isOpen ? 'flex fadeIn' : 'hidden'
      } w-full min-h-screen fixed inset-0 md:hidden font-bold`}
      onClick={onClick}
      style={{ background: 'rgba(0,0,0,0.3)' }}
    >
      <ul
        className={`fixed left-0 bg-[#FFFCF7] top-0 min-h-screen px-4 py-5 min-w-[60vw] flex flex-col gap-4 
        items-start text-text-primary`}
      >
        <div className="flex-col justify-center items-center">
          <a href="/" className="flex items-center gap-2 justify-center pt-2">
            <img
              src={data['section-footer'].logo.url}
              alt={data['section-footer'].logo.alt}
              className="h-10 hover:brightness-110 active:brightness-90"
            />
            <p className="min-w-max text-xl text-text-primary font-bold mr-4 hover:text-primary">
              {data['section-footer'].logo.text}
            </p>
          </a>
          <hr className="mt-6 w-[50vw]"></hr>
        </div>
        <div className="ml-[2vw] flex flex-col gap-12 mt-6 w-full">
          {data['section-header'].links.map((item, index) => (
            <RenderLink
              key={index}
              link={item}
              handleDropdownToggle={handleDropdownToggle}
              isOpenDrop={isOpenDrop}
            />
          ))}
          <a href={data['section-header']['blog-ref']} target="_blank">
            <p className="flex items-center gap-4 text-md cursor-pointer hover:text-red-custom sm:text-[12px] lg:text-[16px] 2xl:text-[18px] w-max border-b-2 border-transparent hover:border-b-2 text-text-primary hover:border-primary menu-item">
              <img
                src={data['section-header']['blog-icon-mobile']}
                alt="blog icon"
                className="h-6"
              />
              {data['section-header']['blog-button']}
            </p>
          </a>
          <div onClick={handleButtonClick}>
            <p className="flex items-center gap-4 text-md cursor-pointer hover:text-red-custom sm:text-[12px] lg:text-[16px] 2xl:text-[18px] w-max border-b-2 border-transparent hover:border-b-2 text-text-primary hover:border-primary menu-item">
              <img
                src={data['section-header']['contact-icon-mobile']}
                alt="login icon"
                className="h-6"
              />
              {data['section-header'].contact}
            </p>
          </div>
        </div>
      </ul>
    </div>
  );
};

function RenderLink({ link, handleDropdownToggle, isOpenDrop }) {
  return (
    <div>
      <Link
        to={link.href}
        key={link.id}
        className="flex flex-col gap-4 hover:text-red-custom active:text-red-custom cursor-pointer"
        smooth={true}
        duration={700}
        spy={false}
        offset={-80}
      >
        <div
          className="flex flex-col gap-1.5 cursor-pointer"
          onClick={() => handleDropdownToggle(link.id)}
        >
          <div className="flex items-center gap-4">
            {link.icon && (
              <img
                src={link.icon}
                alt={link.alt}
                className="w-[26px] h-[26px]"
              />
            )}
            <p
              className="min-w-max text-md hover:text-red-custom sm:text-[12px] lg:text-[16px] 2xl:text-[18px] w-max"
              key={link.id}
            >
              {link.title}
            </p>
            {link.isDropdown && (
              <img
                src={data['section-header']['dropdow-icon'].url}
                alt={data['section-header']['dropdow-icon'].alt}
                className="h-[6px] mr-2"
                style={{
                  transform: isOpenDrop[link.id]
                    ? 'rotate(180deg)'
                    : 'rotate(0deg)',
                  transition: 'transform 0.2s ease-in-out',
                }}
              />
            )}
          </div>
        </div>
      </Link>
      {link.isDropdown && isOpenDrop[link.id] && (
        <div className="flex flex-col space-y-6 w-full min-w-max mt-4">
          {link.items.map((option) => (
            <Link
              key={option.id + option.text}
              to={option.link}
              className="ml-8 truncate text-blue-custom cursor-pointer hover:text-red-custom"
              smooth={true}
              duration={700}
              spy={false}
              offset={-80}
            >
              {option.text}
            </Link>
          ))}
        </div>
      )}
    </div>
  );
}

RenderLink.propTypes = {
  link: PropTypes.object.isRequired,
  handleDropdownToggle: PropTypes.func.isRequired,
  isOpenDrop: PropTypes.object.isRequired,
};

MenuMobile.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  onClick: PropTypes.func.isRequired,
};

export default MenuMobile;
