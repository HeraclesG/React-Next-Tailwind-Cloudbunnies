import React from "react";
import MapItem from "../components/MapItem";

function Roadmap() {
  return (
    <div id="map" className="md:my-16">
      <h1 className="text-white text-3xl font-semibold font-irish-grover my-8 md:my-12 text-center">
        {" "}
        Cloudbunnies roadmap{" "}
      </h1>
      <div className="flex flex-col md:max-w-[80%] mx-auto w-full relative">
        <div className="absolute left-4 md:left-[49%]  bg-white w-2 md:w-4 rounded-md h-full md:h-[97%] mt-3"></div>
        <MapItem
          inverse={false}
          id="01]"
          title="Overview"
          desc="Alpha group. Building a project around the community and with the community. Expect NFT airdrops. No far fetched and unreasonable promises. As holder you will be contributing to a greater cause. Under promise over deliver."
        />
        <MapItem
          inverse={true}
          id="02]"
          title="The Burn Reval"
          desc="48 hours (time is subject to change) after we sell out. We will start our giveaways on the holders channel. (More on this will be explained below). Shortly after selling out you will also be able to check the rank of your bunnies on sites such as RaritySniper."
        />
        <MapItem
          inverse={false}
          id="03]"
          title="Children Charity Donation"
          desc="Once the mint is complete, we will be donating a certain percentage (e.g. 10%) of our primary mint sales to UNICEF in aiding children all over the world. However, should we sell out, we will be donating 15% of our entire sales. The money donated will be used by UNICEF to provide humanitarian support to countries in dire need of assistance (e.g. Children in Ukraine)"
        />
        <MapItem
          inverse={true}
          id="04]"
          title="Secret airdrop for holders"
          desc="Once the mint is complete, we will be creating a holder-only area in our discord where we will offer whitelist spot opportunities for upcoming projects which we believe may have potential, these whitelist spots will be designated for our holders via raffles, games and much more. No far fetched and unreasonable promises."
        />
        <MapItem
          inverse={false}
          id="05]"
          title="Secret airdrop for holders"
          desc="Not going to reveal too much details and emphasis on this subject as we want to surprise our cloud bunnies NFT holders with airdrops! "
        />{" "}
      </div>
    </div>
  );
}
export default Roadmap;
