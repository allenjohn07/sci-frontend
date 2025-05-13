import React from "react";
import Departments from "./departments";

const TeamComponent = () => {
  
  return (
    <div className="container px-4 md:px-8 py-8 md:py-14 text-blue-gray-900 min-h-screen">
        <h1 className="mb-6 border-b md:text-center pb-2 text-3xl font-semibold tracking-tight first:mt-0">
        Our Team
      </h1>
        <Departments/>
    </div>
  );
};

export default TeamComponent;
