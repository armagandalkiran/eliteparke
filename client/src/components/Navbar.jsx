import React from "react";
import { ReactComponent as MenuIcon } from "../svgs/menu.svg";

export default function Navbar() {

  function navbarToggle(){
    const menu = document.querySelector("#menu");
    if (menu.classList.contains("hidden")) {
        menu.classList.remove("hidden");
      } else {
        menu.classList.add("hidden");
      }
  }

  return (
    <>
      <div className="flex justify-between items-center  text-customText p-6 relative">
        <h1 className="text-2xl font-extrabold md:hidden uppercase">Elite Parke</h1>
        <MenuIcon className="w-6 md:hidden" onClick={navbarToggle}/>
        <ul className=" text-customText font-bold hidden md:flex md:justify-around md:w-full md:py-5 md:px-20 items-center ">
        <li className="">Hakkımızda</li>
        <li className="">Ürünler</li>
        <li className=""><h1 className="text-2xl font-extrabold uppercase">Elite Parke</h1></li>
        <li className="">Referanslar</li>
        <li className="">İletişim</li>
      </ul>
      </div>
      <div className="text-center absolute bg-white w-full z-10">
      <ul className=" text-customText font-bold hidden" id="menu">
        <li className="p-2">Hakkımızda</li>
        <li className="p-2">Ürünler</li>
        <li className="p-2">Referanslar</li>
        <li className="p-2">İletişim</li>
      </ul>
      </div>
    </>
  );
}
