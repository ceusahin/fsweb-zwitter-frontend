import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

const LoginPage = () => {
  const navigate = useNavigate();
  const [isLogin, setIsLogin] = useState(false);
  const { login } = useAuth();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("Submit function:", { username, password });
    await login({ username, password });
    if (login) {
      setIsLogin(true);
      setTimeout(() => {
        navigate("/main");
      }, 3500);
    } else {
      setIsLogin(false);
    }
  };

  return (
    <div className="flex items-center justify-center gap-40 min-h-screen bg-gray-100">
      <form
        onSubmit={handleSubmit}
        className="bg-white p-8 rounded-2xl shadow-lg w-96"
      >
        <div>
          <input
            name="username"
            placeholder="Username"
            type="text"
            id="username"
            onChange={(e) => setUsername(e.target.value)}
            className="w-full p-3 mb-3 border border-gray-300 rounded-xl"
            required
          />
          <input
            name="password"
            placeholder="Password"
            type="password"
            id="password"
            onChange={(e) => setPassword(e.target.value)}
            className="w-full p-3 mb-3 border border-gray-300 rounded-xl"
            required
          />
        </div>
        <button
          className="w-full bg-black text-white p-3 rounded-xl font-bold cursor-pointer hover:bg-gray-800"
          type="submit"
        >
          Login
        </button>
      </form>
      {isLogin && (
        <div className="mt-4 bg-gray-100 p-10 rounded-2xl shadow-lg">
          <p className="text-green-700 text-2xl ">Login successful!</p>
          <p className="text-green-700 text-2xl mt-4">
            In 5 seconds, u will be redirected to the Zwitter page!
          </p>
        </div>
      )}
    </div>
  );
};

export default LoginPage;
