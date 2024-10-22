import Image from "next/image";
export default function story() {
  return (
    <div className="my-20 p-10 md:px-20">
      <div className="flex flex-col md:flex-row items-center gap-10 md:gap-[80px] justify-center ">
        <div className=" flex justify-center md:w-2/4 items-center">
          <Image
            src="/assets/out-0 7 (1).svg"
            width={650}
            height={650}
            alt="img"
            className="rounded-xl h-auto w-full"
          />
        </div>
        <div className=" flex-col md:w-2/3  justify-center items-center ">
        <h1 className="text-2xl md:text-xl lg:text-3xl font-serif text-center md:text-left text-red-600 font-extralight  mb-4">
        Nous fournissons des aliments sains pour votre famille.
        </h1>
          <p className="md:text-[10px] lg:text-[18px] text-black">
            Fondé en 2010 par la passionnée de cuisine Marie Okoumé, Saveurs
            Bantu est né du désir de partager l`authentique cuisine gabonaise
            avec le monde. Notre voyage culinaire a commencé dans une petite
            cuisine familiale et s`est transformé en l`expérience gastronomique
            que nous offrons aujourd`hui. Situé au cœur de Libreville, notre
            restaurant est devenu un lieu de rencontre pour les amateurs de
            cuisine gabonaise authentique et les curieux culinaires du monde
            entier. Nous nous efforçons de créer non seulement des repas, mais
            des expériences qui racontent l`histoire riche et diverse du Gabon à
            travers ses saveurs uniques.
          </p>
        </div>
      </div>
    </div>
  );
}
