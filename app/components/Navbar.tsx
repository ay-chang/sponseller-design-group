"use client";

import Link from "next/link";
import { useState } from "react";

const Navbar = () => {
  const [currentPage, setPage] = useState("");
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="w-full bg-white text-gray-700">
      <div className="flex justify-between items-center mx-4 sm:mx-24 2xl:mx-24 py-6 sm:py-8">
        {/* Logo */}
        <Link href="/" onClick={() => setPage("")}>
          <p className="text-xl font-medium cursor-pointer">Sponseller Design Group</p>
        </Link>

        {/* Desktop Links */}
        <div className="hidden sm:flex space-x-6 text-md text-gray-500">
          <Link href="/projects">
            <p
              className={`cursor-pointer hover:underline ${
                currentPage === "projects" ? "underline" : ""
              }`}
              onClick={() => setPage("projects")}
            >
              Works
            </p>
          </Link>

          <Link href="/practice">
            <p
              className={`cursor-pointer hover:underline ${
                currentPage === "practice" ? "underline" : ""
              }`}
              onClick={() => setPage("practice")}
            >
              Practice
            </p>
          </Link>

          <Link href="/people">
            <p
              className={`cursor-pointer hover:underline ${
                currentPage === "people" ? "underline" : ""
              }`}
              onClick={() => setPage("people")}
            >
              People
            </p>
          </Link>

          <Link href="/inquiries">
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

        {/* Mobile Menu Button */}
        <div className="sm:hidden">
          <button onClick={() => setIsOpen(!isOpen)} aria-label="Toggle menu">
            {isOpen ? (
              // Close icon (X)
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            ) : (
              // Hamburger icon
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="sm:hidden flex flex-col items-start w-full px-6 space-y-4 pb-6 text-md">
          <Link href="/projects">
            <p
              className={`cursor-pointer hover:underline ${
                currentPage === "projects" ? "underline" : ""
              }`}
              onClick={() => {
                setPage("projects");
                setIsOpen(false);
              }}
            >
              Works
            </p>
          </Link>

          <Link href="/practice">
            <p
              className={`cursor-pointer hover:underline ${
                currentPage === "practice" ? "underline" : ""
              }`}
              onClick={() => {
                setPage("practice");
                setIsOpen(false);
              }}
            >
              Practice
            </p>
          </Link>

          <Link href="/people">
            <p
              className={`cursor-pointer hover:underline ${
                currentPage === "people" ? "underline" : ""
              }`}
              onClick={() => {
                setPage("people");
                setIsOpen(false);
              }}
            >
              People
            </p>
          </Link>

          <Link href="/inquiries">
            <p
              className={`cursor-pointer hover:underline ${
                currentPage === "inquiries" ? "underline" : ""
              }`}
              onClick={() => {
                setPage("inquiries");
                setIsOpen(false);
              }}
            >
              Inquiries
            </p>
          </Link>
        </div>
      )}
    </div>
  );
};

export default Navbar;
