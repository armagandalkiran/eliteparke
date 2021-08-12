import React from "react";

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
                href="#"
                className=" border border-black text-customText font-medium text-xs md:text-l md:p-3 p-1 rounded hover:bg-primary hover:text-white"
              >
                İLETİŞİME GEÇİN
              </a>
            </div>
          </div>
          <br />
        </div>

        <div id="slider-2" className="container mx-auto">
        <div className="bg-cover bg-center  h-auto text-white  py-10 px-3 md:py-24 md:px-10 object-fill image2">
            <div className="flex flex-col w-1/2 items-center text-center">
              <h2 className="text-customText font-extrabold text-sm mb-2 md:mb-6 md:text-4xl">
              Elite Parke ile kalite evinizde!
              </h2>
              <a
                href="#"
                className=" border border-black text-customText font-medium text-xs md:text-l md:p-3 p-1 rounded hover:bg-primary hover:text-white"
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
      <div className="grid">
        <div></div>

      </div>
      {/* Main end */}
    </div>
  );
}
