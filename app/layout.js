
import localFont from "next/font/local";
import "./globals.css";
import Nav  from "../components/Nav";
import  Footer  from "../components/Footer";



const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata = {
  title: "Saveur Bantu",
  description: "Partenaire de vos papilles gustative...",
};

export default function RootLayout({ children }) {

  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <div className="bg-white w-full min-h-svh">
          <Nav />
          {children}
          <Footer />
        </div>
      </body>
    </html>
  );
}
