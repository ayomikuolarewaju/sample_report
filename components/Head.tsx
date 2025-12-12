import Image from "next/image";
import logo from "@/public/logo.png";

function Head() {
  return (
    <div className=" border-black border m-1 lg:w-[1000px] w-[500px] lg:h-[100px] lg:flex items-center justify-center lg:justify-around mx-auto text-xs">
      <div className="text-center flex justify-center items-center">
        <Image src={logo} alt="logo" width={80} height={80} />
      </div>
      <div className="">
        <h2 className="text-red-600 font-bold text-sm text-center ">
          PROTEGE SCHOOLS
        </h2>
        <h4 className="text-center text-xs">
          2, Kola Rewire St, Ejigbo, Lagos
        </h4>
        <h5 className="text-center text-xs">+234 708 903 0732</h5>
        <p className="text-center  text-blue-400 text-xs">
          protegeacademyconsult@gmail.com
        </p>
      </div>
    </div>
  );
}

export default Head;
