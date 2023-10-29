"use client";
import axios from "axios";
import React, { useState } from "react";
import toast from "react-hot-toast";
import Link from "next/link";

import SocialAuth from "@/components/SocialAuth";
import Seperator from "@/components/ui/Seperator";
import { useRouter } from "next/navigation";

const RegistrationForm = () => {
  const router = useRouter();

  const [loading, setLoading] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [userRole, setUserRole] = useState("");

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

  const onRegister = async (e) => {
    e.preventDefault();

    setLoading(true);

    if (!name || !password || !email || !userRole) {
      toast.error("All feilds are required!");
      return;
    }

    if (password?.length < 8) {
      toast.error("Password should contain atleast 8 Character");
      return;
    }
    try {
      const { statusText } = await axios.post("/api/user", {
        name,
        password,
        email,
        role: userRole,
      });

      console.log("res", statusText);

      router.push("/signin");
    } catch (error) {
      console.log("error", error);
      toast.error(error.response.data);
    } finally {
      setName("");
      setPassword("");
      setUserRole("");
      setEmail("");
      setLoading(false);
    }
  };

  return (
    <div className="w-full sm:w-[380px] flex flex-col gap-6">
      <div className="title w-full text-center">
        <h1 className="text-3xl font-bold text-[--secondary-color]">
          Create a free Account
        </h1>
      </div>

      <div className="form w-full px-6 py-6 rounded-md border shadow-sm">
        <form className="w-full flex flex-col gap-3" onSubmit={onRegister}>
          <div className="input flex flex-col gap-1">
            <label className="text-md text-[#333]" htmlFor="Name">
              Name <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              name="name"
              required
              autoComplete="off"
              value={name}
              onChange={(e) => setName(e.target.value)}
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
              autoComplete="off"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
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

          <div className="input flex flex-col gap-1 cursor-pointer">
            <div className="flex gap-3">
              {role.map((r) => (
                <div className="flex gap-2 cursor-pointer" key={r.id}>
                  <input
                    type="radio"
                    name="role"
                    id={r.label}
                    value={r.label}
                    onChange={(e) => setUserRole(e.target.value)}
                  />
                  <label htmlFor={r.label}>{r.label}</label>
                </div>
              ))}
            </div>
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
