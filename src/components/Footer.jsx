import React from "react";
import { Link } from "react-router";

const Footer = () => {
  return (
    <>
      <footer className="flex bg-black/90 pt-[5%] pb-[5%] justify-center items-center w-full h-fit">
        <div className="flex w-[90%] justify-between h-fit items-start gap-y-5 gap-x-5 flex-wrap sm:flex-wrap md:flex-nowrap">
          <nav className="flex justify-center flex-col gap-y-1">
            <h2 className="text-white font-bold text-xl">Fast Links</h2>
            <Link
              to=""
              className="text-white/70 text-[16px] w-fit hover:text-red-600 hover:[text-shadow:1px_0px_2px_#f00]"
            >
              Home
            </Link>
            <Link
              to=""
              className="text-white/70 text-[16px] w-fit hover:text-red-600 hover:[text-shadow:1px_0px_2px_#f00]"
            >
              About
            </Link>
            <Link
              to=""
              className="text-white/70 text-[16px] w-fit hover:text-red-600 hover:[text-shadow:1px_0px_2px_#f00]"
            >
              Blog
            </Link>
            <Link
              to=""
              className="text-white/70 text-[16px] w-fit hover:text-red-600 hover:[text-shadow:1px_0px_2px_#f00]"
            >
              Service
            </Link>
          </nav>
          <nav className="flex justify-center flex-col gap-y-1">
            <h2 className="text-white font-bold text-xl">Products</h2>
            <Link
              to=""
              className="text-white/70 text-[16px] w-fit hover:text-red-600 hover:[text-shadow:1px_0px_2px_#f00]"
            >
              Personal
            </Link>
            <Link
              to=""
              className="text-white/70 text-[16px] w-fit hover:text-red-600 hover:[text-shadow:1px_0px_2px_#f00]"
            >
              Business
            </Link>
            <Link
              to=""
              className="text-white/70 text-[16px] w-fit hover:text-red-600 hover:[text-shadow:1px_0px_2px_#f00]"
            >
              Invoices
            </Link>
          </nav>
          <nav className="flex justify-center flex-col gap-y-1">
            <h2 className="text-white font-bold text-xl">Company</h2>
            <Link
              to=""
              className="text-white/70 text-[16px] w-fit hover:text-red-600 hover:[text-shadow:1px_0px_2px_#f00]"
            >
              About
            </Link>
            <Link
              to=""
              className="text-white/70 text-[16px] w-fit hover:text-red-600 hover:[text-shadow:1px_0px_2px_#f00]"
            >
              Career
            </Link>
            <Link
              to=""
              className="text-white/70 text-[16px] w-fit hover:text-red-600 hover:[text-shadow:1px_0px_2px_#f00]"
            >
              Press Kit
            </Link>
          </nav>
          <nav className="flex justify-center flex-col gap-y-1">
            <h2 className="text-white font-bold text-xl">Support</h2>
            <Link
              to=""
              className="text-white/70 text-[16px] w-fit hover:text-red-600 hover:[text-shadow:1px_0px_2px_#f00]"
            >
              Help
            </Link>
            <Link
              to=""
              className="text-white/70 text-[16px] w-fit hover:text-red-600 hover:[text-shadow:1px_0px_2px_#f00]"
            >
              FAQ
            </Link>
            <Link
              to=""
              className="text-white/70 text-[16px] w-fit hover:text-red-600 hover:[text-shadow:1px_0px_2px_#f00]"
            >
              Contact
            </Link>
          </nav>
          <nav className="flex justify-center flex-col gap-y-1">
            <h2 className="text-white font-bold text-xl">Legal</h2>
            <Link
              to=""
              className="text-white/70 text-[16px] w-fit hover:text-red-600 hover:[text-shadow:1px_0px_2px_#f00]"
            >
              Privacy Policy
            </Link>
            <Link
              to=""
              className="text-white/70 text-[16px] w-fit hover:text-red-600 hover:[text-shadow:1px_0px_2px_#f00]"
            >
              Terms Of Service
            </Link>
            <Link
              to=""
              className="text-white/70 text-[16px] w-fit hover:text-red-600 hover:[text-shadow:1px_0px_2px_#f00]"
            >
              Cookies
            </Link>
          </nav>
        </div>
      </footer>
    </>
  );
};

export default Footer;
