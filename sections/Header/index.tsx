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
    { url: "#quem_somos", title: "Quem Somos" },
    { url: "#porque_seguir", title: "Porque nos seguir" },
    { url: "#videos", title: "Vídeos" },
    { url: "#contato", title: "Contato" },
  ];

  return (
    <header className="sticky top-0 z-50">
      <div className="_nav-bar py-1 bg-black text-white">
        <SliderText title={'SE INSCREVA NO CANAL'}/>
      </div>
      <nav>
        <div className="_nav-dsk bg-[#B1ABF4] hidden md:block">
          <div className="flex justify-between items-center container">
            <Link href="#top">
              <h1 className="text-[1.5rem] font-asap-condens-900">
                Bora pro rolê
              </h1>
            </Link>
            <div className="flex font-asap-condens-700 fs-[1.75rem] uppercase">
              {navItems.map((navItem) => {
                return (
                  <Link
                    className="px-4 py-6 hover:text-white transition-colors"
                    key={navItem.title}
                    href={navItem.url}>
                    {navItem.title}
                  </Link>
                );
              })}
            </div>
          </div>
        </div>
        <div className="_nav-mob bg-[#B1ABF4] flex md:hidden justify-between items-center p-4 min-h-[4.5rem]">
          <Link href="#top">
            <h1 className="text-[1.375rem] font-asap-condens-900">
              Bora pro rolê
            </h1>
          </Link>
          <button
            onClick={handleClick}
            className={`w-10 h-10 flex flex-col justify-center items-center z-20 rounded-full transition-colors duration-200 ease-in ${
              open ? "bg-white fixed top-12 right-4" : "bg-black"
            }`}>
            <div className="flex flex-col items-end">
            <span
              className={` block transition-all duration-300 ease-out 
                    h-0.5 w-6 rounded-sm ${
                      open ? "rotate-45 translate-y-1 bg-black" : " bg-white -translate-y-0.5"
                    }`}></span>
              <span
              className={` block transition-all duration-300 ease-out 
                    h-0.5 w-6 rounded-sm my-0.5 ${
                      open ? "opacity-0" : "bg-white opacity-100"
                    }`}></span>
              <span
              className={` block transition-all duration-300 ease-out 
                    h-0.5 w-4 rounded-sm ${
                      open ? "-rotate-45 -translate-y-1 bg-black w-6" : " bg-white translate-y-0.5"
                    }`}></span>
            </div>
          </button>
        </div>
      </nav>
      <div className={`_menu-mob w-full h-dvh bg-black fixed top-0 left-0 transition-all ease-in-out duration-300 ${open ? 'translate-x-0' : 'translate-x-full'}`}>
          <div className="flex flex-col justify-center h-full gap-6 text-white font-asap-condens-900 text-[40px] uppercase p-8">
            {navItems.map((navItem) => {
              return (
                <Link
                  onClick={handleClick}
                  key={navItem.title}
                  href={navItem.url}>
                  {navItem.title}
                </Link>
              );
            })}
            <div className="flex items-center gap-12 mt-16">
              <Link
                onClick={handleClick}
                href="https://www.instagram.com/boraprorolecj/"
                target="_blank">
                <InstagramIcon fill className="w-10 h-12" />
              </Link>
              <Link
                onClick={handleClick}
                href="https://www.youtube.com/@BoraproRol%C3%AA_cj"
                target="_blank">
                <YoutubeIcon className="w-10 h-12" />
              </Link>
            </div>
          </div>
        </div>
      {/* {open && (
        <div className="_menu-mob w-full h-dvh bg-black fixed top-0 left-0">
          <div className="flex flex-col justify-center h-full gap-6 text-white font-asap-condens-900 text-[40px] uppercase p-8">
            {navItems.map((navItem) => {
              return (
                <Link
                  onClick={handleClick}
                  key={navItem.title}
                  href={navItem.url}>
                  {navItem.title}
                </Link>
              );
            })}
            <div className="flex items-center gap-12 mt-16">
              <Link
                onClick={handleClick}
                href="https://www.instagram.com/boraprorolecj/"
                target="_blank">
                <InstagramIcon fill className="w-10 h-12" />
              </Link>
              <Link
                onClick={handleClick}
                href="https://www.youtube.com/@BoraproRol%C3%AA_cj"
                target="_blank">
                <YoutubeIcon className="w-10 h-12" />
              </Link>
            </div>
          </div>
        </div>
      )} */}
    </header>
  );
};

export default Header;
