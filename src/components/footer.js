import React from "react";
import { CiMail } from "react-icons/ci";
import { Link } from "react-router-dom";


function ContactInfo(){
  return(
    <>
      {/* contact info at bottom */}
      <div className=" px-[calc(calc(100%-600px)/2)] flex justify-around pb-16 pt-10 bg-lightBgDark">
        <div>
          <div className="text-l">
            Email
          </div>
          <div className="text-sm">
            cravanconstruction@gmail.com
          </div>
        </div>
        <div>
          <div className="text-l">
            Phone
          </div>
          <div className="text-sm">
            519-400-2222
          </div>
        </div>
        <div>
          <div className="text-l">
            Socail
          </div>
          <div className="text-sm">
            Instagram
          </div>
        </div>
      </div>
    </>
  );
}

function ContactLink(){
  return(
    <>
      <div className="flex flex-col items-center space-y-5 py-10 pb-10">
        <div className="text-3xl inline-block">
          We can help build your project!
        </div>
        <div>
          Reach out
        </div>

        {/* contact button */}
        <Link className="p-4 bg-highlight w-32" to="/contact"> 
          Contact us <CiMail className="inline-block"/>
        </Link>
      </div>
    </>
  )
}


function Footer({halfFooter}){
  return(
    <>
      {!halfFooter ? <ContactLink/> : null}
      <ContactInfo/>
    </>
  );
}


export default Footer;