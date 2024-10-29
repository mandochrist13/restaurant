import Image from "next/image";
export default function Mets({image, text1, text2, text3}) {
  return (
    <div className="space-y-5">
      <div className="md:flex justify-between items-center">
        <div className=" md:w-[50%]">
          <Image
            src={image}
            width={650}
            height={650}
            alt="img"
            className="rounded-xl h-auto w-full"
          />
        </div>
        <div className=" flex-col space-y-4 justify-center items-center ">
        
          <p className="md:text-[10px] rounded md:rounded-l-xl md:rounded-none p-3 text-center bg-[#DC2626] lg:text-[18px] text-white">
            {text1}
          </p>
          <p className="md:text-[10px] rounded md:rounded-l-xl md:rounded-none p-3 text-center bg-[#DC2626] lg:text-[18px] text-white">
            {text2}
          </p>
          <p className="md:text-[10px] rounded md:rounded-l-xl md:rounded-none p-3 text-center bg-[#DC2626] lg:text-[18px] text-white">
            {text3}
          </p>
        </div> 
      </div>
      <div className="bg-[#DC2626] w-[70%] rounded-r-md p-2"></div>
    </div>
  );
}
