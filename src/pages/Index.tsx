
import React from "react";
import { BrowserRouter } from "react-router-dom";
import Navbar from "@/components/Navbar";

const Index = () => {
  return (
    <BrowserRouter>
      <div className="min-h-screen bg-gradient-to-b from-purple-50 to-pink-50">
        <Navbar />
        <div className="container pt-32 pb-20 px-4">
          <div className="text-center">
            <h1 className="text-4xl font-bold mb-4">Welcome to Youvitation</h1>
            <p className="text-xl text-gray-600">Create beautiful digital invitations for your special moments</p>
          </div>
        </div>
      </div>
    </BrowserRouter>
  );
};

export default Index;
