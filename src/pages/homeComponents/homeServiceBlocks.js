import React, { useContext } from "react";
import {ScreenContext} from "../../providers/screenProvider";
import serviceListingsInfo from "../../assets/content/homeServicesContent";
import oven from "../../assets/icons/oven.png";
import {widthMax} from "../../utils/globals";

function ServiceListing({title, Icon, picture }){
  // const serviceListingWidth = isSmallScreen ? " w-full " : " w-[300px] ";
  const serviceListingWidth = `  `;

  return(
    <>
      {/* service listing */}
      <div className={serviceListingWidth + 
          "flex-none flex flex-col items-center px-2 pt-6 hover:scale-[1.2] ease-in-out duration-200 "}>
        
        <img src={oven} alt="icon" className=" w-16 h-16"/>

        <div className="text-xl text-center py-3">
          {title}
        </div>
      </div>
    </>
  );
}



function HomeServiceBlocks () {
  
  const {isSmallScreen, isLrgSCreen, isMegaScreen} = useContext(ScreenContext);
  
  let serviceListingContainer = !isLrgSCreen ? 
    " grid grid-cols-2 " :
    " grid grid-cols-3 ";

  if(isMegaScreen){
    serviceListingContainer = ` flex justify-around max-w-[${widthMax}px] m-auto `;
  }

  return(
    <>
      {/* framing, additions, renovations */}
      <div className="pt-10 pb-20">
        <div className="text-3xl text-center">
          Our Services
        </div>

        <div className=" w-3/4 m-auto text-center pt-4">
          We specialize in providing expert in-home repair or replacement services for a wide range of Samsung and LG household appliances, including refrigerators, washers, dryers, ovens, and microwave, ensuring efficient and reliable solutions to keep your appliances running smoothly.
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