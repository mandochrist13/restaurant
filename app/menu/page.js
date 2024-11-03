"use client"

import {Plat} from "../data/plat";
import {Drink} from "../data/drink";
import {Dessert} from "../data/dessert";
import Image from "next/image";
import Mets from "../../components/Mets";
import Section4 from "@/components/section4";
import { useEffect, useState } from 'react';
import Preloader from '@/components/Preloader';

export default function Page() {

  const [activeSection, setActiveSection] = useState('burgers');

  const handleSectionClick = (section) => {
    setActiveSection(section);
  };

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Définir un délai pour simuler le chargement de la page, puis désactiver le loader
    const timer = setTimeout(() => setLoading(false), 2000); // Exemple de 2 secondes

    // Nettoyer le timer en cas de démontage
    return () => clearTimeout(timer);
  }, []);


  return (
    
    
    <section
      style={{ backgroundImage: "url(/assets/bgm.png)" }}
      className="space-y-15 flex flex-col w-full items-center justify-center bg-cover bg-center "
    >{loading && <Preloader />}
      <div style={{ display: loading ? 'none' : 'flex' }} className="flex flex-col justify-center w-full items-center">
        <Image
          src="/assets/fourche.png"
          alt="food"
          width={1000}
          height={1000}
          className="w-[40%] rounded-lg object-cover"
        />
        <h1 className="text-[#DC2626] text-5xl md:text-7xl font-bold">
          Menu
        </h1>
      </div>
      {/* <Mets
        image={"/assets/plat3.png"}
        text1={""}
        text2={""}
        text3={""}
      />
      <div classNameName="space-y-5 ">
        <div classNameName="md:flex md:flex-row-reverse justify-between items-center">
          <div classNameName=" md:w-[50%]">
            <Image
              src="/assets/plat2.png"
              width={650}
              height={650}
              alt="img"
              classNameName="rounded-xl h-auto w-full"
            />
          </div>
          <div classNameName="flex-col space-y-4 px-3 md:px-0 justify-center items-center ">
            <p classNameName="md:text-[10px] rounded-xl md:rounded-r-xl md:rounded-none p-3 text-center bg-[#DC2626] lg:text-[18px] text-white">
              Le concombre à la sardine fumé
            </p>
            <p classNameName="md:text-[10px] rounded-xl md:rounded-r-xl md:rounded-none p-3 text-center bg-[#DC2626] lg:text-[18px] text-white">
              Le paquet d&apos;eau douce
            </p>
            <p classNameName="md:text-[10px] rounded-xl md:rounded-r-xl md:rounded-none p-3 text-center bg-[#DC2626] lg:text-[18px] text-white">
              Le Nkumu Royal
            </p>
          </div>
        </div>
        <div classNameName="bg-[#DC2626] w-[70%] rounded-r-md p-2"></div>
      </div>
      <Mets
        image={"/assets/plat1.png"}
        text1={"La sauce d'arachide"}
        text2={"L'oseil à la banane pilé"}
        text3={"Poisson salé"}
      /> */}
      
      <div className="menu relative py-11">
        {/* Menu Tabs Navigation */}
        <div className="menu-tab relative">
          <ul className="nav nav-pills flex justify-center gap-2">
            <li>
            <button
              onClick={() => handleSectionClick('burgers')}
              className={`nav-link text-white ${
                activeSection === 'burgers' ? 'bg-[#DC2626]' : 'bg-yellow-500'
              } rounded-md py-2 px-4 hover:bg-[#DC2626]`}
            >
              Plat
            </button>
            </li>
            <li>
            <button
              onClick={() => handleSectionClick('snacks')}
              className={`nav-link text-white ${
                activeSection === 'snacks' ? 'bg-[#DC2626]' : 'bg-yellow-500'
              } rounded-md py-2 px-4 hover:bg-[#DC2626]`}
            >
              Coktail
            </button>
            </li>
            <li>
            <button
              onClick={() => handleSectionClick('beverages')}
              className={`nav-link text-white ${
                activeSection === 'beverages' ? 'bg-[#DC2626]' : 'bg-yellow-500'
              } rounded-md py-2 px-4 hover:bg-[#DC2626]`}
            >
              Dessert
            </button>
            </li>
            <li>
            <button
              onClick={() => handleSectionClick('coffee')}
              className={`nav-link text-white ${
                activeSection === 'beverages' ? 'bg-[#DC2626]' : 'bg-yellow-500'
              } rounded-md py-2 px-4 hover:bg-[#DC2626]`}
            >
              Petit déjeuner
            </button>
            </li>
          </ul>
        </div>

        {/* Menu Tabs Content */}
        <div className="menu-tab tab-content pt-8">
          {/* Burgers Tab Content */}
          {activeSection === 'burgers' && (
          <div
            
            className="justify-center items-center flex flex-col md:flex-row gap-8"
          >
            {/* Menu Items Column */}
            <div className="space-y-8 px-5">
            {Plat.map((tab) => (
              <div key={tab.id} className=" flex flex-col md:flex-row items-center gap-5">
                <div className="menu-img w-20">
                  <Image
                    src={tab.photo}
                    width={140}
                    height={140}
                    alt="Mini Cheese Burger"
                    className="w-full rounded-full"
                  />
                </div>
                <div className="w-full">
                  <h3 className="text-sm md:text-xl font-bold relative">
                    <span className="inline-block pr-1 text-black bg-white relative z-10">
                     {tab.titre}
                    </span>
                    <strong className="inline-block pl-1 float-right text-yellow-500 bg-white relative z-10">
                      {tab.prix}
                    </strong>
                    <span className="absolute top-3 left-0 w-full border-t-2 border-dotted border-black z-0"></span>
                  </h3>
                  <p className="text-sm md:text-xl mt-1 text-black text-left">
                    Lorem ipsum dolor sit amet elit. Phasel nec preti facil
                  </p>
                </div>
              </div>))}

              
            </div>

            {/* Menu Image Column */}
            <div className="hidden rounded-md lg:flex w-[30%]">
              <Image
                src="/assets/menu-burger-img.jpg"
                width={1000}
                height={1000}
                alt="Mini Cheese Burger"
                className="w-full rounded-md"
              />
            </div>
          </div>
 )}
          {/* Snacks Tab Content */}
          {activeSection === 'snacks' && (
          <div
            
            className="justify-center items-center flex flex-col md:flex-row gap-8 "
          >
            {/* Menu Items Column */}
            <div className="space-y-8 px-5">
            {Drink.map((tab) => (
              <div key={tab.id} className=" flex flex-col md:flex-row items-center gap-5">
                <div className="menu-img w-20">
                  <Image
                    src={tab.photo}
                    width={140}
                    height={140}
                    alt="Mini Cheese Burger"
                    className="w-full rounded-full"
                  />
                </div>
                <div className="w-full">
                  <h3 className="text-sm md:text-xl font-bold relative">
                    <span className="inline-block pr-1 text-black bg-white relative z-10">
                     {tab.titre}
                    </span>
                    <strong className="inline-block pl-1 float-right text-yellow-500 bg-white relative z-10">
                      {tab.prix}
                    </strong>
                    <span className="absolute top-3 left-0 w-full border-t-2 border-dotted border-black z-0"></span>
                  </h3>
                  <p className="text-sm md:text-xl mt-1 text-black text-left">
                    Lorem ipsum dolor sit amet elit. Phasel nec preti facil
                  </p>
                </div>
              </div>))}

              
            </div>

            {/* Image Column for Snacks */}
            <div className="hidden lg:flex">
              <Image
                src="/assets/menu-snack-img.jpg"
                width={1000}
                height={1000}
                alt="Mini Cheese Burger"
                className="w-full rounded-full"
              />
            </div>
          </div>
)}
          {/* Beverages Tab Content */}
          {activeSection === 'beverages' && (
             <div
            
            className="justify-center items-center flex flex-col md:flex-row gap-8 "
          >
            {/*  Menu Items Column  */}
            <div className="space-y-8 px-5">
            {Dessert.map((tab) => (
              <div key={tab.id} className=" flex flex-col md:flex-row items-center gap-5">
                <div className="menu-img w-20">
                  <Image
                    src={tab.photo}
                    width={140}
                    height={140}
                    alt="Mini Cheese Burger"
                    className="w-full rounded-full"
                  />
                </div>
                <div className="w-full">
                  <h3 className="text-sm md:text-xl font-bold relative">
                    <span className="inline-block pr-1 text-black bg-white relative z-10">
                     {tab.titre}
                    </span>
                    <strong className="inline-block pl-1 float-right text-yellow-500 bg-white relative z-10">
                      {tab.prix}
                    </strong>
                    <span className="absolute top-3 left-0 w-full border-t-2 border-dotted border-black z-0"></span>
                  </h3>
                  <p className="text-sm md:text-xl mt-1 text-black text-left">
                    Lorem ipsum dolor sit amet elit. Phasel nec preti facil
                  </p>
                </div>
              </div>))}

              
            </div>

            {/* Image Column for Beverages */}
            <div className="hidden lg:flex">
              <Image
                src="/assets/menu-beverage-img.jpg"
                width={1000}
                height={1000}
                alt="Mini Cheese Burger"
                className="w-full rounded-full"
              />
            </div>
          </div>
           )}

{activeSection === 'coffee' && (
             <div
            
            className="justify-center items-center flex flex-col md:flex-row gap-8 "
          >
            {/*  Menu Items Column  */}
            <div className="space-y-8 px-5">
            {Dessert.map((tab) => (
              <div key={tab.id} className=" flex flex-col md:flex-row items-center gap-5">
                <div className="menu-img w-20">
                  <Image
                    src={tab.photo}
                    width={140}
                    height={140}
                    alt="Mini Cheese Burger"
                    className="w-full rounded-full"
                  />
                </div>
                <div className="w-full">
                  <h3 className="text-sm md:text-xl font-bold relative">
                    <span className="inline-block pr-1 text-black bg-white relative z-10">
                     {tab.titre}
                    </span>
                    <strong className="inline-block pl-1 float-right text-yellow-500 bg-white relative z-10">
                      {tab.prix}
                    </strong>
                    <span className="absolute top-3 left-0 w-full border-t-2 border-dotted border-black z-0"></span>
                  </h3>
                  <p className="text-sm md:text-xl mt-1 text-black text-left">
                    Lorem ipsum dolor sit amet elit. Phasel nec preti facil
                  </p>
                </div>
              </div>))}

              
            </div>

            {/* Image Column for Beverages */}
            <div className="hidden lg:flex">
              <Image
                src="/assets/menu-beverage-img.jpg"
                width={1000}
                height={1000}
                alt="Mini Cheese Burger"
                className="w-full rounded-full"
              />
            </div>
          </div>
           )}
        </div>
      </div>
      
      <Section4 />
    </section>
    
  );
}
