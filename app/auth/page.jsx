"use client";
import React, { useState } from "react";

const AuthPage = () => {
  const [inputs, setInputs] = useState({
    username: "",
    email: "",
    password: "",
  });

  const [variant, setVariant] = useState("login");

  return (
    <div className="relative h-screen w-full bg-[url('/images/hero.jpg')] bg-no-repeat bg-center bg-cover">
      <div className="bg-black bg-opacity-70 h-full w-full">
        <nav className="container mx-auto py-5 px-4">
          <img src="/images/logo.png" alt="logo" className="h-12" />
        </nav>
        <div className="container mx-auto py-5 px-4 flex justify-center mt-10">
          <div className="bg-black bg-opacity-80 p-16 rounded-md">
            <h4 className="text-white text-3xl mb-3 text-center">
              {variant === "login" ? "Login" : "Register"}
            </h4>
            <div className="flex flex-col gap-3">
              {variant === "register" && (
                <input
                  type="text"
                  placeholder="Username"
                  value={inputs.username}
                  onChange={(e) => setInputs(e.target.value)}
                />
              )}
              <input
                type="email"
                placeholder="Email"
                value={inputs.email}
                onChange={(e) => setInputs(e.target.value)}
              />
              <input
                type="password"
                placeholder="Password"
                value={inputs.password}
                onChange={(e) => setInputs(e.target.value)}
              />

              <button className="w-full text-white bg-red-700 my-3 py-2 rounded-sm">
                {variant === "login" ? "Login" : "Sign Up"}
              </button>

              <div>
                {" "}
                <span className="text-zinc-500 text-sm mr-0.5">
                  {variant === "login"
                    ? "First time using Netflix?"
                    : "Already have an account?"}
                </span>{" "}
                <span
                  onClick={() => {
                    variant === "login"
                      ? setVariant("register")
                      : setVariant("login");
                  }}
                  className="text-white underline text-sm cursor-pointer"
                >
                  {variant === "login" ? "Create an account" : "Login"}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AuthPage;
