import React from "react";
import { BiLogoGoogle, BiLogoGithub } from "react-icons/bi";
import { signIn } from "next-auth/react";

const SocialAuth = () => {
  return (
    <div className="w-full flex gap-3">
      <div
        onClick={() => signIn("google")}
        className="Google cursor-pointer hover:bg-[#fafafa] w-full flex items-center justify-center border py-3 rounded-md "
      >
        <BiLogoGoogle size={26} className="w-5 h-5 text-[#555]" />
      </div>
      <div
        onClick={() => signIn("github")}
        className="Github cursor-pointer hover:bg-[#fafafa] w-full flex items-center justify-center border py-3 rounded-md "
      >
        <BiLogoGithub size={26} className="w-5 h-5 text-[#555]" />
      </div>
    </div>
  );
};

export default SocialAuth;
