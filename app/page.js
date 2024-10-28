"use client";

import Story from "../components/story";
import Section1 from "../components/section1";
import Section2 from "../components/section2";
import Section3 from "../components/section3";
import Section4 from "../components/section4";
import {Header} from "../components/Header";

export default function Page() {
  return (
    <section className="space-y-28 ">
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
      <Section4 />
    </section>
  );
}
