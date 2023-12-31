import Image from "next/image";
import Link from "next/link";
import React from "react";

const NotFound = () => {
  return (
    <div className="w-full h-screen flex items-center justify-center">
      <div className="flex flex-col items-center gap-3">
        <h1 className="text-3xl font-medium">Opps! Page Not Found</h1>
        <Link href={"/"} className="mt-2 border px-6 py-2">
          Back to Home
        </Link>
      </div>
    </div>
  );
};

export default NotFound;
