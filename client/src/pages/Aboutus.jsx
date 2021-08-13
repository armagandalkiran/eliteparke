import React from "react";
import aboutUs from "../images/about-us.jpg";

export default function Aboutus() {
  return (
    <div className="mt-20 mb-5 p-6 md:p-14 md:mt-36 md:mb-14 flex flex-col items-center xl:flex-row md:justify-between">
      <div className="text-customText xl:w-1/2">
        <h2 className="text-center text-2xl md:text-4xl font-bold mb-3">Hakkımızda</h2>
        <p className="text-md mb-4 md:text-lg">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book.
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book.
        </p>
      </div>
      <img src={aboutUs} alt="aboutUs" className="mt-3" />
    </div>
  );
}
