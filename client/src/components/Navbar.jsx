import React from "react";
import { ReactComponent as MenuIcon } from "../svgs/menu.svg";
import { ReactComponent as CancelIcon } from "../svgs/cancel.svg";
import { NavLink, Link } from "react-router-dom";
import { useState } from "react";

export default function Navbar() {
  const [iconVisiblity, setIconVisibility] = useState(true);

  function navbarToggle() {
    const menu = document.querySelector("#menu");
    setIconVisibility(!iconVisiblity);
    if (menu.classList.contains("hidden")) {
      menu.classList.remove("hidden");
    } else {
      menu.classList.add("hidden");
    }
  }

  return (
    <>
      <div className="top-0 fixed bg-white w-full z-10">
        <div className="flex justify-between items-center  text-customText p-6 relative">
          <Link to="/">
            <h1 className="text-2xl font-extrabold md:hidden uppercase text-header">
              Elite Parke
            </h1>
          </Link>
          {iconVisiblity ? (
            <MenuIcon className="w-6 md:hidden" onClick={navbarToggle} />
          ) : (
            <CancelIcon className="w-6 md:hidden" onClick={navbarToggle} />
          )}

          <ul className="text-xl text-center text-customText font-bold hidden md:flex md:justify-around md:w-full md:py-5 md:px-20 items-center ">
            <NavLink exact to="/hakkimizda" className="mr-4">
              Hakkımızda
            </NavLink>
            <NavLink exact to="/urunler" className="mr-4">
              Ürünler
            </NavLink>
            <Link to="/" className="mr-4">
              <h1 className="text-4xl font-extrabold uppercase text-header">
                Elite Parke
              </h1>
            </Link>
            <NavLink exact to="/referanslar" className="mr-4">
              Referanslar
            </NavLink>
            <NavLink exact to="/iletisim" className="">
              İletişim
            </NavLink>
          </ul>
        </div>
        <div className="text-center absolute bg-white w-full z-10">
          <ul
            className=" text-customText font-bold hidden flex flex-col"
            id="menu"
          >
            <Link to="/hakkimizda" className="p-2" onClick={navbarToggle}>
              Hakkımızda
            </Link>
            <Link to="/urunler" className="p-2" onClick={navbarToggle}>
              Ürünler
            </Link>
            <Link to="/referanslar" className="p-2" onClick={navbarToggle}>
              Referanslar
            </Link>
            <Link to="/iletisim" className="p-2" onClick={navbarToggle}>
              İletişim
            </Link>
          </ul>
        </div>
      </div>
    </>
  );
}
