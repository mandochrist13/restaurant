import Image from "next/image";
import Mets from "../../components/Mets";
export default function Page() {
  return (
    <section
      style={{ backgroundImage: "url(/assets/bgm.png)" }}
      className="space-y-15 bg-cover bg-center "
    >
      <div className="flex flex-col justify-center w-full items-center">
        <Image
          src="/assets/fourche.png"
          alt="food"
          width={1000}
          height={1000}
          className="w-[40%] rounded-lg object-cover"
        />
        <h1 className="text-[#DC2626] text-5xl md:text-7xl font-bold">Menu</h1>
      </div>
      <Mets image={"/assets/plat3.png"} text1={"lorem ipsum dolor sit amet, consectetur adip"} text2={"lorem ipsum dolor sit amet, consectetur adip"} text3={"lorem ipsum dolor sit amet, consectetur adip"}/>
      <div className="space-y-5 ">
      <div className="md:flex md:flex-row-reverse justify-between items-center">
        <div className=" md:w-[50%]">
          <Image
            src="/assets/plat2.png"
            width={650}
            height={650}
            alt="img"
            className="rounded-xl h-auto w-full"
          />
        </div>
        <div className="md:mr-[5%] flex-col space-y-4 px-3 justify-center items-center ">
        
          <p className="md:text-[10px] rounded p-3 text-center bg-[#DC2626] lg:text-[18px] text-white">
          lorem ipsum dolor sit amet, consectetur adip
          </p>
          <p className="md:text-[10px] rounded p-3 text-center bg-[#DC2626] lg:text-[18px] text-white">
          lorem ipsum dolor sit amet, consectetur adip
          </p>
          <p className="md:text-[10px] rounded p-3 text-center bg-[#DC2626] lg:text-[18px] text-white">
            lorem ipsum dolor sit amet, consectetur adip
          </p>
        </div> 
      </div>
      <div className="bg-[#DC2626] w-[70%] rounded-r-md p-2"></div>
    </div>
      <Mets image={"/assets/plat1.png"} text1={"lorem ipsum dolor sit amet, consectetur adip"} text2={"lorem ipsum dolor sit amet, consectetur adip"} text3={"lorem ipsum dolor sit amet, consectetur adip"}/>
    </section>
  );
}
