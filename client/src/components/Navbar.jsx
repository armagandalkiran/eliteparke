import React from "react";
import { ReactComponent as MenuIcon } from "../svgs/menu.svg";
import { NavLink,Link } from "react-router-dom";

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
        <ul className="text-xl text-center text-customText font-bold hidden md:flex md:justify-around md:w-full md:py-5 md:px-20 items-center ">
        <NavLink to = "/hakkimizda" className="mr-4">Hakkımızda</NavLink>
        <NavLink to = "/urunler" className="mr-4">Ürünler</NavLink>
        <Link exact to = "/" className="mr-4"><h1 className="text-4xl font-extrabold uppercase">Elite Parke</h1></Link>
        <NavLink to = "/referanslar" className="mr-4">Referanslar</NavLink>
        <NavLink to = "/iletisim" className="">İletişim</NavLink>
        </ul>
      </div>
      <div className="text-center absolute bg-white w-full z-10">
      <ul className=" text-customText font-bold hidden flex flex-col" id="menu">
        <Link to="/hakkimizda" className="p-2">Hakkımızda</Link>
        <Link to="/urunler" className="p-2">Ürünler</Link>
        <Link to="/referanslar" className="p-2">Referanslar</Link>
        <Link to="/iletisim" className="p-2">İletişim</Link>
      </ul>
      </div>
    </>
  );
}
