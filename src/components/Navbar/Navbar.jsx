import useNav from '../../hooks/useNav';
import MenuMobile from './MenuMobile';
import data from '../../data.json';
import { BsJustify, BsXLg } from 'react-icons/bs';

const Navbar = () => {
  const { isOpen, handleIsOpen, hasScrolled } = useNav();

  return (
    <header
      className={`
    fixed z-[98] top-0 left-0 w-full
    px-5 flex justify-between items-center  
    h-[78px]  text-text-primary bg-white
   `}
    >
      <div className="flex justify-between px-4 items-center">
        <div>
          <img
            src={data['section-header']['logo-wtext'].image.url}
            alt={data['section-header']['logo-wtext'].image.alt}
          />
        </div>
        <div></div>
      </div>
      <button
        className="text-2xl cursor-pointer z-[99] text-secondary flex items-center justify-center md:hidden"
        onClick={handleIsOpen}
      >
        {isOpen ? <BsXLg /> : <BsJustify />}
      </button>
      <MenuMobile isOpen={isOpen} onClick={handleIsOpen} />
    </header>
  );
};
export default Navbar;
