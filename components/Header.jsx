"use client";


import { motion } from "framer-motion";


export function Header () {

  return (
    
      <div
        style={{ backgroundImage: "url(/assets/bg1.jpg)" }}
        className="md:flex md:flex-col justify-center  bg-cover bg-center items-center"
      >
        <div className="bg-gradient-to-r from-black to-transparent  w-full bg-opacity-40">
          <motion.div
            className="px-4  flex flex-col justify-center  lg:px-[20%] py-[10%] space-y-6"
            initial={{ opacity: 0, scale: 0 }}
            animate={{
              opacity: 1,
              scale: 1,
              transition: {
                delay: 0.2,
                duration: 2,
                ease: "easeInOut",
              },
            }}
          >
            <div className="space-y-3 items-center flex flex-col">
              <h1 className="text-3xl  p-2 md:w-[70%] lg:w-full md:bg-transparent  rounded-lg lg:text-7xl md:text-5xl font-serif  text-white text-center">
                Bienvenue à vous chez Saveur Bantu!
              </h1>
              <p className="text-lg text-white text-center lg:text-2xl">
                Partenaire de vos papilles gustative...
              </p>
            </div>
            <div className="flex gap-5 justify-center items-center">
              <button className=" text-base lg:text-xl rounded-full bg-red-600 hover:bg-red-800 px-4 py-1 text-white ">
                Reserver
              </button>
              <button className=" text-base lg:text-xl rounded-full bg-white border hover:scale-105 duration-150 border-red-600  px-4 py-1 text-red-600 ">
                Voir notre menu
              </button>
            </div>
          </motion.div>
        </div>
      </div>
    
  );
};
