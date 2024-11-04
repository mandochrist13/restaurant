"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import Preloader from "@/components/Preloader";
import Section1 from "@/components/section1";
import Section5 from "@/components/section5";

export default function Page() {
  const [activeSection, setActiveSection] = useState("burgers");

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
    <div
      style={{ backgroundImage: "url(/assets/bgm.png)" }}
      className="space-y-16 md:px-10 flex flex-col w-full items-center justify-center bg-cover bg-center "
    >
      {loading && <Preloader />}
      <div
        style={{ display: loading ? "none" : "flex" }}
        className="flex  flex-col justify-center w-full items-center"
      >
        <Image
          src="/assets/main.png"
          alt="food"
          width={1000}
          height={1000}
          className="w-[40%]  relative rounded-lg object-cover"
        />
        <Image
          src="/assets/snow.gif"
          alt="food"
          width={1000}
          height={1000}
          className="w-[30%] absolute rounded-lg object-cover"
        />
        <h1 className="text-[#DC2626] absolute text-xl md:text-6xl font-bold">
          A propos de nous
        </h1>
      </div>
      <div className="flex  flex-col justify-center w-full items-center space-y-5 px-5">
        <h1 className="flex text-yellow-400 text-xl md:text-4xl flex-col justify-center w-full items-center">
          Saveurs Bantu c'est quoi?
        </h1>
        <p className="flex text-black text-center flex-col justify-center w-full items-center">
          Far far away, behind the word mountains, far from the countries
          Vokalia and Consonantia, there live the blind texts. Separated they
          live in Bookmarksgrove right at the coast of the Semantics, a large
          language ocean.
        </p>
      </div>
      <div class="flex flex-col md:flex-row justify-center items-center mx-5 mb-5 space-y-5 space-x-5">
        <div class="flex flex-col justify-center items-center w-full md:h-full md:w-1/3 space-y-5">
          <Image
            src="/assets/card5.jpeg"
            alt="food"
            width={1000}
            height={1000}
            className="md:h-full w-[60%] md:w-full object-cover"
          />
        </div>
        <div class="flex flex-col justify-center items-center w-full md:h-full md:w-1/3 space-y-5">
          <Image
            src="/assets/card1.jpeg"
            alt="food"
            width={1000}
            height={1000}
            className="md:h-full w-[60%] md:w-full object-cover"
          />
          <Image
            src="/assets/card4.jpeg"
            alt="food"
            width={1000}
            height={1000}
            className="md:h-full w-[60%] md:w-full object-cover"
          />
        </div>
        <div class="flex flex-col justify-center items-center w-full md:h-full md:w-1/3 space-y-5">
          <Image
            src="/assets/card6.jpeg"
            alt="food"
            width={1000}
            height={1000}
            className="md:h-full w-[60%] md:w-full object-cover"
          />
        </div>
      </div>
      <div className="flex  flex-col justify-center w-full items-center space-y-5 px-5">
        <p className="flex text-black flex-col justify-center w-full items-center">
          Far far away, behind the word mountains, far from the countries
          Vokalia and Consonantia, there live the blind texts. Separated they
          live in Bookmarksgrove right at the coast of the Semantics, a large
          language ocean.
        </p>
        <p className="flex text-black flex-col justify-center w-full items-center">
          A small river named Duden flows by their place and supplies it with
          the necessary regelialia. It is a paradisematic country, in which
          roasted parts of sentences fly into your mouth.
        </p>
        <p className="flex text-black flex-col justify-center w-full items-center">
          Far far away, behind the word mountains, far from the countries
          Vokalia and Consonantia, there live the blind texts. Separated they
          live in Bookmarksgrove right at the coast of the Semantics, a large
          language ocean.
        </p>
        <p className="flex text-black flex-col justify-center w-full items-center">
        A small river named Duden flows by their place and supplies it with the necessary regelialia. It is a paradisematic country, in which roasted parts of sentences fly into your mouth.
        </p>
      </div>
      <Section1 />
      <Section5 />
    </div>
  );
}
