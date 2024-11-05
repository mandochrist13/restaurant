"use client";

import Story from "../../components/story";
import Section1 from "../../components/section1";
import Section2 from "../../components/section2";
import Section3 from "../../components/section3";
import Section4 from "../../components/section4";
import Section5 from "../../components/section5";
import { Header } from "../../components/Header";
import { useEffect, useState } from 'react';
import Preloader from '../../components/Preloader';

export default function PageHome() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Définir un délai pour simuler le chargement de la page, puis désactiver le loader
    const timer = setTimeout(() => setLoading(false), 2000); // Exemple de 2 secondes

    // Nettoyer le timer en cas de démontage
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      {loading && <Preloader />} {/* Affiche le loader tant que loading est true */}
      <section style={{ display: loading ? 'none' : 'block' }} className="space-y-28">
        <Header />
        <Section1 />
        <div className="w-full bg-yellow-200">
          <Story />
        </div>
        {/* Ici nous avons la deuxième section */}
        <Section2 />
        {/* Ici j'ai section carousel */}
        <Section3 />
        {/* Ici j'ai une section Philosophie */}
        <Section5 />
        <Section4 />
      </section>
    </>
  );
}
