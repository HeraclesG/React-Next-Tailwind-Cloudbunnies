import React from "react";

const MapItem = ({ inverse, id, title, desc }) => {
  return (
    <div
      className={` relative w-full flex flex-row items-center md:ml-0 justify-between ${
        inverse ? "flex-row-reverse" : "flex-row"
      }`}
    >
      <img
        src="/img/dummy.png"
        className={`w-10 md:w-12 absolute left-0 md:left-[47.5%] top-0`}
        data-aos="fade-up"
        data-aos-duration="1000"
      />
      <div
        className={`md:basis-[50%]  ml-6 md:ml-0 py-3`}
        data-aos="fade-up"
        data-aos-duration="800"
      >
        <div className="bg-[#7387D0] text-left w-full max-w-[90%] md:max-w-[90%] mx-auto rounded-md p-4 md:p-6">
          <h1 className="text-white text-xl font-irish-grover">
            {id} {title}
          </h1>
          <div className="mt-4 text-white text-base font-irish-grover">
            {desc}
          </div>
        </div>
      </div>
      <div
        className="flex hidden  basis-[50%] p-3  md:flex items-center justify-center"
        data-aos={inverse ? "fade-right" : "fade-left"}
        data-aos-duration="800"
      >
        <img
          src={inverse ? "/img/left.png" : "/img/right.png"}
          className="w-32"
        />
      </div>
    </div>
  );
};

export default MapItem;
