import React from "react";
import TeamOne from "../components/Team";

function Team() {
  return (
    <div id="team" className="relative">
      <div className="blur1 bg-[#B1C6FF] w-full blur-[35px] absolute top-0 md:top-[-50px] h-[85px]"></div>
      <div className="blur2 bg-[#879edc] left-[50%] translate-x-[-50%] w-[120%] blur-[15px] absolute bottom-[-50px] z-10 h-[85px]"></div>
      <div className="md:bg-team h-full pt-24 pb-52 bg-cover bg-no-repeat">
        <h1 className="text-center font-irish-grover text-4xl tracking-wide mb-12 text-white uppercase">
          Meet the team
        </h1>
        <div className="md:max-w-[90%] mx-auto w-full flex md:flex-row flex-col items-center md:space-x-4 justify-between mt-24">
          <TeamOne
            img="/img/team1.png"
            background="/img/teamBg2.png"
            name="Chief Bunny"
            desc="Founder & Marketing"
          />
          <TeamOne
            img="/img/team2.png"
            background="/img/teamBg2.png"
            name="Astro Bunny"
            desc="Admin & Community engagement specialist"
          />
          <TeamOne
            img="/img/logo.png"
            background="/img/teamBg3.png"
            name="Ninja Bun"
            desc="Marketing & Socials"
          />
        </div>
      </div>
    </div>
  );
}

export default Team;
