import Image from "next/image";
import { Team } from "../app/data/team";

export default function section3() {
  return (
    <section className="md:h-3/4 bg-white md:mb-16">
      <div className="space-y-5">
        <div className="flex flex-col justify-center items-center">
          <h1 className="text-3xl md:text-4xl font-serif text-center text-red-600 font-extralight  mb-12">
            Notre équipe
          </h1>
        </div>
        <div className="gap-10 flex flex-col md:grid md:grid-cols-2 justify-around items-center mx-auto px-10 md:px-20">
          {Team.map((tab) => (
            <div key={tab.id} className="h-full ">
              <div className="flex rounded-md w-full h-full bg-gradient-to-r from-amber-400 to-amber-200 justify-between ">
                <Image
                  src={tab.photo}
                  width={140}
                  height={140}
                  alt="img"
                  className=""
                />
                <div className=" w-full py-6 space-y-2">
                  <h1 className="md:text-2xl font-bold text-black text-center">
                    {tab.nom}
                  </h1>
                  <p className="text-center text-[12px] text-black">{tab.poste}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
