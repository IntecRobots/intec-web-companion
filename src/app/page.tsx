import Image from "next/image";
import LoginTitle from "../components/login-page/LoginTitle";
import SignUpLink from "../components/login-page/SignUpLink";
import React, { useState } from "react";
import FormLogin from "@/components/login-page/FormLogin";

const Home: React.FC = () => {
  

  return (
     
    <div className="flex flex-col min-h-screen bg-neutral-950 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))]">
      <div className="flex min-h-screen items-center justify-between px-10">
        
        <div className="absolute top-10 left-1/2 transform -translate-x-1/2">
          <Image
            src="/images/intecrobots_dark.png"
            alt="logo"
            width="200"
            height="200"
          />
        </div>
        <div className="w-1 bg-gray-700 h-3/4 self-center"></div>

        
        <div className="flex-1 flex justify-center">
          <Image
            src="/images/placeholderbot2-removebg-preview.png"
            alt="Left side image"
            width={200} 
            height={100} 
          />
        </div>

        <div className="w-1 bg-white-700 my-12"></div>

        <div className="flex-1">
          <div className="w-full max-w-sm mx-auto bg-gray-700 rounded-lg shadow-lg py-10 px-6">
            <LoginTitle />
            <FormLogin/>
            
            <SignUpLink />
          </div>
        </div>

        
        <p className="text-xs text-gray-400 absolute bottom-4 left-1/2 transform -translate-x-1/2">
          &copy; 2024 Intec Robots.
        </p>
      </div>
    </div>
  );
};

export default Home;
