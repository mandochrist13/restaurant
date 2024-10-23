"use client"

import { motion, useInView } from "framer-motion";
import { Service } from "../app/data/serv";
import UseRef  from "react";

const container = {
  hidden: { opacity: 1, scale: 0 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      delayChildren: 0.3,
      staggerChildren: 0.2,
    },
  },
};

const item = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
  },
};

export default function Section1() {
  const ref = UseRef(null);
  const isInView = useInView(ref, { once: true }); // Trigger animation only once when the section is visible
  return (
    <div className="my-20 ">
      <div className="flex flex-col justify-center items-center">
        <h1 className="text-3xl px-2 md:text-4xl font-serif text-center text-red-600 font-extralight  mb-12">
          Parcourez Notre Menu
        </h1>
      </div>
      <motion.section
      ref={ref}
        className="grid md:grid-cols-2 lg:grid-cols-4 items-center mx-auto px-10 md:px-20 justify-center gap-5"
        variants={container}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}>
        {Service.map((tab) => (
          <motion.div
            key={tab.id}
            className="border-gray-200 flex flex-col  items-center max-w-[300px] p-6 space-y-7 border rounded-lg"
            variants={item}>
            <div className="border border-yellow-400 w-[75px] p-3 rounded-full flex justify-center items-center">
              {tab.photo}
            </div>
            <div className="flex flex-col justify-center space-y-3 items-center">
              <h1 className="text-black font-bold">{tab.titre}</h1>
              <p className="text-black text-center text-[12px]">
                {tab.description}
              </p>
            </div>
          </motion.div>
        ))}
      </motion.section>
    </div>
  );
}
