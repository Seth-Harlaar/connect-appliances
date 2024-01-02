import React, { useContext } from "react";

import PictureSlider from "./pictureSlider";
import { ModalContext } from "../../providers/modalProvder";

// info
function ProjectGallery({projectInfo}){

  return(
    <>
      <div className="pt-32">
        <PictureSlider imageList={projectInfo.imageList}/>
        <div>
          <div className={ " max-w-screen-lg w-8/12 m-auto text-justify "}>
            <div className="uppercase pt-16">
              {projectInfo.shortDesc}
            </div>
            <div className="text-3xl py-5">
              {projectInfo.title}
            </div>
            <div className={" text-justify "}>
              {projectInfo.longDesc}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default ProjectGallery;