import { Food } from "../app/data/food";
import Image from "next/image";

export default function section2() {
  return (
    <section className=" bg-white">
      <div className="my-20 ">
        <div className="flex flex-col justify-center items-center">
          <h1 className="text-3xl md:text-4xl font-serif text-center text-red-600 font-extralight  mb-12">
            Nos plats populaire
          </h1>
        </div>
        <section className="grid md:grid-cols-2 lg:grid-cols-4 items-center mx-auto px-10 md:px-20 justify-center gap-5">
          {Food.map((tab) => (
            <div
              key={tab.id}
              className="flex flex-col h-full max-w-[300px] p-6 space-y-7 rounded-lg"
            >
              <Image
              src={tab.photo}
              alt="food"
              width={1000}
              height={1000}
               className="w-full flex justify-center rounded-lg items-center"
                
              />
              <div className="flex flex-col justify-between h-full space-y-3 ">
                <h1 className="text-black text-lg font-bold">{tab.titre}</h1>
                <p className="text-green-600 animate-pulse font-extrabold font-mono rounded-lg p-2 bg-yellow-200 text-center text-[13px]">
                  Disponible dès maintenant
                </p>
              </div>
            </div>
          ))}
        </section>
      </div>
      {/* <div>
        <div className="flex flex-col justify-center items-center">
        <div className="flex flex-col justify-center items-center mt-8">
          <h1 className="text-center text-3xl md:text-5xl text-red-600 font-bold ">
            Notre mission
          </h1>
          <div className="bg-yellow-400 rounded h-2 w-[150px] md:w-52"></div>
        </div>
        <p className="text-2xl text-black p-6">
          Chez Saveurs Bantu, notre mission est de :
        </p>
      </div>

      <div className="flex flex-col justify-center text-black text-2xl md:ml-20">
        <div className="flex px-2 flex-col items-center md:items-start justify-center gap-4">
          <li className="text-xl">
            {" "}
            Préserver et promouvoir l`héritage culinaire gabonais
          </li>

          <li className="text-xl">
            Préserver et promouvoir l`héritage culinaire gabonais
          </li>
          <li className="text-xl">
            Soutenir les producteurs locaux et promouvoir la durabilité
          </li>
          <li className="text-xl">
            Offrir une expérience gastronomique authentique et innovante
          </li>
          <li className="text-xl">
            Créer un espace accueillant où la communauté peut se réunir et
            partager
          </li>
        </div>
      </div>
        </div> */}
    </section>
  );
}
