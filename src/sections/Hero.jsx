import React from "react";
import Navbar from "../layout/Navbar";
import Image from "next/image";

function Hero() {
  return (
    <div id="home" className="bg-no-repeat relative z-20">
      <Navbar />
      <div className="md:hidden">
        <Image
          src={"/img/heroMobile.png"}
          alt="hero image"
          width="320"
          height="360"
          layout="responsive"
        />
      </div>
      <div className="hidden md:block">
        <Image
          src={"/img/hero.png"}
          alt="hero image"
          width="1440"
          height="1050"
          layout="responsive"
        />
      </div>

      <div className="absolute top-[23%] md:top-[15%] w-full flex justify-center">
        <h1
          data-aos="fade-left"
          className="text-4xl hero-text font-irish-grover justify-center text-transparent lg:my-12 md:text-6xl lg:text-8xl bg-clip-text font-extrabold bg-gradient-to-b from-[#FF96B3] to-[#85A5DF] flex items-center"
        >
          CLOUDBUNNIES
        </h1>
      </div>
    </div>
  );
}

export default Hero;
