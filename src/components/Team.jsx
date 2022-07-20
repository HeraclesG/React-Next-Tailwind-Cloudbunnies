import React from "react";

function TeamOne({ name, desc, img }) {
  return (
    <div
      data-aos="fade-down"
      data-aos-duration="800"
      className="w-full mb-12 px-3"
    >
      <h1 className="text-center text-lg font-irish-grover text-white w-full">
        {name}
      </h1>
      <div className="relative mt-8 flex flex-col items-center">
        <img src={img} className="w-40 -top-2 z-10" />
        <div className="h-[200px] -mt-[20%] w-full flex items-center justify-center relative px-6 bg-teamTwo bg-center bg-cover">
          <i className="ri-twitter-fill bg-blue-500 w-6 h-6 flex absolute left-[22%] top-[27%] justify-center items-center p-1 rounded-[50%] text-white text-sm"></i>
          <span className="text-[#82A5EF] w-[80%] mx-auto text-center mt-2 font-irish-grover text-xl">
            {desc}
          </span>
        </div>
      </div>
    </div>
  );
}

export default TeamOne;
