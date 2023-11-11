"use client";
import axios from "axios";
import React, { useCallback, useState } from "react";
// import { BsGithub } from "react-icons/bs";
// import { FcGoogle } from "react-icons/fc";
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";

const LoginRegisterPage = () => {
  const router = useRouter();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [variant, setVariant] = useState("login");

  const login = useCallback(async () => {
    try {
      await signIn("credentials", {
        email,
        password,
        redirect: false,
        callbackUrl: "/",
      });
      router.push("/");
    } catch (error) {
      console.log(error);
    }
  }, [email, password]);

  const register = useCallback(async () => {
    try {
      await axios.post("/api/register", {
        name,
        email,
        password,
      });
      router.push("/");
    } catch (error) {
      console.log(error);
    }
  }, [name, email, password]);

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
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
              )}
              <input
                type="email"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <input
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />

              <button
                onClick={() => {
                  variant === "login" ? login() : register();
                }}
                className="w-full text-white bg-red-700 my-3 py-2 rounded-sm"
              >
                {variant === "login" ? "Login" : "Sign Up"}
              </button>
              {/* <div className="flex justify-center gap-3">
                <div
                  onClick={() => signIn("github", { callbackUrl: "/" })}
                  className="bg-white text-xl p-2 rounded-full cursor-pointer"
                >
                  <BsGithub />
                </div>
                <div
                  onClick={() => signIn("google", { callbackUrl: "/" })}
                  className="bg-white text-xl p-2 rounded-full cursor-pointer"
                >
                  <FcGoogle />
                </div>
              </div> */}
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

export default LoginRegisterPage;
