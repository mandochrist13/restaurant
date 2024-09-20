import Image from "next/image";
import styles from "./header.module.css";
import Link from "next/link";
export const Header = () => {
  return (
    <div>
      <header className={`${styles.header} `}>
        <nav className={`${styles.nav} flex justify-between w-full items-center text-center`}>
          <div className="flex items-center text-center ml-14 mt-3">
            <img
              src="/assets/logo.svg"
              alt=""
              width={112}
              height={112}
              className=""
            />
            <p className="font-bold text-2xl leading-10 text-white">Saveurs Bantu </p>
            <img
            src="/assets/logomobil.svg"
            alt=""
            width={23}
            height={23}
            className={`${styles.logomobil}  mr-3 mt-3`}
          />
          </div>
          <img
            src="/assets/menu_berger.svg"
            alt=""
            width={23}
            height={23}
            className={`${styles.menu}  mr-3 mt-3`}
          />
          <div className="flex items-center text-center gap-[50px] mr-12 mt-3">
            <ul className="flex gap-[50px]">
              <li className="font-bold leading-10 text-2xl  text-white">Acceuil</li>
              <li className="font-bold leading-10 text-2xl  text-white">Menu</li>
              <li className="font-bold leading-10 text-2xl  text-white">Blog</li>
              <li className="font-bold leading-10 text-2xl  text-white">A propos</li>
              <li className="font-bold leading-10 text-2xl  text-white">Contact</li>
              {/* <li>
                <a href=""></a>
              </li> */}
            </ul>
            <button className="font-bold text-base leading-9 rounded-xl bg-red-600 h-[47px] w-[158px] text-white ">
              <Link href=""></Link>Reservation
            </button>
          </div>
        </nav>
      </header>
    </div>
  );
};
