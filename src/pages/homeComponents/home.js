import React from "react";
import HomeServiceBlocks from "./homeServiceBlocks";
import HomeBanner from "./homeBanner";
import HomePort from "./homePort";

function Home({isSmallScreen}) {
  return (
    <div>
      <HomeBanner/>
      <HomeServiceBlocks isSmallScreen={isSmallScreen}/>
      <HomePort isSmallScreen={isSmallScreen}/>
    </div>
  );
}

export default Home;