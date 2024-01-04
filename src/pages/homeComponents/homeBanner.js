import React, { useEffect, useMemo, useState } from "react";


import homePic from "../../assets/pictures/portfolioPics/project_3/pic_2.jpg"

function HomeBanner ({isSmallScreen}) {
  const brands = useMemo(() => ["Thermador", "Subzero", "Gaggenau", "Liebhurr", "premium"], []);

  const [currentWord, setCurrentWord] = useState("Premium");
  const [currentIndex, setCurrentIndex] = useState(brands.length-1);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % brands.length);
    }, 2500);

    return () => clearInterval(interval);
  }, [brands.length]);

  useEffect(() => {
    setCurrentWord(brands[currentIndex]);
  }, [currentIndex, brands]);


  // const padding = isSmallScreen ? ' pt-[20px] ' : ' pt-[180px] ';

  return(
    <>
      <div className={"bg-tertiaryBg h-[90vh] w-full flex "}>

        {/* make 'premium' word cycling between all the different brands they serve */}

        <div className="w-1/2 h-full flex flex-col justify-center px-10 ">
          <div className="text-white w-full max-w-[650px] m-auto text-4xl">
            <div className="">
              One stop for in-home,
            </div>
            <div className="text-center text-highlight">
              {currentWord}
            </div>
            <div className="text-right">
              appliance services.
            </div>
          </div>

        </div>
        <img src={homePic} alt="stove" className="h-full w-1/2 object-cover"/>
        
      </div>
    </>
  )
}

export default HomeBanner;


// {/* floating textbox */}
// <div className="absolute h-20 w-[300px] bottom-10 left-10 bg-lightBg px-3 flex flex-col justify-center opacity-100">
// <div className="text-lg">
//   Installing Peace of Mind.
// </div>

// {/* floating portfolio button */}
// <Link to="/portfolio"
//     className="absolute bottom-0 right-5 translate-y-2/3 
//     bg-highlight py-1 px-2 flex items-center hover:cursor-pointer 
//     hover:bg-highlightHover">
//   <div className="mr-2 text-highlightText">
//     View Portfolio
//   </div>
//   <FaArrowRight className="text-highlightText"/>
// </Link>
// </div>