import { useState, useEffect } from "react";
import Icon from "../components/Icon";
import { Link as LinkS } from "react-scroll";

function Navbar() {
  const [show, setShow] = useState(false);
  useEffect(() => {
    if (show) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
  }, [show]);
  return (
    <>
      <nav className="py-12 hidden lg:block absolute w-full z-10">
        <div className="max-w-[85%] px-12 mx-auto w-full bg-[#AAC1E9] justify-between flex items-center shadow-lg top-0 z-10 rounded-[2rem]">
          <div className="py-4 w-[40%] justify-self-start flex justify-between">
            <LinkS
              activeClass="active"
              to="home"
              onClick={() => setShow(false)}
              smooth={true}
              duration={500}
              offset={-84}
              spy={true}
              exact="true"
              className="uppercase font-irish-grover text-base text-blue-500"
            >
              <span className="text-[#4965AF] cursor-pointer">Home</span>
            </LinkS>
            <LinkS
              activeClass="active"
              to="mint"
              onClick={() => setShow(false)}
              smooth={true}
              duration={500}
              offset={-84}
              spy={true}
              exact="true"
              className="uppercase font-irish-grover text-base text-blue-500"
            >
              <span className="text-[#4965AF] cursor-pointer">Mint NFT</span>
            </LinkS>
            <LinkS
              activeClass="active"
              to="map"
              onClick={() => setShow(false)}
              smooth={true}
              duration={500}
              offset={-84}
              spy={true}
              exact="true"
              className="uppercase font-irish-grover text-base text-blue-500"
            >
              <span className="text-[#4965AF] cursor-pointer">Roadmap</span>
            </LinkS>
            <LinkS
              activeClass="active"
              to="team"
              onClick={() => setShow(false)}
              smooth={true}
              duration={500}
              offset={-84}
              spy={true}
              className="uppercase font-irish-grover text-base text-blue-500"
              exact="true"
            >
              <span className="text-[#4965AF] cursor-pointer">Team</span>
            </LinkS>
            <LinkS
              activeClass="active"
              to="faq"
              onClick={() => setShow(false)}
              smooth={true}
              duration={500}
              offset={-84}
              spy={true}
              exact="true"
              className="uppercase font-irish-grover text-base text-blue-500"
            >
              <span className="text-[#4965AF] cursor-pointer">Faq</span>
            </LinkS>
          </div>

          <img src="/img/logo.png" className="w-24 absolute left-[50%]" />

          <div className="py-3 w-[23%] justify-self-end  content-end flex justify-between">
            <Icon icon="/img/iconL.png" />
            <Icon icon="/img/iconsT.png" />
            <Icon icon="/img/icong.png" />
            <Icon icon="/img/iconD.png" />
          </div>
        </div>
      </nav>
      <nav className="lg:hidden z-10 absolute w-full">
        <div
          className={`${
            show
              ? "w-full h-screen fixed  bg-[rgba(0,0,0,0.3)] lg:bg-transparent "
              : "w-full"
          } duration-300`}
        >
          <div className="lg:hidden py-6 flex items-center justify-between max-w-[90%] mx-auto ">
            <div className="flex w-14 items-center">
              <img src="/img/logo.png" alt="logo" className="w-full" />
            </div>
            <i
              className={` ${
                show ? "ri-close-line" : "ri-menu-line"
              } text-4xl font-semibold text-white`}
              onClick={() => setShow(!show)}
            ></i>
          </div>
          <div
            className={`items-start justify-center rounded-xl  px-6 flex-col py-6 shadow-xl w-[90%] mx-auto z-[100] flex bg-[#f8f8f8] ${
              show ? "translate-y-0 " : "-translate-y-[150%] "
            } duration-300`}
          >
            <LinkS
              activeClass="active"
              to="home"
              onClick={() => setShow(false)}
              smooth={true}
              duration={500}
              offset={-84}
              spy={true}
              exact="true"
              className="uppercase mb-2 py-2 font-irish-grover text-base text-[#4965AF] tracking-wider"
            >
              <span className="text-[#4965AF] cursor-pointer">Home</span>
            </LinkS>
            <LinkS
              activeClass="active"
              to="mint"
              onClick={() => setShow(false)}
              smooth={true}
              duration={500}
              offset={-84}
              spy={true}
              exact="true"
              className="uppercase mb-2 py-2 font-irish-grover text-base text-[#4965AF] tracking-wider"
            >
              <span className="text-[#4965AF] cursor-pointer">Mint NFT</span>
            </LinkS>
            <LinkS
              activeClass="active"
              to="map"
              onClick={() => setShow(false)}
              smooth={true}
              duration={500}
              offset={-84}
              spy={true}
              exact="true"
              className="uppercase mb-2 py-2 font-irish-grover text-base text-[#4965AF] tracking-wider"
            >
              <span className="text-[#4965AF] cursor-pointer">Roadmap</span>
            </LinkS>
            <LinkS
              activeClass="active"
              to="team"
              onClick={() => setShow(false)}
              smooth={true}
              duration={500}
              offset={-84}
              spy={true}
              className="uppercase mb-2 py-2 font-irish-grover text-base text-[#4965AF] tracking-wider"
              exact="true"
            >
              <span className="text-[#4965AF] cursor-pointer">Team</span>
            </LinkS>
            <LinkS
              activeClass="active"
              to="faq"
              onClick={() => setShow(false)}
              smooth={true}
              duration={500}
              offset={-84}
              spy={true}
              exact="true"
              className="uppercase mb-2 py-2 font-irish-grover text-base text-[#4965AF] tracking-wider"
            >
              <span className="text-[#4965AF] cursor-pointer">Faq</span>
            </LinkS>
            <div className="flex items-center w-[60%] mx-auto  justify-between">
              <Icon icon="/img/iconL.png" />
              <Icon icon="/img/iconsT.png" />
              <Icon icon="/img/icong.png" />
              <Icon icon="/img/iconD.png" />
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
