import { useState } from 'react';
import data from '../../data.json';

function Prices() {
  const [check, setCheck] = useState(true);

  const handleToggle = () => {
    setCheck(!check);
  };

  return (
    <section id="price">
      <div className="flex flex-col items-center py-20 text-text-primary">
        <p className="font-bold text-3xl text-center">
          {data['section-price'].title}
        </p>
        <p className="text-md text-[#858B91] mt-4">
          {data['section-price'].subtitle}
        </p>
        <div className="mt-12 flex items-center justify-center gap-4">
          <p className="font-semibold">{data['section-price'].option1}</p>
          <input
            type="checkbox"
            className="toggle [--tglbg:orange] bg-white hover:bg-secondary border-primary"
            checked={check}
            onClick={handleToggle}
          />
          <p className="font-semibold">{data['section-price'].option2}</p>
        </div>
        <div className="flex flex-col sm:flex-row items-start justify-center gap-4">
          {/* CARD  1 */}
          <div className="flex flex-col py-8 px-4 shadow-xl justify-center items-start rounded-lg sm:w-[42%]">
            <p className="font-bold">{data['section-price'].card1.title}</p>
            <p className="font-semi-bold text-primary">
              {data['section-price'].card1.price}
            </p>
            <p className="text-xs my-4">
              {data['section-price'].card1.subtitle}
            </p>
            <hr className="bg-[#E0E2E4] w-full mb-4" />
            <div className="flex flex-col w-full space-y-3">
              <div className="flex items-center gap-2">
                <img
                  src={data['section-price']['check-icon'].url}
                  alt={data['section-price']['check-icon'].alt}
                  className="w-4"
                />
                <p className="text-xs">{data['section-price'].card1.item1}</p>
              </div>
              <div className="flex items-center gap-2">
                <img
                  src={data['section-price']['check-icon'].url}
                  alt={data['section-price']['check-icon'].alt}
                  className="w-4"
                />
                <p className="text-xs">{data['section-price'].card1.item2}</p>
              </div>
              <div className="flex items-center gap-2">
                <img
                  src={data['section-price']['check-icon'].url}
                  alt={data['section-price']['check-icon'].alt}
                  className="w-4"
                />
                <p className="text-xs">{data['section-price'].card1.item3}</p>
              </div>
              <div className="flex items-center gap-2">
                <img
                  src={data['section-price']['none-icon'].url}
                  alt={data['section-price']['none-icon'].alt}
                  className="w-4"
                />
                <p className="text-xs">{data['section-price'].card1.item4}</p>
              </div>
            </div>
            <hr className="bg-[#E0E2E4] w-full my-4" />
            <button className="text-xs px-4 py-2 w-max bg-secondary text-primary rounded-md hover:brightness-105 active:brightness-95 transition-all">
              {data['section-price'].card1.button}
            </button>
          </div>
          {/* CARD  2 */}
          <div className="flex flex-col py-8 px-4 shadow-xl justify-center items-start rounded-lg sm:w-[42%]">
            <p className="font-bold">{data['section-price'].card2.title}</p>
            <p className="font-semi-bold text-primary">
              {data['section-price'].card2.price}
            </p>
            <p className="text-xs my-4">
              {data['section-price'].card2.subtitle}
            </p>
            <hr className="bg-[#E0E2E4] w-full mb-4" />
            <div className="flex flex-col w-full space-y-3">
              <div className="flex items-center gap-2">
                <img
                  src={data['section-price']['check-icon'].url}
                  alt={data['section-price']['check-icon'].alt}
                  className="w-4"
                />
                <p className="text-xs">{data['section-price'].card2.item1}</p>
              </div>
              <div className="flex items-center gap-2">
                <img
                  src={data['section-price']['check-icon'].url}
                  alt={data['section-price']['check-icon'].alt}
                  className="w-4"
                />
                <p className="text-xs">{data['section-price'].card2.item2}</p>
              </div>
              <div className="flex items-center gap-2">
                <img
                  src={data['section-price']['check-icon'].url}
                  alt={data['section-price']['check-icon'].alt}
                  className="w-4"
                />
                <p className="text-xs">{data['section-price'].card2.item3}</p>
              </div>
              <div className="flex items-center gap-2">
                <img
                  src={data['section-price']['check-icon'].url}
                  alt={data['section-price']['check-icon'].alt}
                  className="w-4"
                />
                <p className="text-xs">{data['section-price'].card2.item4}</p>
              </div>
            </div>
            <hr className="bg-[#E0E2E4] w-full my-4" />
            <button className="text-xs px-4 py-2 w-max text-white bg-primary rounded-md hover:brightness-105 active:brightness-95 transition-all">
              {data['section-price'].card2.button}
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
export default Prices;
