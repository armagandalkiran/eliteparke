import React from "react";
import { ReactComponent as LocationIcon } from "../svgs/pin-contact.svg";
import { ReactComponent as PhoneIcon } from "../svgs/phone-call-contact.svg";
import { ReactComponent as MailIcon } from "../svgs/mail-contact.svg";

export default function Contact() {
  return (
    <div className="mt-28 p-4 md:p-20">
      <div className="flex flex-col text-customText gap-y-4 md:gap-y-10">
        <h1 className="text-4xl font-extrabold">İLETİŞİM</h1>
        <iframe
          title="Location"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3192.4753630129203!2d28.264659315291475!3d36.855038979937284!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14bfbd1ce69b89f5%3A0xf786dc84d84a72c3!2sElite%20Parke!5e0!3m2!1str!2str!4v1628852052290!5m2!1str!2str"
          className="w-full border border-gray-400"
          height="450"
          loading="lazy"
        ></iframe>
        {/* <div className="flex flex-col md:flex-row md:text-lg items-center text-center justify-around gap-y-4">
          <div className="flex gap-x-7 p-4">
            <LocationIcon />
            <p className="text-sm md:text-lg">
              Kemeraltı Mah Org.Mustafa Muğlalı Cad No:21/1 48700 Marmaris/Muğla
            </p>
          </div>

          <div className="flex gap-x-7 p-4">
            <PhoneIcon />
            <p>+90 (555) 555 55 55</p>
          </div>

          <div className="flex gap-x-7 p-4">
            <MailIcon />
            <p>deneme@hotmail.com</p>
          </div>
        </div> */}
        <div className="grid grid-rows-3 gap-y-4">
          {/* Location */}
          <div className="row grid grid-flow-col md:grid-cols-3 ">
            <div className="col-span-1 flex items-center justify-center">
              <LocationIcon className="w-6 md:w-8" />
            </div>
            <div className="col-span-2 flex items-center text-center ">
              <div className="text-xs md:max-w-xs md:text-base lg:text-lg  border-r-2">
                Kemeraltı Mah Org. Mustafa Muğlalı Cad No:21/1 48700
                Marmaris/Muğla
              </div>
              <div className="md:ml-3 text-xs md:max-w-xs md:text-base lg:text-lg">
                İskele Mah. Kazım Yılmaz Blv. No: 59/A Datça/Muğla
              </div>
            </div>
          </div>

          {/* Phone */}
          <div className="row grid grid-flow-col md:grid-cols-3 ">
            <div className="col-span-1 flex items-center justify-center">
              <PhoneIcon className="w-6 md:w-8" />
            </div>
            <div className="col-span-2 flex items-center justify-evenly md:justify-start">
              <div className="pr-3 text-xs md:max-w-xs md:text-base lg:text-lg  border-r-2">
                +90 (555) 555 55 55
              </div>
              <div className="md:ml-3 text-xs md:max-w-xs md:text-base lg:text-lg">
                +90 (555) 555 55 55
              </div>
            </div>
          </div>

          {/* Mail */}
          <div className="row grid grid-flow-col md:grid-cols-3 ">
            <div className="col-span-1 flex items-center justify-center">
              <MailIcon className="w-6 md:w-8" />
            </div>
            <div className="col-span-2 flex items-center justify-center  md:justify-start text-sm md:text-base lg:text-lg">
              deneme@hotmail.com
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
