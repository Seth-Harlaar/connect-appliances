import React from "react";


function PageBanner ({title, description, isSmallScreen}) {
  const heightAndPadding = isSmallScreen ? ' h-[300px] ' : ' h-[420px] ';
  return (
    <>
      <div className={"bg-highlight px-12 flex flex-col justify-end pb-10" + heightAndPadding}>
        <div className="text-6xl">
          {title}
        </div>
        <div className="text-2xl">
          {description}
        </div>
      </div>
    </>
  );
}

export default PageBanner;