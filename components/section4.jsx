"use client";

import React from "react";
import { Input } from "@nextui-org/react";
import {
  Dropdown,
  DropdownTrigger,
  DropdownMenu,
  DropdownItem,
  Button,
} from "@nextui-org/react";
import { Field } from "@headlessui/react";

export default function Section4() {
  const [selectedKeys, setSelectedKeys] = React.useState(new Set(["text"]));

  const selectedValue = React.useMemo(
    () => Array.from(selectedKeys).join(", ").replaceAll("_", " "),
    [selectedKeys]
  );

  return (
    <section
      style={{ backgroundImage: "url(/assets/plat.png)" }}
      className="bg-black space-y-8 bg-cover bg-center bg-blend-overlay bg-opacity-70 flex flex-col justify-center items-center mt-20 px-5 py-10 md:px-20 lg:py-20 "
    >
      <h1
        id="form"
        className="text-xl md:text-4xl font-bold px-5 lg:w-[75%]  md:px-15 text-center"
      >
        Êtes-vous prêt à commander votre meilleur plat?
      </h1>
      <div className="w-full max-w-[600px] rounded-lg bg-gradient-to-r from-amber-400 to-amber-200 px-4 lg:px-8">
        {/* <div
          aria-hidden="true"
          className="absolute inset-x-0 top-[-10rem] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[-20rem]"
        >
          <div
            style={{
              clipPath:
                "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
            }}
            className="relative left-1/2 -z-10 aspect-[1155/678] w-[36.125rem] max-w-none -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%-40rem)] sm:w-[72.1875rem]"
          />
        </div> */}
        {/* <div className="bg-white rounded-b-lg p-2 md:mx-[15%] text-center">
          <h2 className="text-balance  text-2xl md:text-4xl font-semibold tracking-tight text-black">
            FORMULAIRE DE RESERVATION
          </h2>
          
        </div> */}
        <div
          className="py-10"
          style={{
            backgroundImage: "url('/assets/img/gallery/section_bg04.png')",
          }}
        >
          <div className="container mx-auto">
            <div className="flex justify-center">
              <div className="w-full">
                <form action="#">
                  <div className=" flex flex-col md:grid md:grid-cols-2 gap-5 justify-between items-center">
                    <div className="w-full mb-7 flex-1 mx-2">
                      <div className="boking-datepicker">
                        <input
                          id="datepicker1"
                          placeholder="Nom"
                          type="text"
                          className="border text-black rounded w-full py-2 px-3"
                        />
                      </div>
                    </div>
                    <div className="w-full mb-7 flex-1 mx-2">
                      <div className="boking-datepicker">
                        <input
                          id="datepicker1"
                          placeholder="Numéro de téléphone"
                          type="Number"
                          className="border text-black rounded w-full py-2 px-3"
                        />
                      </div>
                    </div>
                    <div className="w-full mb-7 flex-1 mx-2">
                      <div className="boking-datepicker">
                        <input
                          id="datepicker1"
                          placeholder="Mail"
                          type="mail"
                          className="border text-black rounded w-full py-2 px-3"
                        />
                      </div>
                    </div>
                    {/* Single Select Box for Person */}
                    <div className="w-full mb-7 flex-1 mx-2">
                      <div className="select-this">
                        <div className="select-itms relative">
                          <div className="select-icon absolute left-3 top-1/2 transform -translate-y-1/2">
                            <i className="ti-user text-yellow-500"></i>
                          </div>
                          <select
                            name="persone"
                            id="select1"
                            className="appearance-none text-black pl-10 pr-4 py-2 border rounded w-full"
                          >
                            <option value="1">1 Personne</option>
                            <option value="2"> 2 Personnes</option>
                            <option value="3">3 Personnes</option>
                            <option value="4">4 Personnes</option>
                          </select>
                        </div>
                      </div>
                    </div>
                    {/* Date Picker */}
                    <div className="w-full mb-7 flex-1 mx-2">
                      <div className="boking-datepicker">
                        <input
                          id="datepicker1"
                          placeholder="Date"
                          type="text"
                          className="border text-black rounded w-full py-2 px-3"
                        />
                      </div>
                    </div>
                    {/* Time Picker */}
                    <div className="w-full mb-7 flex-1 mx-2">
                      <div className="boking-datepicker">
                        <input
                          id="timepicker"
                          placeholder="Heure"
                          type="text"
                          className="border text-black rounded w-full py-2 px-3"
                        />
                      </div>
                    </div>
                    {/* Book Now Button */}
                  </div>
                  <div className="w-full">
                    <button
                      type="submit"
                      className="w-full bg-red-600 text-white rounded py-2 px-4 hover:bg-yellow-600 transition"
                    >
                      Réserver maintenant
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* <button className=" text-base lg:text-2xl rounded-full  px-4 py-1 text-white ">
        Commander
      </button> */}
      {/* <div className="mb-6">
        <div className="flex flex-col justify-center items-center mt-8">
          <h1 className="text-center text-3xl lg:text-5xl text-red-600 font-bold ">
            Philosophie
          </h1>
          <div className="bg-yellow-400 rounded h-2 w-[150px]"></div>
        </div>
      </div>
      <div className="rounded-xl gap-7 flex flex-col md:grid lg:grid-cols-2 justify-around items-center md:mx-20 ">
        <div className="p-5 bg-yellow-500 w-full h-full rounded-xl text-center text-xl">
          <h1 className="text-red-700 text-center font-bold">Authenticité</h1>
          <p>
            Nous croyons en la préservation des traditions culinaires
            gabonaises, en utilisant des ingrédients locaux et des méthodes de
            préparation ancestrales.
          </p>
        </div>
        <div className="bg-yellow-500 h-full w-full p-5 rounded-xl text-center text-xl">
          <h1 className="text-red-700 text-center font-bold">Communauté</h1>
          <p>
            Notre restaurant est plus qu`un lieu de restauration c`est un espace
            de partage et de connexion pour notre communauté.
          </p>
        </div>
        <div className="bg-yellow-500 h-full  w-full p-5 rounded-xl text-center text-xl">
          <h1 className="text-red-700 text-center font-bold">Durabilité</h1>
          <p>
            Nous nous engageons à adopter des pratiques durables, en soutenant
            les producteurs locaux et en minimisant notre impact
            environnemental.
          </p>
        </div>
        <div className="bg-yellow-500 p-5 w-full h-full rounded-xl text-center text-xl">
          <h1 className="text-red-700 text-center font-bold">Passion</h1>
          <p>
            Chaque plat que nous servons est préparé avec passion et dévouement,
            reflétant notre amour pour la cuisine gabonaise.
          </p>
        </div>
      </div> */}
    </section>
  );
}
