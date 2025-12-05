import Image from "next/image";
import React from "react";
import logo from "@/public/logo.png";

function Head() {
  return (
    <div className=" border-black border w-[1000px] h-[150px] flex items-center justify-around mx-auto">
      <div>
        <Image src={logo} alt="logo" width={80} height={80} />
      </div>
      <div className="">
        <h2 className="text-red-600 font-bold text-4xl">PROTEGE SCHOOLS</h2>
        <h4 className="text-center">2, Kola Rewire St, Ejigbo, Lagos</h4>
        <h5 className="text-center">+234 708 903 0732</h5>
        <p className="text-center  text-blue-400">
          protegeacademyconsult@gmail.com
        </p>
      </div>
    </div>
  );
}

export default Head;
