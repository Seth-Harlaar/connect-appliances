import React from "react";

// pictures
import additions_1 from "../../assets/pictures/homePortPics/additions_1.jpg";
import renovations_1 from "../../assets/pictures/homePortPics/renovations_1.jpg";
import framing_1 from "../../assets/pictures/homePortPics/framing_1.jpg";
import { FaArrowRight } from "react-icons/fa";
import { Link } from "react-router-dom";


function PortImage({picture, isSmallScreen}){
  const photoDimensions = isSmallScreen ? " w-full h-[400px] " : " w-[300px] h-[200px] ";
  const photoStyle = `object-cover ${photoDimensions} `;

  return (
    <>
      <div className="relative group mt-5">
        <img src={picture} alt="portfolio pic" className={photoStyle}/>
        <div className="hover:bg-drawerClearBg h-full w-full absolute top-0 left-0">
          <div className="invisible group-hover:visible absolute bottom-10 left-10">
            explanation text
          </div>
        </div>
      </div>
    </>
  )
}


function HomePort({isSmallScreen}) {
  // styles
  const galleryFlex = isSmallScreen ? " flex flex-col px-10 " : "flex flex-wrap justify-center px-2 space-x-4";
  const picList = [framing_1, additions_1, renovations_1, ];

  return (
    <>
      <div className="flex flex-col items-center py-8 bg-darkBg text-white">
        <div className="text-3xl ">
          Our Work
        </div>
        <div className="text-">
          Explore some of our projects.
        </div>

        {/* pictures */}
        <div className="w-full ">
          <div className={galleryFlex + " w-full "}>
              {/* create a picture for each in the list */}
              {picList.map((picture, index) => {
                return(<PortImage picture={picture} isSmallScreen={isSmallScreen} key={index}/>)
              })}
          </div>
        </div>

        {/* bottom message */}
        <div className="pt-8 px-5 flex text-center">
          <div className="text-xl text-white">
            See what else we can do in the <Link to="/portfolio"><span className="hover:bg-highlight pb-1">
                portfolio
                <FaArrowRight className="text-darkBg inline ml-2"/>
              </span>
            </Link>
          </div>
        </div>
        
      </div>
    </>
  )
}


export default HomePort;