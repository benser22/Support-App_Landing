import { useState, useEffect, useRef } from 'react';
import useNav from '../../hooks/useNav';
import MenuMobile from './MenuMobile';
import data from '../../data.json';
import { BsJustify, BsXLg } from 'react-icons/bs';
import { Link } from 'react-scroll';

const Navbar = () => {
  const { isOpen, handleIsOpen } = useNav();
  const [isOpenDrop, setIsOpenDrop] = useState({});
  const [isScrolled, setIsScrolled] = useState(false);
  const [searchInput, setSearchInput] = useState('');
  const dropdownRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.pageYOffset;
      setIsScrolled(scrollTop > 0);
    };

    const handleClickOutside = (event) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target) &&
        event.target.id !== 'dropdown-icon' &&
        event.target.id !== 'dropdown-title'
      ) {
        setIsOpenDrop({});
      }
    };

    window.addEventListener('scroll', handleScroll);
    document.addEventListener('mousedown', handleClickOutside);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const handleDropdownToggle = (itemId) => {
    const newIsOpenDrop = {};
    Object.keys(isOpenDrop).forEach((key) => {
      newIsOpenDrop[key] = false;
    });

    newIsOpenDrop[itemId] = !isOpenDrop[itemId];
    setIsOpenDrop(newIsOpenDrop);
  };

  const handleSearchIconClick = () => {
    console.log('Input value:', searchInput);
    setSearchInput('');
  };

  const handleButtonClick = () => {
    window.location.href = `mailto:${data.contact}?subject=Contact`;
  };

  return (
    <header
      className={`fixed z-[98] top-0 left-0 w-full px-8 xl:px-16 py-2 flex justify-between items-center h-[78px] text-text-primary ${
        isScrolled ? 'border-b' : ''
      }`}
      style={{
        backgroundColor: '#FFFCF7',
      }}
    >
      <div className="flex items-center justify-between w-full text-text-primary">
        <div className="hidden sm:flex items-center justify-between md:space-x-6 sm:space-x-2">
          <a href="/" className="flex items-center gap-2">
            <img
              src={data['section-footer'].logo.url}
              alt={data['section-footer'].logo.alt}
              className="h-10 hover:brightness-110 active:brightness-90"
            />
            <p className="min-w-max text-text-primary font-semi-bold pr-8 hover:text-primary">
              {data['section-footer'].logo.text}
            </p>
          </a>
          {data['section-header'].links.map((item, index) => (
            <div
              key={index}
              className="relative border-b-2 border-transparent hover:border-b-2 text-text-primary hover:border-primary menu-item"
            >
              {!item.isDropdown ? (
                <Link
                  to={item.href}
                  spy={false}
                  smooth={true}
                  duration={500}
                  offset={-75}
                  className="cursor-pointer"
                >
                  <div className="flex items-center">
                    <p
                      className="min-w-max text-md sm:text-[12px] lg:text-[16px] 2xl:text-[18px] w-max"
                      key={item.id}
                    >
                      {item.title}
                    </p>
                  </div>
                </Link>
              ) : (
                <div
                  className="flex items-center gap-1.5 cursor-pointer"
                  onClick={() => handleDropdownToggle(item.id)}
                >
                  <p
                    className="min-w-max text-md sm:text-[12px] lg:text-[16px] 2xl:text-[18px] w-max"
                    key={item.id}
                    id="dropdown-title"
                  >
                    {item.title}
                  </p>
                  {item.isDropdown && (
                    <img
                      id="dropdown-icon"
                      src={data['section-header']['dropdow-icon'].url}
                      alt={data['section-header']['dropdow-icon'].alt}
                      className="w-[12px] mr-2"
                      style={{
                        transform: isOpenDrop[item.id]
                          ? 'rotate(180deg)'
                          : 'rotate(0deg)',
                        transition: 'transform 0.2s ease-in-out',
                      }}
                    />
                  )}
                </div>
              )}
              {item.isDropdown && isOpenDrop[item.id] && (
                <div
                  ref={dropdownRef}
                  className="absolute top-full mt-1 bg-bg-special rounded-sm bg-opacity-[98%] left-0 z-[100] w-full min-w-max shadow-md"
                >
                  {item.items.map((option, index) => (
                    <Link
                      key={index + option.text}
                      to={option.link}
                      spy={false}
                      smooth={true}
                      duration={500}
                      offset={-78}
                      className="cursor-pointer"
                    >
                      <p
                        key={option.text + index}
                        className="truncate text-[12px] lg:text-[14px] p-2 cursor-pointer hover:bg-opacity-70 hover:bg-secondary active:text-red-custom transition duration-300"
                        onClick={() => handleDropdownToggle(item.id)}
                      >
                        {option.text}
                      </p>
                    </Link>
                  ))}
                </div>
              )}
            </div>
          ))}
          <div className="flex items-center gap-2">
            <img
              src={data['section-header']['search-bar'].icon.url}
              alt={data['section-header']['search-bar'].icon.alt}
              className="w-4 cursor-pointer"
              onClick={handleSearchIconClick}
            />
            <input
              type="text"
              value={searchInput}
              onChange={(e) => setSearchInput(e.target.value)}
              className="p-1 border-none bg-bg-special w-[15vw]"
            />
          </div>
        </div>
        <div className="hidden sm:flex items-center mx-2 space-x-6">
          <a href={data['section-header']['blog-ref']} target="_blank">
            <p className="flex items-center gap-2 text-md cursor-pointer hover:text-red-custom sm:text-[12px] lg:text-[16px] 2xl:text-[18px] w-max border-b-2 border-transparent hover:border-b-2 text-text-primary hover:border-primary menu-item">
              <img
                src={data['section-header']['blog-button-icon']}
                alt="blog icon"
                className="h-4"
              />
              {data['section-header']['blog-button']}
            </p>
          </a>
          <a onClick={handleButtonClick}>
            <p className="flex items-center gap-2 text-md cursor-pointer hover:text-red-custom sm:text-[12px] lg:text-[16px] 2xl:text-[18px] w-max border-b-2 border-transparent hover:border-b-2 text-text-primary hover:border-primary menu-item">
              <img
                src={data['section-header']['contact-icon']}
                alt="login icon"
                className="h-4"
              />
              {data['section-header'].contact}
            </p>
          </a>
        </div>
        <div className="sm:hidden w-40">
          <a href="/" className="flex items-center gap-2">
            <img
              src={data['section-footer'].logo.url}
              alt={data['section-footer'].logo.alt}
              className="h-10 hover:brightness-110 active:brightness-90"
            />
            <p className="min-w-max text-xl text-text-primary font-semi-bold mr-4 hover:text-primary">
              {data['section-footer'].logo.text}
            </p>
          </a>
        </div>
      </div>
      <button
        className="text-2xl cursor-pointer z-[99] text-text-primary flex items-center justify-center sm:hidden"
        onClick={handleIsOpen}
      >
        {isOpen ? <BsXLg /> : <BsJustify />}
      </button>
      <MenuMobile isOpen={isOpen} onClick={handleIsOpen} />
    </header>
  );
};

export default Navbar;
