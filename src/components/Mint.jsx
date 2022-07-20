import React, { useState } from "react";
import Image from "next/image";

function Mint() {
  const [num, setNum] = useState(1);
  const [error, setError] = useState("");
  const handleChange = (e) => {
    setNum(e.target.value);
    if (num > 2) {
      setError("Max of 2 is allowed");
      setNum(1);
    }
  };
  return (
    <div className="relative z-1 overflow-hidden -mt-[40%] sm:-mt-[30%] md:mt-[-10%] bg-mint bg-cover bg-no-repeat md:mb-24 my-12 bg-bottom pt-[40%] md:pt-[10%] pb-[5%] md:bg-mint_Web flex justify-center">
      <div
        id="mint"
        className="mt-[10%] md:max-w-[70%] w-[90%] md:flex bg-white rounded-3xl shadow-xl file:md:-mt-20"
      >
        <div className="md:p-0 p-1.5 md:w-[40%] w-full h-[300px] md:h-auto">
          <div className="relative w-full h-full">
            <Image
              alt="mint image"
              src="/img/mint.jpeg"
              layout="fill"
              className="rounded-3xl"
              objectFit="cover"
            />
          </div>
        </div>
        <div className="md:w-[60%] w-full flex flex-col py-12 md:py-16 justify-center items-center">
          <h1 className="text-xl md:text-3xl text-[#415DA7] font-irish-grover font-semibold mb-1 font-irish">
            PUBLIC SALE IS LIVE
          </h1>
          <span className="text-base font-irish-grover text-[#415DA7] mb-1 mt-10 text-center">
            please <br /> connect wallet to mint
          </span>
          <div className="md:w-[70%]  mb-2 w-[90%] flex  mx-auto mt-2 md:my-2">
            <div className="md:w-[65%] w-[60%] bg-[#B0C8EF] rounded-l-xl py-6 flex flex-col pl-6">
              <input
                type="number"
                value={num}
                min={1}
                max={2}
                step={0.1}
                onChange={handleChange}
                className="border-none font-irish-grover h-[50px] text-2xl focus:ring-2 w-[80%] focus:border-none rounded-full px-2 pl-10"
              />
              {/* <span className="text-sm text-red-500">{error && error}</span> */}
            </div>
            <div className="md:w-[35%] w-[40%] bg-[#7387D0] py-2 flex rounded-r-xl justify-center items-center">
              <span className="text-white text-2xl font-semibold font-irish-grover">
                {num * 0.01} ETH
              </span>
            </div>
          </div>
          <div className="md:w-[69%] w-[90%] mt-2 mx-auto flex items-center justify-between">
            <span className="md:text-base text-sm font-irish-grover text-[#415DA7] uppercase">
              Bunnies Balance: 0
            </span>
            <div className="md:w-[30%] w-[40%] bg-[#7387D0] py-1 flex  justify-center items-center">
              <span className="text-white text-sm text-[#B3CBF1] font-irish">
                Max Mint 2
              </span>
            </div>
          </div>
          <div className="max-w-[70%] w-full flex items-center mx-auto mt-4">
            <button className="bg-button bg-center py-4 shadow-xl bg-cover w-full text-white uppercase text-xl font-irish-grover border-none rounded-full mt-6">
              connect
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Mint;
