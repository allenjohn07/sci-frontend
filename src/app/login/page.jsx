import React from "react";
import LoginHeader from "./components/loginHeader";
import LoginForm from "./components/loginForm";

const LoginPage = () => {
  return (
    <div className="flex flex-col md:flex-row px-5 md:px-0">
      <LoginHeader />
      <LoginForm />
    </div>
  );
};

export default LoginPage;
