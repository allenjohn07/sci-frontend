import React from "react";
import { Button } from "@/components/ui/button";

const LoginForm = () => {
  const handleLogin = async () => {
    window.location.replace("http://localhost:4000/api/auth/login");
  };

  return (
    // Right portion with WCA login button
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
  );
};

export default LoginForm;
