"use client";

import Link from "next/link";
import { useState } from "react";

const Navbar = () => {
  const [currentPage, setPage] = useState("");

  return (
    <div className="w-full bg-white text-black">
      <div className="flex justify-between items-center mx-12 py-8">
        <div className="">
          <Link href="/">
            <p className="text-4xl font-bold" onClick={() => setPage("")}>
              SDG
            </p>
          </Link>
        </div>
        <div className="flex space-x-6 text-lg">
          <Link href="/projects">
            <p
              className={`cursor-pointer hover:underline ${
                currentPage === "works" ? "underline" : ""
              }`}
              onClick={() => setPage("works")}
            >
              Works
            </p>
          </Link>

          <p className="cursor-pointer hover:underline">Practice</p>
          <p className="cursor-pointer hover:underline">People</p>
          <p className="cursor-pointer hover:underline">Careers</p>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
