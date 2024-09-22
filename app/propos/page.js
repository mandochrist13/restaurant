import { Header } from "../components/Header";
import Image from "next/image";
export default function page() {
  return (
    <div>
      <Header />
      <main>
        <div className="">
          <h1 className="text-6xl text-center text-red-600 font-bold mt-20">
            Histoire
          </h1>
          <div className="flex justify-center items-center mt-8">
            <div className="bg-yellow-400 h-3 w-52"></div>
          </div>
        </div>
        <section className="flex justify-center mt-36">
          <div className="bg-white w-2/4 h-screen flex justify-center items-center">
            <Image
              src="/assets/out-0 7 (1).svg"
              width={650}
              height={650}
              alt="img"
            />
          </div>
          <div className="bg-white h-screen w-3/4 flex-col gap-56 justify-center items-center mt-2 ml-10">
            <p className="text-2xl">
              Fondé en 2010 par la passionnée de cuisine Marie Okoumé, Saveurs
              Bantu est né du désir de partager l`authentique cuisine gabonaise
              avec le monde. Notre voyage culinaire a commencé dans une petite
              cuisine familiale et s`est transformé en l`expérience
              gastronomique que nous offrons aujourd`hui.
            </p>
            <br />
            <p className="text-2xl">
              Situé au cœur de Libreville, notre restaurant est devenu un lieu
              de rencontre pour les amateurs de cuisine gabonaise authentique et
              les curieux culinaires du monde entier. Nous nous efforçons de
              créer non seulement des repas, mais des expériences qui racontent
              l`histoire riche et diverse du Gabon à travers ses saveurs
              uniques.
            </p>
          </div>
        </section>
        {/* Ici nous avons la deuxième section */}
        <section className="h-96 bg-white">
          <div className="">
            <h1 className="text-center mt-24 text-6xl text-red-600 font-bold ">
              Notre mission
            </h1>
            <div className="flex justify-center items-center mt-8">
              <div className="bg-yellow-400 h-3 w-48"></div>
            </div>
          </div>
          <p className="text-3xl ml-7 mb-10 mt-8">
            Chez Saveurs Bantu, notre mission est de :
          </p>
          <div className=" flex-col justify-center text-2xl ml-20">
            <div className="flex justify-center gap-10">
              {/* <Image
                src="/assets/Ellipse 21.jpg"
                width={30}
                height={10}
                alt="img"
              /> */}
            </div>
            <li> Préserver et promouvoir l`héritage culinaire gabonais</li>

            <li className="mt-4">
              Préserver et promouvoir l`héritage culinaire gabonais
            </li>
            <li className="mt-4">
              Soutenir les producteurs locaux et promouvoir la durabilité
            </li>
            <li className="mt-4">
              Offrir une expérience gastronomique authentique et innovante
            </li>
            <li className="mt-4">
              Créer un espace accueillant où la communauté peut se réunir et
              partager
            </li>
          </div>
        </section>
        {/* Ici j'ai section carousel */}
        <section className="h-3/4 bg-white mb-16">
          <div>
            <h1 className="text-center mt-24 text-6xl text-red-600 font-bold ">
              Notre Équipe
            </h1>
            <div className="flex justify-center items-center mt-8">
              <div className="bg-yellow-400 h-3 w-48"></div>
            </div>
            <div className="h-64 mt-20 mb-10 flex justify-around items-center">
              <div className="h-56 w-60 bg-white flex-col  items-center">
                <Image
                  src="/assets/fondatrice.png"
                  width={140}
                  height={140}
                  alt="img"
                  className="ml-12"
                />
                <h1 className="text-2xl font-bold text-center mt-3">
                  Marie Okoumé
                </h1>
                <p className="text-center mt-5">Fondatrice & Propriétaire</p>
              </div>
              <div className="h-56 w-60 bg-white flex-col  items-center">
                <Image
                  src="/assets/chefcuisto.jpg"
                  width={140}
                  height={140}
                  alt="img"
                  className="ml-12"
                />
                <h1 className="text-2xl font-bold text-center mt-3">
                  Jean-Pierre Ndong
                </h1>
                <p className="text-center mt-5">Chef Exécutif</p>
              </div>
              <div className="h-56 w-60 bg-white flex-col justify-center  items-center">
                <Image
                  src="/assets/respoclient.png"
                  width={140}
                  height={140}
                  alt="img"
                  className="ml-12 "
                />
                <h1 className="text-2xl font-bold text-center mt-3">
                  Sophie Moussavou
                </h1>
                <p className="text-center mt-5">Responsable Service Client</p>
              </div>
            </div>
          </div>
        </section>
        {/* Ici j'ai une section Philosophie */}
        <section className="h-screen bg-white flex-col justify-center items-center mt-20 ">
          <div className="mt-10">
            <h1 className="text-center mt-24 text-6xl text-red-600 font-bold ">
              Philosophie
            </h1>
            <div className="flex justify-center items-center mt-8">
              <div className="bg-yellow-400 h-3 w-48"></div>
            </div>
          </div>
          <div className="bg-slate-400 rounded-xl flex justify-around items-center h-2/4 w-11/12 ml-20 mt-32 mb-16 mr-20 ">
            <div className="h-52  bg-yellow-500 w-96 rounded-xl text-center text-xl">
              <h1 className="text-red-700 text-center font-bold mt-4">
                Authenticité
              </h1>
              <p>
                Nous croyons en la préservation des traditions culinaires
                gabonaises, en utilisant des ingrédients locaux et des méthodes
                de préparation ancestrales.
              </p>
            </div>
            <div className="h-52 bg-yellow-500 w-96 rounded-xl text-center text-xl">
              <h1 className="text-red-700 text-center font-bold mt-4">
                Communauté
              </h1>
              <p>
                Notre restaurant est plus qu`un lieu de restauration; c`est un
                espace de partage et de connexion pour notre communauté.
              </p>
            </div>
            <div className="h-52 bg-yellow-500 w-96 rounded-xl text-center text-xl">
              <h1 className="text-red-700 text-center font-bold mt-4">
                Durabilité
              </h1>
              <p>
                Nous nous engageons à adopter des pratiques durables, en
                soutenant les producteurs locaux et en minimisant notre impact
                environnemental.
              </p>
            </div>
            <div className="h-52 bg-yellow-500 w-96 rounded-xl text-center text-xl">
              <h1 className="text-red-700 text-center font-bold mt-4">
                Passion
              </h1>
              <p>
                Chaque plat que nous servons est préparé avec passion et
                dévouement, reflétant notre amour pour la cuisine gabonaise.
              </p>
            </div>
          </div>
        </section>
      </main>
      <footer className="h-96 bg-slate-900 flex justify-center items-center mt-20">
        <ul className="text-white flex justify-around font-bold items-center h-20 w-full bg-blue-600 hover:bg-fuchsia-600 mt-28 rounded-3xl">
          <li className=" font-semibold hover:bg-cyan-950">
            On attend le footer de forgive
          </li>
          <li className=" font-semibold hover:bg-cyan-950">
            On attend le footer de forgive
          </li>
          <li className=" font-semibold hover:bg-cyan-950">
            On attend le footer de forgive
          </li>
          <li className=" font-semibold hover:bg-cyan-950">
            On attend le footer de forgive
          </li>
          <li className=" font-semibold hover:bg-cyan-950">
            On attend le footer de forgive
          </li>
        </ul>
      </footer>
    </div>
  );
}
