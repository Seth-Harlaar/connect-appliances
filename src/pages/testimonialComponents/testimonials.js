import React from "react";
import PageBanner from "../../components/pageBanner";
import TestimonialCard from "./testimonialCard";

import testimonialContent from "../../assets/content/testimonialContent";

let flipped = true;

function Testimonials() {
  return (
    <>
      <PageBanner title={"Testimonials"} description={"See what our clients say about us"}/>
      <div>
        {testimonialContent.map((test, index) => {
          flipped = !flipped;
          return(<TestimonialCard flipped={flipped} testInfo={test} key={index}/>);
        })}
        
      </div>
    </>
  );
}
  
export default Testimonials;