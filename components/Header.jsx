import Image from "next/image";
import Link from "next/link";

export const Header = () => {
  return (
    <header className="bg-cover bg-center">
      <nav className="bg-white px-5 flex justify-between w-full items-center text-center">
        <div className="flex items-center text-center">
          <Image
            src="/assets/logo.png"
            alt="logo"
            width={112}
            height={112}
            className="w-full h-auto"
          />
        </div>
        <button
          data-collapse-toggle="navbar-default"
          type="button"
          className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
          aria-controls="navbar-default"
          aria-expanded="false"
        >
          <span className="sr-only">Open main menu</span>
          <svg
            className="w-5 h-5"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 17 14"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M1 1h15M1 7h15M1 13h15"
            />
          </svg>
        </button>
        <div className="md:flex items-center justify-center px-3 hidden text-center gap-[50px] ">
          <div className="flex gap-[20px]">
            <a href="/" className=" md:text-sm  text-black relative  hover:text-red-500 cursor-pointer transition-all ease-in-out before:transition-[width] before:ease-in-out before:duration-700 before:absolute before:bg-yellow-400 before:origin-center before:h-[1px] before:w-0 hover:before:w-[50%] before:bottom-0 before:left-[50%] after:transition-[width] after:ease-in-out after:duration-700 after:absolute after:bg-yellow-400 after:origin-center after:h-[1px] after:w-0 hover:after:w-[50%] after:bottom-0 after:right-[50%]">Accueil</a>
            <a href="/" className=" md:text-sm   text-black relative  hover:text-red-500 cursor-pointer transition-all ease-in-out before:transition-[width] before:ease-in-out before:duration-700 before:absolute before:bg-yellow-400 before:origin-center before:h-[1px] before:w-0 hover:before:w-[50%] before:bottom-0 before:left-[50%] after:transition-[width] after:ease-in-out after:duration-700 after:absolute after:bg-yellow-400 after:origin-center after:h-[1px] after:w-0 hover:after:w-[50%] after:bottom-0 after:right-[50%]">Menu</a>
            <a href="/" className=" md:text-sm   text-black relative  hover:text-red-500 cursor-pointer transition-all ease-in-out before:transition-[width] before:ease-in-out before:duration-700 before:absolute before:bg-yellow-400 before:origin-center before:h-[1px] before:w-0 hover:before:w-[50%] before:bottom-0 before:left-[50%] after:transition-[width] after:ease-in-out after:duration-700 after:absolute after:bg-yellow-400 after:origin-center after:h-[1px] after:w-0 hover:after:w-[50%] after:bottom-0 after:right-[50%]">Blog</a>
            <a href="/" className=" md:text-sm  text-black relative  hover:text-red-500 cursor-pointer transition-all ease-in-out before:transition-[width] before:ease-in-out before:duration-700 before:absolute before:bg-yellow-400 before:origin-center before:h-[1px] before:w-0 hover:before:w-[50%] before:bottom-0 before:left-[50%] after:transition-[width] after:ease-in-out after:duration-700 after:absolute after:bg-yellow-400 after:origin-center after:h-[1px] after:w-0 hover:after:w-[50%] after:bottom-0 after:right-[50%]">A propos</a>
            <a href="/" className=" md:text-sm  text-black relative  hover:text-red-500 cursor-pointer transition-all ease-in-out before:transition-[width] before:ease-in-out before:duration-700 before:absolute before:bg-yellow-400 before:origin-center before:h-[1px] before:w-0 hover:before:w-[50%] before:bottom-0 before:left-[50%] after:transition-[width] after:ease-in-out after:duration-700 after:absolute after:bg-yellow-400 after:origin-center after:h-[1px] after:w-0 hover:after:w-[50%] after:bottom-0 after:right-[50%]">Contact</a>
          </div>
          <button className="font-semibold text-base rounded-full hover:bg-red-600 border border-red-600 py-1 px-4 hover:text-white text-red-600">
            <Link href=""></Link>Reserver
          </button>
        </div>
      </nav>
      <div
        style={{ backgroundImage: "url(/assets/bg.png)" }}
        className="md:flex md:flex-col justify-center bg-cover bg-center items-center"
      >
        <div className="px-4 flex flex-col justify-center  lg:w-[70%] py-[10%] space-y-6">
          <div className="space-y-3 items-center flex flex-col">
            <h1 className="text-3xl lg:text-7xl font-serif  text-black text-center">
              Bienvenue à vous chez <span className="bg-yellow-300 text-white px-2">Saveur Bantu!</span> 
            </h1>
            <p className="text-lg text-black text-center lg:text-2xl">
              Partenaire de vos papilles gustative...
            </p>
          </div>
          <div className="flex gap-5 justify-center items-center">
            <button className=" text-base lg:text-xl rounded-full bg-red-600 hover:bg-red-800 px-4 py-1 text-white ">
              Reserver
            </button>
            <button className=" text-base lg:text-xl rounded-full bg-white border hover:scale-105 duration-150 border-red-600  px-4 py-1 text-red-600 ">
              Voir notre menu
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};
