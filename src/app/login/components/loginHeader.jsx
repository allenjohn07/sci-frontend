import React from "react";

const LoginHeader = () => {
  return (
    // Left portion with heading
    <div className="flex flex-1 items-center justify-center p-8 md:p-12 border-r-0 md:border-r border-b md:border-b-0">
      <div className="max-w-md space-y-4 text-center">
        <h1 className="text-3xl font-bold tracking-tight md:text-4xl">
          Login to <br /> Speedcubers India
        </h1>
      </div>
    </div>
  );
};

export default LoginHeader;
