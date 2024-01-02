import React from "react";

import serviceListingsInfo from "../../assets/content/homeServicesContent";


function ServiceListing({title, text, Icon, isSmallScreen}){
  const serviceListingWidth = isSmallScreen ? " w-full " : " w-[300px] ";

  return(
    <>
      {/* service listing */}
      <div className={serviceListingWidth + 
          "flex flex-col items-center px-10 pt-16 hover:scale-[1.2] ease-in-out duration-200 "}>
        <div className=" bg-highlight rounded-full p-5">
          <Icon className="h-10 w-10 text-darkBg"/>
        </div>

        <div className="text-2xl text-center py-3">
          {title}
        </div>
        <div className="text-justify">
          {text}
        </div>
      </div>
    </>
  );
}



function HomeServiceBlocks ({isSmallScreen}) {
  
  const serviceListingContainer = !isSmallScreen ? 
    "flex flex-wrap justify-center" :
    "";

  return(
    <>
      {/* framing, additions, renovations */}
      <div className="pt-10 pb-20">
        <div className="text-3xl text-center">
          Our Services
        </div>


        <div className={serviceListingContainer}>
          {/* map each service listing */}
          {serviceListingsInfo.map((service, index) => {
            return(
              <>
                <ServiceListing key={index}
                  title={service.title} text={service.text} Icon={service.icon} 
                  isSmallScreen={isSmallScreen}/>
              </>
            )
          })}
        </div>
      </div>
    </>
  )
}

export default HomeServiceBlocks;