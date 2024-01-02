import React from "react";
import { FaArrowRight } from "react-icons/fa";
import { Link } from "react-router-dom";

function HomeBanner ({isSmallScreen}) {
  const padding = isSmallScreen ? ' pt-[20px] ' : ' pt-[180px] ';
  const backgroundImage = " bg-[url('./assets/pictures/garage.jpg')] bg-cover bg-center bg-no-repeat ";


  return(
    <>
      <div className={"z-0 relative bg-green-400 h-[90vh] w-full " +  backgroundImage}>
        <div className={"bg-highlightOpac h-full w-full px-12 " + padding }>
          {/* bg image */}

          {/* floating textbox */}
          <div className="absolute h-20 w-[300px] bottom-10 left-10 bg-lightBg px-3 flex flex-col justify-center opacity-100">
            <div className="text-lg">
              Crafting Dreams, Building Homes: <br/> Cravan Construction
            </div>

            {/* floating portfolio button */}
            <Link to="/portfolio"
                className="absolute bottom-0 right-5 translate-y-2/3 
                bg-highlight py-1 px-2 flex items-center hover:cursor-pointer 
                hover:bg-highlightHover">
              <div className="mr-2">
                View Portfolio
              </div>
              <FaArrowRight/>
            </Link>
          </div>
        </div>
      </div>
    </>
  )
}

export default HomeBanner;