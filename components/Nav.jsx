"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";

export default function Nav() {
  
  const [isClient, setIsClient] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const menuRef = useRef(null);
  const [pathname, setPathname] = useState("");

  useEffect(() => {
    setIsClient(true); // Confirme le montage côté client
    setPathname(window.location.pathname); // Définit le pathname côté client
  }, []);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const handleClickOutside = (event) => {
    if (menuRef.current && !menuRef.current.contains(event.target)) {
      setIsOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const isActive = (path) => {
    return pathname === path ? "text-red-500" : "";
  };

  if (!isClient) return null;

  return (
    <nav className="bg-white px-5 relative flex justify-around w-full items-center text-center">
      <div className="flex items-center">
        <Image
          src="/assets/logo.png"
          alt="logo"
          width={1000}
          height={1000}
          className="w-[60px] md:w-[150px] my-2 h-auto"
        />
      </div>
      <div className="relative flex justify-end w-full" ref={menuRef}>
        <button
          onClick={toggleMenu}
          type="button"
          className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
          aria-controls="navbar-default"
          aria-expanded={isOpen}
        >
          <span className="sr-only">Ouvrir le menu principal</span>
          <svg
            className="w-5 h-5"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 17 14"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M1 1h15M1 7h15M1 13h15"
            />
          </svg>
        </button>
        
        {isOpen && (
          <div className="items-center flex justify-center w-full mt-[50px] absolute z-10 text-center">
            <div className="flex-auto overflow-hidden rounded-3xl bg-white text-sm leading-6 shadow-lg ring-1 ring-gray-900/5">
              <div className="px-2">
                <ul className="flex flex-col mt-4 font-medium lg:flex-row lg:space-x-8 lg:mt-0 group relative gap-y-4 py-4 hover:bg-gray-50">
                  <li>
                    <Link
                      href="/"
                      className={`md:text-lg text-black hover:text-red-500 transition-all ease-in-out ${isActive("/")}`}
                    >
                      Accueil
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/menu"
                      className={`md:text-lg text-black hover:text-red-500 transition-all ease-in-out ${isActive("/menu")}`}
                    >
                      Menu
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/about"
                      className={`md:text-lg text-black hover:text-red-500 transition-all ease-in-out ${isActive("/about")}`}
                    >
                      À propos
                    </Link>
                  </li>
                  <Link href="#form">
                    <button className="font-semibold text-[11px] rounded-full hover:bg-red-600 border border-red-600 py-1 px-4 hover:text-white text-red-600">
                      Réserver
                    </button>
                  </Link>
                </ul>
              </div>
            </div>
          </div>
        )}
      </div>

      <div className="md:flex items-center w-full justify-between p-2 hidden text-center gap-[50px] ">
        <div className="flex md:justify-around items-center w-full gap-[30px]">
          <a
            href="/"
            className={`md:text-base text-black relative hover:text-red-500 cursor-pointer transition-all ease-in-out 
                before:transition-[width] before:ease-in-out before:duration-700 before:absolute before:bg-yellow-400 
                before:origin-center before:h-[1px] before:w-0 hover:before:w-[50%] before:bottom-0 before:left-[50%] 
                after:transition-[width] after:ease-in-out after:duration-700 after:absolute after:bg-yellow-400 
                after:origin-center after:h-[1px] after:w-0 hover:after:w-[50%] after:bottom-0 after:right-[50%]
                ${isActive("/")}`}
          >
            Accueil
          </a>
          <a
            href="/menu"
            className={`md:text-base text-black relative hover:text-red-500 cursor-pointer transition-all ease-in-out 
                before:transition-[width] before:ease-in-out before:duration-700 before:absolute before:bg-yellow-400 
                before:origin-center before:h-[1px] before:w-0 hover:before:w-[50%] before:bottom-0 before:left-[50%] 
                after:transition-[width] after:ease-in-out after:duration-700 after:absolute after:bg-yellow-400 
                after:origin-center after:h-[1px] after:w-0 hover:after:w-[50%] after:bottom-0 after:right-[50%]
                ${isActive("/menu")}`}
          >
            Menu
          </a>

          <a
            href="/about"
            className={`md:text-base w-[70px] text-black relative hover:text-red-500 cursor-pointer transition-all ease-in-out 
                before:transition-[width] before:ease-in-out before:duration-700 before:absolute before:bg-yellow-400 
                before:origin-center before:h-[1px] before:w-0 hover:before:w-[50%] before:bottom-0 before:left-[50%] 
                after:transition-[width] after:ease-in-out after:duration-700 after:absolute after:bg-yellow-400 
                after:origin-center after:h-[1px] after:w-0 hover:after:w-[50%] after:bottom-0 after:right-[50%]
                ${isActive("/about")}`}
          >
            À propos
          </a>
        </div>
        <button className="font-semibold text-sm lg:text-base rounded-full hover:bg-red-600 border border-red-600 py-1 px-4 hover:text-white text-red-600">
          <Link href="#form">Réserver</Link>
        </button>
      </div>
    </nav>
  );
}
