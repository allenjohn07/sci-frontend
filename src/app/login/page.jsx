import React from "react";
import { Button } from "@/components/ui/button";

const LoginPage = () => {
  const handleLogin = async () => {
    window.location.replace("http://localhost:4000/api/auth/login");
  };

  return (
    <div className="flex flex-col md:flex-row px-5 md:px-0">
      {/* Left portion with heading */}
      <div className="flex flex-1 items-center justify-center p-8 md:p-12 border-r-0 md:border-r border-b md:border-b-0">
        <div className="max-w-md space-y-4 text-center">
          <h1 className="text-3xl font-bold tracking-tight md:text-4xl">
            Login to <br /> Speedcubers India
          </h1>
        </div>
      </div>
      {/* Right portion with WCA login button */}
      <div className="flex flex-1 items-center justify-center p-8 md:p-12">
        <div className="w-full max-w-sm space-y-6">
          <div className="space-y-2 text-center">
            <h2 className="text-2xl font-semibold tracking-tight">
              Welcome back
            </h2>
            <p className="text-sm text-muted-foreground">
              Sign in with your WCA account to continue
            </p>
          </div>
          <Button onClick={() => handleLogin()} className="w-full" size="lg">
            <span>Login with WCA</span>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
