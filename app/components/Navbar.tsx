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
            <p className="text-4xl font-medium" onClick={() => setPage("")}>
              Sponseller Design Group
            </p>
          </Link>
        </div>
        <div className="flex space-x-6 text-lg">
          <Link href="/projects">
            <p
              className={`cursor-pointer hover:underline ${
                currentPage === "projects" ? "underline" : ""
              }`}
              onClick={() => setPage("projects")}
            >
              Projects
            </p>
          </Link>

          <Link href={"/practice"}>
            <p
              className={`cursor-pointer hover:underline ${
                currentPage === "practice" ? "underline" : ""
              }`}
              onClick={() => setPage("practice")}
            >
              Practice
            </p>
          </Link>

          <Link href={"/people"}>
            <p
              className={`cursor-pointer hover:underline ${
                currentPage === "people" ? "underline" : ""
              }`}
              onClick={() => setPage("people")}
            >
              People
            </p>
          </Link>

          <Link href="/news">
            <p
              className={`cursor-pointer hover:underline ${
                currentPage === "news" ? "underline" : ""
              }`}
              onClick={() => setPage("news")}
            >
              News
            </p>
          </Link>

          <Link href={"/inquiries"}>
            <p
              className={`cursor-pointer hover:underline ${
                currentPage === "inquiries" ? "underline" : ""
              }`}
              onClick={() => setPage("inquiries")}
            >
              Inquiries
            </p>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
