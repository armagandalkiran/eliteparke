import React from "react";
import { ReactComponent as PinIcon } from "../svgs/pin.svg";
import { ReactComponent as PhoneIcon } from "../svgs/phone-call.svg";
import { ReactComponent as MailIcon } from "../svgs/mail.svg";

export default function Footer() {
  return (
    <footer className="bg-primary flex items-center justify-evenly flex-col text-center text-white">
      <div className="py-4">
        <h3 className="text-xl font-bold mb-3 md:text-5xl mb-5 font-extrabold">
          Elite Parke
        </h3>
        <div className="grid grid-rows-3 gap-4">
          <div className="row grid grid-cols-3 gap-4">
            <div className="col-span-1 flex items-center justify-center">
              <PinIcon className="w-6 h-6 md:w-8 h-8" />
            </div>
            <div className="col-span-2 text-left text-xs md:max-w-xs md:text-base lg:text-lg">
              Armutalan, Namık Kemal Cd. No: 1A Bina No: 609148325, {" "}
              <span className="block md:inline-block">
                48700 Marmaris/Muğla
              </span>
            </div>
          </div>
          <div className="row grid grid-cols-3 gap-4">
            <div className="col-span-1 flex items-center justify-center">
              <PhoneIcon className="w-6 h-6 md:w-8 h-8" />
            </div>
            <div className="col-span-2 flex items-center justify-start text-xs md:text-base lg:text-lg">
              +90 (252) 412 08 09
            </div>
          </div>
          <div className="row grid grid-cols-3 gap-4">
            <div className="col-span-1 flex items-center justify-center">
              <MailIcon className="w-6 h-6 md:w-8 h-8" />
            </div>
            <div className="col-span-2 flex items-center justify-start text-xs md:text-base lg:text-lg">
              marmarisparke@hotmail.com
            </div>
          </div>
        </div>
      </div>
      <h2 className="bg-secondary w-full py-1 md:text-lg">
        © 2021 ELITE PARKE TÜM HAKLARI SAKLIDIR
      </h2>
    </footer>
  );
}
