import React from "react";
import { FaWhatsapp } from "react-icons/fa";
import { PiUserSound } from "react-icons/pi";

export default function Section5() {
  return (
    <div className="flex flex-col items-center space-y-10 justify-center w-full">
      <div className="flex flex-col bg-gray-50 shadow-lg md:flex-row space-y-6 justify-between items-center p-5 w-full max-w-[1000px] mx-auto border border-gray-100 rounded-lg">
        <h1 className="text-xl md:text-2xl text-black text-center">
          Souscrivez à notre canal whatsapp
        </h1>
        <button className="border cursor-pointer duration-150 text-green-500 hover:text-white hover:bg-green-400 hover:scale-110 bg-white border-green-400 rounded-2xl items-center px-3 py-2 space-x-5 flex">
          <h1>Rejoignez-nous</h1>
          <FaWhatsapp className="text-3xl" />
        </button>
        <div className="flex space-x-4 items-center">
          <PiUserSound className="text-5xl text-yellow-400" />
          <div className="flex flex-col">
            <p className="text-black">Contactez-nous 24/7:</p>
            <a href="tel:+24174000000" className="text-blue-400 cursor-pointer text-center">
              +241 74 00 00 00
            </a>
          </div>
        </div>
      </div>
        <iframe
        className="w-[300px] md:w-full flex items-center justify-center"
          src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d817.1478248698065!2d9.449987891513667!3d0.4185410359660749!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x107f3b647fa9ea09%3A0x7314a12de1932d03!2sOgoou%C3%A9%20Labs!5e1!3m2!1sfr!2sga!4v1730720908642!5m2!1sfr!2sga"
          width="1300"
          height="300"
          style={{ border: 0 }}
          allowFullScreen
          title="Carte Ogooué labs"
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      
    </div>
  );
}
