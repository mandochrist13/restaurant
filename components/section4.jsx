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

export default function section4() {
  const [selectedKeys, setSelectedKeys] = React.useState(new Set(["text"]));

  const selectedValue = React.useMemo(
    () => Array.from(selectedKeys).join(", ").replaceAll("_", " "),
    [selectedKeys]
  );

  return (
    <section
      style={{ backgroundImage: "url(/assets/plat.png)" }}
      className="bg-black space-y-8 bg-cover bg-center bg-blend-overlay bg-opacity-80 flex flex-col justify-center items-center mt-20 px-5 py-10 md:px-20 lg:py-20 "
    >
      <h1 className="text-xl md:text-4xl font-bold px-5 lg:w-[75%]  md:px-15 text-center">
        Êtes-vous prêt à commander votre meilleur plat?
      </h1>
      <div className="w-full  rounded-md bg-gradient-to-r from-amber-400 to-amber-200  px-4 py-5 lg:px-8">
        <div
          aria-hidden="true"
          className="absolute inset-x-0 top-[-10rem] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[-20rem]"
        >
          <div
            style={{
              clipPath:"polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",}}
            className="relative left-1/2 -z-10 aspect-[1155/678] w-[36.125rem] max-w-none -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%-40rem)] sm:w-[72.1875rem]"
          />
        </div>
        <div className=" text-center">
          <h2 className="text-balance text-2xl md:text-4xl font-semibold tracking-tight text-gray-900">
            Formulaire de réservation
          </h2>
          {/* <p className="mt-2 text-lg leading-8 text-gray-600">
            Aute magna irure deserunt veniam aliqua magna enim voluptate.
          </p> */}
        </div>
        <form action="#" method="POST" className=" mt-16 md:px-5 sm:mt-20">
          <div className="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">
            <div>
              <label
                htmlFor="first-name"
                className="block text-sm font-semibold leading-6 text-gray-900"
              >
                Nom
              </label>
              <div className="mt-2.5">
                <input
                  id="first-name"
                  name="first-name"
                  type="text"
                  autoComplete="given-name"
                  className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-semibold leading-6 text-gray-900"
              >
                Prénom
              </label>
              <div className="mt-2.5">
                <input
                  id="email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div className="w-full">
              <label
                htmlFor="first-name"
                className="block text-sm font-semibold leading-6 text-gray-900"
              >
                Nombre de personne
              </label>
              <div className="mt-2.5">
                <Dropdown className="border block text-sm font-semibold leading-6 text-gray-900">
                  <DropdownTrigger>
                    <Button variant="bordered" className="block border w-full border-slate-300 bg-white rounded-md text-sm font-semibold leading-6 text-gray-900">
                      {selectedValue}
                    </Button>
                  </DropdownTrigger>
                  <DropdownMenu
                    className="block rounded-md bg-white text-sm font-semibold leading-6 text-gray-900"
                    aria-label="Single selection example"
                    variant="flat"
                    disallowEmptySelection
                    selectionMode="single"
                    selectedKeys={selectedKeys}
                    onSelectionChange={setSelectedKeys}
                  >
                    <DropdownItem key="1 Personne">1 Personne</DropdownItem>
                    <DropdownItem key="2 Personnes">2 Personnes</DropdownItem>
                    <DropdownItem key="3 Personnes">3 Personnes</DropdownItem>
                    <DropdownItem key="4 Personnes">4 Personnes</DropdownItem>
                    {/* <DropdownItem key="iteration">Iteration</DropdownItem> */}
                  </DropdownMenu>
                </Dropdown>
              </div>
            </div>
            <div>
              <label
                htmlFor="phone-number"
                className="block text-sm font-semibold leading-6 text-gray-900"
              >
                Numéro de téléphone
              </label>
              <div className="relative mt-2.5">
                <input
                  id="phone-number"
                  name="phone-number"
                  type="tel"
                  autoComplete="tel"
                  className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>
            <div>
              <label
                htmlFor="company"
                className="block text-sm font-semibold leading-6 text-gray-900"
              >
                Date de réservation
              </label>
              <div className="mt-2.5">
                <input
                  id="company"
                  name="company"
                  type="text"
                  autoComplete="organization"
                  className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>
            <div>
              <label
                htmlFor="last-name"
                className="block text-sm font-semibold leading-6 text-gray-900"
              >
                Heure de réservation
              </label>
              <div className="mt-2.5">
                <input
                  id="last-name"
                  name="last-name"
                  type="text"
                  autoComplete="family-name"
                  className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            {/* <div className="sm:col-span-2">
              <label
                htmlFor="message"
                className="block text-sm font-semibold leading-6 text-gray-900"
              >
                Message
              </label>
              <div className="mt-2.5">
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  defaultValue={""}
                />
              </div>
            </div> */}
            <Field className="flex gap-x-4 sm:col-span-2"></Field>
          </div>
          <div className="mt-10">
            <button
              type="submit"
              className="block w-full rounded-md bg-red-600 hover:bg-red-800 px-3.5 py-2.5 text-center text-sm font-semibold text-white shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            >
              Réserver
            </button>
          </div>
        </form>
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
