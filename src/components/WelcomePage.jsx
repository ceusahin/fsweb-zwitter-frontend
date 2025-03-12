import React from "react";
import { useNavigate } from "react-router-dom";
import { TbSquareRoundedLetterZ } from "react-icons/tb";

const WelcomePage = () => {
  const navigate = useNavigate();
  return (
    <div className="flex h-screen items-center justify-center bg-white">
      <div className="flex w-3/4 max-w-4xl items-center justify-between">
        <div className="w-1/2 flex justify-center">
          <TbSquareRoundedLetterZ className="text-[20rem]" />
        </div>
        <div className="w-1/2 flex flex-col space-y-6">
          <h1 className="text-5xl font-bold">Zwitter</h1>
          <h2 className="text-xl font-semibold">Join us.</h2>
          <button
            className="bg-black text-white font-semibold rounded-full py-2 px-4 w-80 cursor-pointer"
            onClick={() => navigate("/register")}
          >
            Sign in
          </button>

          <div className="text-sm font-medium">
            Do you already have an account?
          </div>
          <button className="border rounded-full py-2 px-4 w-80 shadow-md cursor-pointer">
            Login
          </button>
          <button
            className="border rounded-full py-2 px-4 w-80 shadow-md cursor-pointer"
            onClick={() => navigate("/main")}
          >
            Go to Zwitter
          </button>
        </div>
      </div>
    </div>
  );
};

export default WelcomePage;
