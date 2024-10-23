
import { Service } from "../app/data/serv";



export default function Section1() {
   // Trigger animation only once when the section is visible
  return (
    <div className="my-20 ">
      <div className="flex flex-col justify-center items-center">
        <h1 className="text-3xl px-2 md:text-4xl font-serif text-center text-red-600 font-extralight  mb-12">
          Parcourez Notre Menu
        </h1>
      </div>
      <section
      
        className="grid md:grid-cols-2 lg:grid-cols-4 items-center mx-auto px-10 md:px-20 justify-center gap-5"
        >
        {Service.map((tab) => (
          <div
            key={tab.id}
            className="border-gray-200 animate-levitate transition ease-in-out delay-75 hover:-translate-y-1 hover:scale-110 duration-300 flex flex-col h-full items-center max-w-[300px] p-6 space-y-7 border rounded-lg"
           >
            <div className="border border-yellow-400 w-[75px] p-3 rounded-full flex justify-center items-center">
              {tab.photo}
            </div>
            <div className="flex flex-col justify-center space-y-3 items-center">
              <h1 className="text-black font-bold">{tab.titre}</h1>
              <p className="text-black text-center text-[12px]">
                {tab.description}
              </p>
            </div>
          </div>
        ))}
      </section>
    </div>
  );
}
