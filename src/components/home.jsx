import React, { useEffect } from "react";
import YouTube from "react-youtube";
import Competitions from "./competitions";
import { MoreLinks } from "./links";

const HomeComponent = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const opts = {
    height: "400",
    width: "100%",
    playerVars: {
      autoplay: 0,
    },
  };
  

  return (
    <div className="container max-w-screen-lg mx-auto px-4 md:px-8 py-8 md:py-14 space-y-5 md:space-y-10 text-blue-gray-900">
      <h2 className="scroll-m-20 border-b pb-2 text-3xl text-center font-semibold tracking-tight first:mt-0">
        SpeedCubers India <br />
        <span className="scroll-m-20 mb-10 border-b pb-2 text-2xl font-semibold tracking-tight first:mt-0">
          WCA Regional Organisation
        </span>
      </h2>
      <div className="w-full px-0 md:px-20">
        <YouTube opts={opts} videoId="LEoC2Rw2D7Y" />
      </div>
      <div>
        <Competitions />
      </div>
      <MoreLinks />
    </div>
  );
};

export default HomeComponent;
