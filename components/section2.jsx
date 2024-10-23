"use client";
import { motion, useInView } from "framer-motion";
import { Food } from "../app/data/food";
import Image from "next/image";
import { useRef } from "react";

const container = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      delayChildren: 0.3,
      staggerChildren: 0.2,
      delay: 0.2,
      duration: 1.5,
      ease: "easeInOut",
    },
  },
};

const item = {
  hidden: { opacity: 0, y: 50, scale: 0.9 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    rotate: [0, 5, -5, 0], // Ajout de légères rotations pour plus de dynamisme
    transition: {
      type: "spring",
      stiffness: 100,
      damping: 10,
    },
  },
};

export default function Section2() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <section className="bg-white">
      <div className="my-20">
        <div className="flex flex-col justify-center items-center">
          <h1 className="text-3xl md:text-4xl font-serif text-center text-red-600 font-extralight mb-12">
            Nos plats populaires
          </h1>
        </div>
        <motion.section
          ref={ref}
          variants={container}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid md:grid-cols-2 lg:grid-cols-4 items-center mx-auto px-10 md:px-20 justify-center gap-5"
        >
          {Food.map((tab) => (
            <motion.div
              key={tab.id}
              className="flex flex-col h-full max-w-[300px] p-6 rounded-lg bg-gray-50 shadow-lg hover:shadow-xl transition-shadow"
              variants={item}
            >
              <Image
                src={tab.photo}
                alt="food"
                width={1000}
                height={1000}
                className="w-full rounded-lg object-cover"
              />
              <div className="flex mt-[-50px] w-full flex-col h-full items-center">
                <Image
                  src="/assets/pub.png"
                  alt="food"
                  width={1000}
                  height={1000}
                  className=" w-[100px] h-auto"
                />
                <h1 className="text-black text-[20px] w-full mt-[-15px] font-bold text-center">
                  {tab.titre}
                </h1>
                {/* <p className="text-green-600 animate-pulse font-extrabold font-mono rounded-lg p-2 bg-yellow-200 text-center text-[13px]">
                  Disponible dès maintenant
                </p> */}
              </div>
            </motion.div>
          ))}
        </motion.section>
      </div>
    </section>
  );
}
