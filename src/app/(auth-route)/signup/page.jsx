"use client";
import React, { useState } from "react";

import SocialAuth from "@/components/SocialAuth";
import Seperator from "@/components/ui/Seperator";
import Link from "next/link";

const RegistrationForm = () => {
  const [loading, setLoading] = useState(false);
  const role = [
    {
      id: 1,
      label: "user",
    },
    {
      id: 2,
      label: "admin",
    },
  ];

  return (
    <div className="w-full md:w-[380px] flex flex-col gap-6">
      <div className="title w-full text-center">
        <h1 className="text-3xl font-bold text-[--secondary-color]">
          Create a free Account
        </h1>
      </div>

      <div className="form w-full px-6 py-6 rounded-md border shadow-sm">
        <form className="w-full flex flex-col gap-3">
          <div className="input flex flex-col gap-1">
            <label className="text-md text-[#333]" htmlFor="Name">
              Name <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              name="name"
              required
              placeholder="Enter your name.."
              className="border w-full px-3 py-2 rounded-md"
            />
          </div>

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

          <div className="input flex flex-col gap-1">

            <div className="flex gap-3">
              {role.map((r) => (
                <div className="flex gap-2">
                  <input type="radio" name="role" value={r.label} />
                  <label htmlFor={r.label}>{r.label}</label>
                </div>
              ))}
            </div>
          </div>

          <button
            disabled={loading}
            type="submit"
            className="w-full mt-2 mb-2 rounded-md p-2 bg-[--primary-color] text-white"
          >
            {loading ? "Registiring..." : "Register"}
          </button>
        </form>

        <Seperator />

        <div className="social-auth py-4">
          <SocialAuth />
        </div>

        <div className="register-form-link w-full text-center">
          <Link href={"/signin"}>
            <span className="text-sm">
              Already have account,{" "}
              <span className="font-medium text-[--primary-color] hover:underline">
                Login
              </span>
            </span>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default RegistrationForm;
