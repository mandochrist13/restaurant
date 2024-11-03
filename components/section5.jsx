

import React from "react";
import { FaWhatsapp } from "react-icons/fa";
import { PiUserSound } from "react-icons/pi";

export default function Section5() {
  

  return (
    <div className="flex flex-col md:flex-row space-y-6 shadow-2xl justify-between items-center p-5 w-full max-w-[900px] mx-auto border border-gray-300 rounded-lg">
     <h1 className="text-xl md:text-2xl text-black text-center">Souscrivez à notre canal whatsapp</h1>
     <button className="border border-green-400 rounded-2xl items-center px-3 py-2 space-x-5 flex"><h1 className="text-green-500">Rejoignez-nous</h1><FaWhatsapp className="text-3xl text-green-400" /></button>
     <div className="flex space-x-4 items-center"><PiUserSound className="text-5xl text-yellow-400" /><div className="flex flex-col"><p className="text-black">Contactez-nous 24/7:</p><a href="tel:+24174000000" className="text-blue-400 text-center" >+241 74 00 00 00</a></div></div>

    </div>
  );
}
