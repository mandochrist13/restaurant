"use client"

import Image from 'next/image';


const Preloader = () => {
    
  return (
    <div className="fixed top-0 left-0 right-0 bottom-0 bg-white z-50 flex items-center justify-center">
  <div className="relative flex items-center justify-center flex-col">
    {/* Cercle de chargement */}
    <div className="w-[200px] h-[200px] border border-yellow-400 border-t-3 rounded-full animate-spin absolute top-0 "></div>
    {/* Logo */}
    <div className="mt-[40px] text-[24px] text-center">
      <Image src="/assets/logo.png" alt="Logo" width={100} height={100} />
    </div>
  </div>
</div>

  );
};

export default Preloader;
