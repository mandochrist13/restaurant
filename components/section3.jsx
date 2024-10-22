import Image from "next/image";

export default function section3() {
  return (
    <section className="md:h-3/4 bg-white md:mb-16">
          <div className="space-y-5">
            <div className="flex flex-col justify-center items-center mt-8 md:mt-20">
              <h1 className="text-center md:mt-24 text-3xl md:text-5xl text-red-600 font-bold ">
                Notre Équipe
              </h1>
              <div className="bg-yellow-400 h-2 rounded w-48"></div>
            </div>
            <div className="gap-y-10 flex flex-col md:flex-row justify-around items-center">
              <div className="flex space-y-4 bg-white flex-col  items-center">
                <Image
                  src="/assets/fondatrice.png"
                  width={140}
                  height={140}
                  alt="img"
                  className=""
                />
                <div className="space-y-2">
                  <h1 className="text-2xl font-bold text-black text-center">
                    Marie Okoumé
                  </h1>
                  <p className="text-center text-black">
                    Fondatrice & Propriétaire
                  </p>
                </div>
              </div>
              <div className="bg-white flex flex-col  items-center">
                <Image
                  src="/assets/chefcuisto.jpg"
                  width={140}
                  height={140}
                  alt="img"
                  className=""
                />
                <div className="space-y-2">
                  <h1 className="text-2xl text-black font-bold text-center">
                    Jean-Pierre Ndong
                  </h1>
                  <p className="text-center text-black">Chef Exécutif</p>
                </div>
              </div>
              <div className="bg-white flex flex-col justify-center  items-center">
                <Image
                  src="/assets/respoclient.png"
                  width={140}
                  height={140}
                  alt="img"
                  className=""
                />
                <div className="space-y-2">
                  <h1 className="text-2xl font-bold text-black text-center">
                    Sophie Moussavou
                  </h1>
                  <p className="text-center text-black">
                    Responsable Service Client
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
  );
}


