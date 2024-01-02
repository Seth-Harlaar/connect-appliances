import React from "react";


function TestimonialCard({testInfo, flipped}){

  const pictureStyles = " h-32 w-32 rounded-full ";

  const reverse = flipped ? " flex-row-reverse " : "";
  const textAlign = flipped ? " text-right " : "";

  return(
    <>
      <div className="w-9/12 m-auto">
        <div className={reverse + " flex space-x-5 text- text-sm pt-10 "}>
          <img className={pictureStyles} src={testInfo.pic} alt={"testimonial subject"}/>
          <div className="flex items-center pb-5">
            {testInfo.desc}
          </div>
        </div>
        <div className={textAlign + " w-8/12 m-auto "}>
          {testInfo.clientName}
        </div>
        <div className={textAlign + " w-5/12 m-auto italic text-sm"}>
          {testInfo.projTitle}
        </div>
      </div>
    </>
  );
}




export default TestimonialCard;