import React, { useEffect } from "react";
import Competitions from "./competitions";
import { MoreLinks } from "./links";
import { InstagramEmbed } from "./InstagramEmbed";

export const HomeComponent = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="container max-w-screen-lg mx-auto px-4 md:px-8 py-8 md:py-14 space-y-5 md:space-y-10 text-blue-gray-900">
      <h2 className="scroll-m-20 border-b pb-2 text-3xl text-center font-semibold tracking-tight first:mt-0">
        SpeedCubers India <br />
        <span className="scroll-m-20 mb-10 border-b pb-2 text-2xl font-semibold tracking-tight first:mt-0">
          WCA Regional Organisation
        </span>
      </h2>
      <div className="w-full flex justify-center">
        <InstagramEmbed
          postUrl="https://www.instagram.com/p/C4Yf-CqS7q2/"
          caption={true}
        />
      </div>
      <div>
        <Competitions />
      </div>
      <MoreLinks />
    </div>
  );
};
