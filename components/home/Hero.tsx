import React from "react";

import Bg from "@/assets/img/bg.jpeg";
import Image from "next/image";
import { secondary } from "@/app/fonts";

const Hero = () => {
  return (
    <div>
      <div className="hidden md:flex md:relative">
        <Image src={Bg} alt="bg" className="opacity-50 blur-sm" />
        <div className="top-1/2 left-1/2 text-center absolute -translate-x-1/2 -translate-y-3/4 uppercase flex flex-col w-screen justify-center">
          <p className="mb-2 text-7xl ">Lyallpur Khalsa College</p>
          <p className="mb-5 text-2xl ">(jalandhar)</p>
          <p className={`text-xl normal-case ${secondary.className}`}>
            Over <span className="bg-primary text-white p-1 rounded-md">100 years</span> of
            Selfless Service to{" "}
            <span className="bg-secondary p-1 rounded-md">Humanity</span>.{" "}
          </p>
        </div>
      </div>
      <div className="overflow-hidden md:hidden">
        <Image src={Bg} alt="bg" className="" />
        <div className="uppercase flex flex-col mt-5 items-center justify-center">
          <p className="mb-2 text-2xl ">Lyallpur Khalsa College</p>
          <p className="mb-5 text-md ">(jalandhar)</p>
          <p className={`normal-case pb-2`}>
            Over <span className="bg-primary text-white p-1 rounded-md">100 years</span> of
            Selfless Service to{" "}
            <span className="bg-secondary p-1 rounded-md">Humanity</span>{" "}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Hero;
