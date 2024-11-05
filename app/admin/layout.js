"use client"
// import SideBar from "./component/sidebar";
// import Navbar from "./component/navbar";
import { usePathname } from "next/navigation";

export default function RootLayout({ children }) {
  const pathname = usePathname();

  return (
    <div className="bg-[#D7D7D7] h-svh">
      {pathname.startsWith("/admin/login") ? (
        children // Pas de layout global pour /auth
      ) : (
        <div className="flex flex-col md:flex-row md:h-full overflow-hidden">
          <div className=" hidden md:w-1/4 md:flex overflow-y-auto h-full py-5 rounded-r-lg justify-around w-full max-w-[300px] bg-[#7AA6E3]">
            {/* <SideBar /> */}
          </div>
          <div className="md:w-3/4 flex-col w-full lg:w-full">
            {/* <Navbar /> */}
            <div className="hidden md:flex">{children}</div>
          </div>
          <div className="flex md:hidden">{children}</div>
        </div>
      )}
    </div>
  );
}
