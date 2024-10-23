
import { Header } from "../components/Header";
import  Story  from "../components/story";
import  Section1  from "../components/section1";
import  Section2  from "../components/section2";
import  Section3  from "../components/section3";
import  Section4  from "../components/section4";
import  Footer  from "../components/Footer";

export default function Page() {
  return (
    <div className="bg-white w-full min-h-svh">
      <Header />
      <section className="space-y-10 ">
      <Section1 />
      <div className="w-full bg-yellow-200">
      <Story />
      </div>
      
        
        {/* Ici nous avons la deuxième section */}
        <Section2 />
        {/* Ici j'ai section carousel */}
        <Section3 />
        {/* Ici j'ai une section Philosophie */}
        <Section4 />
      </section>
      <Footer />
    </div>
  );
}
