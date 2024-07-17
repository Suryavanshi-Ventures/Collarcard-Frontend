import React from "react";

const BGContainer = ({ children }) => {
  return (
    <div className="relative  mt-10 h-[820px] lg:h-[780px] md:pr-2 lg:pr-0 md:h-[504px] overflow-hidden w-full ">
      <div className="absolute w-[106%] h-full lg:h-[80%] bg-gray-100 transform -rotate-2  bottom-[50px] -left-3 flex justify-center items-center">
        <div className="w-full h-[80%] rotate-[1.5deg]">
          <div className="container mx-auto  max-w-screen-xl min-h-screen">
            {children}
          </div>
        </div>
      </div>
    </div>
  );
};

export default BGContainer;
