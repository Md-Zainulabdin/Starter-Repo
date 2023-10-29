"use client";
import React, { useState } from "react";

import SocialAuth from "@/components/SocialAuth";
import Seperator from "@/components/ui/Seperator";

const LoginForm = () => {
  const [loading, setLoading] = useState(false);

  return (
    <div className="w-full md:w-[380px] flex flex-col gap-6">
      <div className="title w-full text-center">
        <h1 className="text-3xl font-bold text-[--secondary-color]">
          Login to Account
        </h1>
      </div>

      <div className="form w-full px-6 py-6 rounded-md border shadow-sm">
        <div className="py-4">
          <SocialAuth />
        </div>

        <Seperator />

        <form className="w-full flex flex-col gap-3">
          <div className="input flex flex-col gap-1">
            <label className="text-md text-[#333]" htmlFor="Email">
              Email Address <span className="text-red-500">*</span>
            </label>
            <input
              type="email"
              name="email"
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
              placeholder="Enter your password.."
              className="border w-full px-3 py-2 rounded-md"
            />
          </div>

          <button
            disabled={loading}
            type="submit"
            className="w-full mt-2 rounded-md p-2 bg-[--primary-color] text-white"
          >
            {loading ? "logining..." : "Login"}
          </button>
        </form>
      </div>
    </div>
  );
};

export default LoginForm;
