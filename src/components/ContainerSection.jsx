import React from "react";
import { GrTechnology } from "react-icons/gr";
import { DiAndroid } from "react-icons/di";
import { GrWebcam } from "react-icons/gr";
import { SiApple } from "react-icons/si";
import { FcBiotech } from "react-icons/fc";

const ContainerSection = () => {
  return (
    <section className="p-10 text-center m-auto flex flex-col">
      <div>
        <h3 className="text-blue-600 border-l-2 border-blue-600">WE OFFER BEST IT SERVICES</h3>
        <p className="font-bold">
          Easy Solutions for all Difficult IT Problems
        </p>
      </div>

      <div className="flex m-auto items-center gap-4">
        <GrTechnology />
        <h3 className="text-blue-600">Technology Index</h3>
      </div>

      <div className="flex flex-col  md:flex-row md:justify-center gap-4 md:gap-8   my-5">
        <div className="flex flex-col my-3 h-[200px] justify-center items-center gap-4 border-2 bg-slate-50 md:w-48 p-5 md:p-7 rounded transition duration-500 hover:bg-blue-600 hover:text-white hover:border-blue-500">
          <GrWebcam />
          <p>Web</p>
        </div>

        <div className="flex flex-col my-3 h-[200px]  justify-center items-center gap-4 border-2 bg-slate-50 md:w-48 p-5 md:p-7 rounded transition duration-500 hover:bg-blue-600 hover:text-white hover:border-blue-500">
          <DiAndroid />
          <p>Android Apps</p>
        </div>

        <div className="flex flex-col my-3 h-[200px]  justify-center items-center gap-4 border-2 bg-slate-50 md:w-48 p-5 md:p-7 rounded transition duration-500 hover:bg-blue-600 hover:text-white hover:border-blue-500">
          <SiApple />
          <p>Ios Apps</p>
        </div>

        <div className="flex flex-col my-3 h-[200px]  justify-center items-center gap-4 border-2 bg-slate-50 md:w-48 p-5 md:p-7 rounded transition duration-500 hover:bg-blue-600 hover:text-white hover:border-blue-500">
          <FcBiotech />
          <p>Iot Program</p>
        </div>
      </div>
    </section>
  );
};

export default ContainerSection;
