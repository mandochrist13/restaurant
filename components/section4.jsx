export default function section4() {
  return (
    <section className="bg-white flex-col justify-center items-center md:mt-20 ">
      <div className="mb-6">
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
      </div>
    </section>
  );
}
