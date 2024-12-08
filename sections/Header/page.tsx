"use client";
import InstagramIcon from "../../assets/icon_instagram.svg";
import YoutubeIcon from "../../assets/icon_youtube.svg";
import { useState } from "react";
import Link from "next/link";
import { SliderText } from "../../components/SliderText";

const Header = () => {
  const [open, setOpen] = useState(false);

  const handleClick = () => {
    setOpen(!open);
  };

  const navItems = [
    { url: "#chi_siamo", title: "Chi siamo" },
    { url: "#perche-seguirci", title: "Perché seguirci" },
    { url: "#contenuti", title: "Contenuti" },
    { url: "#contatti", title: "Contatti" },
  ];

  return (
    <header className="sticky top-0 z-50">
      <div className="_nav-bar py-1 bg-black text-white">
       <SliderText/>
      </div>
      <nav>
        <div className="_nav-dsk bg-[#B1ABF4] hidden md:block">
          <div className="flex justify-between items-center container max-w-7xl">
            <h1 className="text-[1.5rem] font-asap-condens-900">Bora pro rolê</h1>
            <div className="flex font-asap-condens-700 fs-[1.5rem]">
              {navItems.map((navItem) => {
                return (
                  <Link className="px-4 py-6" key={navItem.title} href={navItem.url}>
                    {navItem.title}
                  </Link>
                );
              })}
            </div>
          </div>
        </div>
        <div className="_nav-mob flex md:hidden justify-between items-center p-4">
          <h1 className="fs-[2.25rem] font-asap-condens-900">Bora pro rolê</h1>
          <button
            onClick={handleClick}
            className={`w-10 h-10 fixed top-12 right-4 flex flex-col justify-center items-center z-20 rounded-full p-[0.65rem transition-colors duration-500 ease-in] ${
              open ? "bg-white" : "bg-black"
            }`}>
            <span
              className={`block transition-all duration-300 ease-out
                      h-[1.5px] w-[20px] rounded-md ${
                        open
                          ? "rotate-45 translate-y-1 bg-black"
                          : "bg-white -translate-y-0.5"
                      }`}></span>
            <span
              className={`block transition-all duration-300 ease-out
                      h-[1.5px] w-[20px] rounded-md my-0.5 ${
                        open ? "opacity-0" : "bg-white opacity-100"
                      }`}></span>
            <span
              className={`block transition-all duration-300 ease-out
                      h-[1.5px] rounded-md ${
                        open
                          ? "-rotate-45 -translate-y-1 w-[20px] bg-black"
                          : "bg-white translate-y-0.5 w-[16px]"
                      }`}></span>
          </button>
        </div>
      </nav>
      {open && (
        <div className="_menu-mob w-full h-dvh bg-black fixed top-0 left-0">
          <div className="flex flex-col justify-center h-full gap-6 text-white font-asap-condens-700 fs-[2.5rem] uppercase p-8">
            {navItems.map((navItem) => {
              return (
                <Link key={navItem.title} href={navItem.url}>
                  {navItem.title}
                </Link>
              );
            })}
            <div className="flex items-center gap-4">
              <InstagramIcon fill className="w-6 h-12" />
              <YoutubeIcon className="w-6 h-10" />
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
