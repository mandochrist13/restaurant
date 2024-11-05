
import localFont from "next/font/local";
import "./globals.css";



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
    <html lang="fr">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
      
        <div className="bg-white w-full min-h-svh">
          
          {children}
          
        </div>
      </body>
    </html>
  );
}
