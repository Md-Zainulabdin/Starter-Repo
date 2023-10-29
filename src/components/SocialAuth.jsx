import React from "react";
import { BiLogoGoogle, BiLogoGithub } from "react-icons/bi";

const SocialAuth = () => {
  return (
    <div className="w-full flex gap-3">
      <div className="Google cursor-pointer hover:bg-[#fafafa] w-full flex items-center justify-center border py-3 rounded-md ">
        <BiLogoGoogle size={26} className="w-5 h-5 text-[#555]" />
      </div>
      <div className="Github cursor-pointer hover:bg-[#fafafa] w-full flex items-center justify-center border py-3 rounded-md ">
        <BiLogoGithub size={26} className="w-5 h-5 text-[#555]" />
      </div>
    </div>
  );
};

export default SocialAuth;
