"use client";

import React, {useState} from "react";
import { Input } from "@nextui-org/react";

import { Field } from "@headlessui/react";

export default function Section4() {
  const [selectedKeys, setSelectedKeys] = React.useState(new Set(["text"]));

  const selectedValue = React.useMemo(
    () => Array.from(selectedKeys).join(", ").replaceAll("_", " "),
    [selectedKeys]
  );

  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [mail, setMail] = useState("");
  const [gest, setGest] = useState(0);
  const [time, setTime] = useState("");
  const [date, setDate] = useState("");

  const handleSubmit = async () => {
    console.log("début du traitement des données")
    const data = {
      name: name,
      phone: phone,
      email: mail,
      guests: gest,
      time: time,
      date: date,}

      console.log(data);

    if (name.length ==0 || phone.length ==0 || mail.length ==0 || gest<0 || time.length ==0 || date.length ==0) {
      
      alert("Veuillez remplir tous les champs obligatoires.");
      
    } else {
      try {
        
        
        const response = await fetch (`https://api-saveur.onrender.com/reservations/`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(data),
        });
        if (response.ok) {
          alert("Votre réservation a bien été enregistrée!");
          setName("");
          setPhone("");
          setMail("");
          setGest(0);
          setTime("");
          setDate("");
          console.log("response :", await response.json())
        } else {
          alert("Une erreur est survenue lors de l'enregistrement de votre réservation.");
          console.log("response :", await response.json())
        }
      } catch (error) {
        alert("Une erreur est survenue lors de l'enregistrement de votre réservation.");
        console.log("Erreur :", error);
      }
      
    }
    
  };
  
  

  return (
    <section
      style={{ backgroundImage: "url(/assets/plat.png)" }}
      className="bg-black w-full space-y-8 bg-cover bg-center bg-blend-overlay bg-opacity-70 flex flex-col justify-center items-center mt-20 px-5 py-10 md:px-20 lg:py-20 "
    >
      <h1
        id="form"
        className="text-xl md:text-4xl font-bold px-5 lg:w-[75%]  md:px-15 text-center"
      >
        Êtes-vous prêt à commander votre meilleur plat?
      </h1>
      <div className="w-full max-w-[600px] rounded-lg bg-gradient-to-r from-amber-400 to-amber-200 px-4 lg:px-8">
        
        <div
          className="py-10"
          style={{
            backgroundImage: "url('/assets/img/gallery/section_bg04.png')",
          }}
        >
          <div className="container mx-auto">
            <div className="flex justify-center">
              <div className="w-full">
                <div>
                  <div className=" flex flex-col md:grid md:grid-cols-2 gap-5 justify-between items-center">
                    <div className="w-full mb-7 flex-1 mx-2">
                      <div className="boking-datepicker">
                        <input
                          id="datepicker1"
                          placeholder="Nom"
                          value={name} onChange={(e) => setName(e.target.value)}
                          type="text"
                          className="border text-black rounded w-full py-2 px-3"
                        />
                      </div>
                    </div>
                    <div className="w-full mb-7 flex-1 mx-2">
                      <div className="boking-datepicker">
                        <input
                          id="datepicker1"
                          value={phone} onChange={(e) => setPhone(e.target.value)}
                          placeholder="Numéro de téléphone"
                          type="text"
                          className="border text-black rounded w-full py-2 px-3"
                        />
                      </div>
                    </div>
                    <div className="w-full mb-7 flex-1 mx-2">
                      <div className="boking-datepicker">
                        <input
                          id="datepicker1"
                          value={mail} onChange={(e) => setMail(e.target.value)}
                          placeholder="Mail"
                          type="email"
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
                          value={gest} onChange={(e) => setGest(parseInt(e.target.value))}
                            name="persone"
                            id="select1"
                            className="appearance-none text-black pl-10 pr-4 py-2 border rounded w-full"
                          >
                            <option value="">Selectionnez le nombre de personne</option>
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
                          value={date} onChange={(e) => setDate(e.target.value)}
                          placeholder="yyyy-mm-dd"
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
                          value={time} onChange={(e) => setTime(e.target.value)}
                          placeholder="00:00"
                          type="text"
                          className="border text-black rounded w-full py-2 px-3"
                        />
                      </div>
                    </div>
                    {/* Book Now Button */}
                  </div>
                  <div className="w-full">
                    <button
                      onClick={handleSubmit}
                      className="w-full bg-red-600 text-white rounded py-2 px-4 hover:bg-red-400 transition"
                    >
                      Réserver maintenant
                    </button>
                  </div>
                </div>
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
