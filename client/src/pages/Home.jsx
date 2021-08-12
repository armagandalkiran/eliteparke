import React from "react";
import homeLaminant from "../images/home-laminant.png";
import homeDoors from "../images/home-doors.png";
import homeSkirts from "../images/products-skirts.png";
import homeLamine from "../images/home-lamine.png";

export default function Home() {
  return (
    <div>
      {/* Header */}
      <div className="sliderAx h-auto p-2">
        <div id="slider-1" className="container mx-auto">
          <div className="bg-cover bg-center  h-auto text-white  py-10 px-3 md:py-24 md:px-10 object-fill image1">
            <div className="flex flex-col w-1/2 items-center text-center">
              <h2 className="text-customText font-extrabold text-sm mb-2 md:mb-6 md:text-4xl">
                Elite Parke ile konfor evinizde!
              </h2>
              <a
                href="/iletisim"
                className=" border border-black text-customText font-medium text-xs md:text-l md:py-2 md:px-4 py-1 px-2 rounded hover:bg-primary hover:text-white"
              >
                İLETİŞİME GEÇİN
              </a>
            </div>
          </div>
          <br />
        </div>

        <div id="slider-2" className="container mx-auto hidden">
          <div className="bg-cover bg-center  h-auto text-white  py-10 px-3 md:py-24 md:px-10 object-fill image2">
            <div className="flex flex-col w-1/2 items-center text-center">
              <h2 className="text-customText font-extrabold text-sm mb-2 md:mb-6 md:text-4xl">
                Elite Parke ile kalite evinizde!
              </h2>
              <a
                href="/iletisim"
                className=" border border-black text-customText font-medium text-xs md:text-l md:py-2 md:px-4 py-1 px-2 rounded hover:bg-primary hover:text-white"
              >
                İLETİŞİME GEÇİN
              </a>
            </div>
          </div>
          <br />
        </div>
      </div>
      {/* Header end */}

      {/* Main */}
      <div className="grid grid-flow-row gap-y-4 px-10 md:px-28 md:mt-20 text-customText md:grid-cols-2 md:gap-20">
        <div className="home-card row relative md:col-span-1 cursor-pointer">
          <h4 className="absolute bg-white bg-opacity-90 p-2 right-0 font-extrabold rounded-bl-lg md:p-3 md:text-lg lg:p-4 lg:text-xl xl:text-2xl">
            Laminant
          </h4>
          <img
            src={homeLaminant}
            alt="laminant"
            className="w-full home-image"
          />
          <div className="absoluteCenter text-white text-center hidden card-text">
            <h3 className="text-sm md:text-xl mb-4 font-bold">
              "Elite parke güvencesiyle evleriniz çelik kapılar ardında güvende"
            </h3>
            <a
              className="bg-primary py-1.5 px-3 md:py-2 md:px-4 rounded text-sm md:text-lg"
              href="/ürünler"
            >
              Detay
            </a>
          </div>
        </div>
        <div className="home-card row relative md:col-span-1 cursor-pointer">
          <h4 className="absolute bg-white bg-opacity-90 p-2 right-0 font-extrabold rounded-bl-lg md:p-3 md:text-lg lg:p-4 lg:text-xl xl:text-2xl">
            Kapılar
          </h4>
          <img src={homeDoors} alt="doors" className="home-image" />
          <div className="absoluteCenter text-white text-center hidden card-text">
            <h3 className="text-sm md:text-xl mb-4 font-bold">
              "Elite parke güvencesiyle evleriniz çelik kapılar ardında güvende"
            </h3>
            <a
              className="bg-primary py-1.5 px-3 md:py-2 md:px-4 rounded text-sm md:text-lg"
              href="/ürünler"
            >
              Detay
            </a>
          </div>
        </div>
        <div className="home-card row relative md:col-span-1 cursor-pointer">
          <h4 className="absolute bg-white bg-opacity-90 p-2 right-0 font-extrabold rounded-bl-lg md:p-3 md:text-lg lg:p-4 lg:text-xl xl:text-2xl">
            Süpürgelik
          </h4>
          <img src={homeSkirts} alt="skirts" className="w-full home-image" />
          <div className="absoluteCenter text-white text-center hidden card-text">
            <h3 className="text-sm md:text-xl mb-4 font-bold">
              "Elite parke güvencesiyle evleriniz çelik kapılar ardında güvende"
            </h3>
            <a
              className="bg-primary py-1.5 px-3 md:py-2 md:px-4 rounded text-sm md:text-lg"
              href="/ürünler"
            >
              Detay
            </a>
          </div>
        </div>
        <div className="home-card row relative mb-10 md:col-span-1 cursor-pointer">
          <h4 className="absolute bg-white bg-opacity-90 p-2 right-0 font-extrabold rounded-bl-lg md:p-3 md:text-lg lg:p-4 lg:text-xl xl:text-2xl">
            Lamine
          </h4>
          <img src={homeLamine} alt="lamine" className="w-full home-image" />
          <div className="absoluteCenter text-white text-center hidden card-text">
            <h3 className="text-sm md:text-xl mb-4 font-bold">
              "Elite parke güvencesiyle evleriniz çelik kapılar ardında güvende"
            </h3>
            <a
              className="bg-primary py-1.5 px-3 md:py-2 md:px-4 rounded text-sm md:text-lg"
              href="/ürünler"
            >
              Detay
            </a>
          </div>
        </div>
      </div>
      {/* Main end */}
    </div>
  );
}
