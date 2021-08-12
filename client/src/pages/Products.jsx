import React from "react";
import { ReactComponent as DiamondIcon } from "../svgs/diamond.svg";
import { ReactComponent as ArrowIcon } from "../svgs/arrow.svg";
import productsdoors from "../images/products-doors.jpg";
import productslaminant from "../images/products-laminant.jpg";
import productslamine from "../images/products-lamine.jpg";
import productsskirts from "../images/products-skirts.jpg";

export default function Products() {
  return (
    <div>
      <div className="product-main__image bg-cover mt-28 md:mt-36 bg-center h-auto mb-8 md:mb-24 mx-4 text-white object-fill py-10 px-3 md:py-24 md:px-10 flex flex-col items-center">
        <DiamondIcon className="w-10 h-10 mb-4 md:w-20 md:h-20" />
        <h2 className="font-bold text-xl md:text-3xl lg:text-5xl">Ürün Gruplarımız</h2>
      </div>
      <div className="grid grid-rows-3 mx-4 gap-4 md:grid-cols-3 md:grid-rows-1 mb-12">
        <div className="row relative md:col-span-1 flex items-center justify-center">
          <div className="absolute-center__text">
            <div className="flex flex-col items-center">
              <h3 className="text-white text-center mb-4 text-2xl md:text-xl lg:text-4xl font-bold">
                Kapılar
              </h3>
              <ArrowIcon className="w-12"/>
            </div>
          </div>
          <img className="w-30" src={productsdoors} alt="kapilar" />
        </div>
        <div className="flex flex-col items-center justify-between">
          <div className="row row-span-1 relative mb-4 flex items-center justify-center">
            <div className="absolute-center__text">
              <div className="flex flex-col items-center">
                <h3 className="text-white text-center mb-4 text-2xl md:text-xl lg:text-4xl font-bold">
                  Laminantlar
                </h3>
                <ArrowIcon className="w-12"/>
              </div>
            </div>
            <img className="" src={productslaminant} alt="laminantlar" />
          </div>
          <div className="row relative row-span-1 flex items-center justify-center">
            <div className="absolute-center__text">
              <div className="flex flex-col items-center">
                <h3 className="text-white text-center mb-4 text-2xl md:text-xl lg:text-4xl font-bold">
                  Süpürgelikler
                </h3>
                <ArrowIcon className="w-12"/>
              </div>
            </div>
            <img className="" src={productsskirts} alt="supurgelik" />
          </div>
        </div>
        <div className="row relative md:col-span-1 flex items-center justify-center">
          <div className="absolute-center__text">
            <div className="flex flex-col items-center">
              <h3 className="text-white text-center mb-4 text-2xl md:text-xl lg:text-4xl font-bold">
                Lamineler
              </h3>
              <ArrowIcon className="w-12"/>
            </div>
          </div>
          <img className="" src={productslamine} alt="lamineler" />
        </div>
      </div>
    </div>
  );
}
