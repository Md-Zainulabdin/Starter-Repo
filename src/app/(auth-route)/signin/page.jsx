"use client";
import React, { useState } from "react";

import SocialAuth from "@/components/SocialAuth";
import Seperator from "@/components/ui/Seperator";
import Link from "next/link";

const LoginForm = () => {
  const [loading, setLoading] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const onLogin = async (e) => {
    e.preventDefault();
  };

  return (
    <div className="w-full md:w-[380px] flex flex-col gap-6">
      <div className="title w-full text-center">
        <h1 className="text-3xl font-bold text-[--secondary-color]">
          Login to Account
        </h1>
      </div>

      <div className="form w-full px-6 py-6 rounded-md border shadow-sm">
        <form className="w-full flex flex-col gap-3">
          <div className="input flex flex-col gap-1">
            <label className="text-md text-[#333]" htmlFor="Email">
              Email Address <span className="text-red-500">*</span>
            </label>
            <input
              type="email"
              name="email"
              autoComplete="off"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              placeholder="Enter your email.."
              className="border w-full px-3 py-2 rounded-md"
            />
          </div>

          <div className="input flex flex-col gap-1">
            <label className="text-md text-[#333]" htmlFor="password">
              Password <span className="text-red-500">*</span>
            </label>
            <input
              type="password"
              name="password"
              required
              value={password}
              autoComplete="off"
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Enter your password.."
              className="border w-full px-3 py-2 rounded-md"
            />
          </div>

          <button
            disabled={loading}
            type="submit"
            className={`w-full mt-2 mb-2 rounded-md p-2  text-white ${
              loading
                ? "bg-indigo-400"
                : "bg-[--primary-color] hover:bg-indigo-600"
            }`}
          >
            {loading ? "logining..." : "Login"}
          </button>
        </form>

        <Seperator />

        <div className="social-auth py-4">
          <SocialAuth />
        </div>

        <div className="register-form-link w-full text-center">
          <Link href={"/signup"}>
            <span className="text-sm">
              Dont have account,{" "}
              <span className="font-medium text-[--primary-color] hover:underline">
                SignUp
              </span>
            </span>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default LoginForm;
