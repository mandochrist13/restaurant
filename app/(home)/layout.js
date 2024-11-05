
import { Inter } from "next/font/google";
import dynamic from "next/dynamic";
// import "@/app/globals.css";
import Nav  from "../../components/Nav";
import  Footer  from "../../components/Footer";



const inter = Inter({ subsets: ["latin"] });


export const metadata = {
  title: "Saveur Bantu",
  description: "Partenaire de vos papilles gustative...",
};

export default function RootLayout({ children }) {
  return (
    <div className="bg-white w-full min-h-svh">
          <Nav />
          {children}
          <Footer />
        </div>
  );
}