import React from "react";
import logo from "../assets/logo.png";
import { AiFillFacebook } from "react-icons/ai";
import { FaTwitterSquare } from "react-icons/fa";
import { BsLinkedin } from "react-icons/bs";
import { AiOutlineCopyrightCircle } from "react-icons/ai";

const DivSection = () => {
  return (
    <section className="p-10 bg-slate-900 rounded">
      <div className="container mx-auto flex flex-col md:flex-row gap-4 md:justify-between">
        <div className="md:w-1/3">
          <div>
            <a href="/" className="text-white font-bold text-xl">
              <img src={logo} alt="" className="w-32 text-white" />
            </a>
          </div>

          <p className="text-white text-left break-words my-3 md:hidden">
            We are a dynamic and innovative company that is dedicated to
            delivering cutting-edge solutions to our clients.
          </p>

          <p className="hidden text-white my-3 lg:block text-left">
            <p>We are a dynamic and innovative</p>
            <p>company that is dedicated to</p>
            <p>delivering cutting-edge solutions to our clients.</p>
          </p>

          <div className="flex gap-2">
            <AiFillFacebook className="text-blue-900" />
            <FaTwitterSquare className="text-blue-900" />
            <BsLinkedin className="text-blue-900" />
          </div>
        </div>

        <div className="md:w-1/3 flex flex-col text-white gap-4 text-left">
          <h2 className="border-l-4 border-blue-600">IT Services</h2>
          <a
            href=""
            className=" hover:underline hover:transition hover:ease-in-out hover:duration-700"
          >
            IT Services
          </a>
          <a
            href=""
            className=" hover:underline hover:transition hover:ease-in-out hover:duration-700"
          >
            Cyber Security
          </a>
          <a
            href=""
            className=" hover:underline hover:transition hover:ease-in-out hover:duration-700"
          >
            Cloud Computing
          </a>
          <a
            href=""
            className=" hover:underline hover:transition hover:ease-in-out hover:duration-700"
          >
            Managed IT
          </a>
          <a
            href=""
            className=" hover:underline hover:transition hover:ease-in-out hover:duration-700"
          >
            IT Support
          </a>
        </div>

        <div className=" md:w-1/3 flex flex-col text-white gap-4 text-left my-5 md:my-0">
          <h2 className="border-l-4 border-blue-600">Quick Links</h2>
          <a
            href=""
            className=" hover:underline hover:transition hover:ease-in-out hover:duration-700"
          >
            About Us
          </a>
          <a
            href=""
            className=" hover:underline hover:transition hover:ease-in-out hover:duration-700"
          >
            Blogs
          </a>
          <a
            href=""
            className=" hover:underline hover:transition hover:ease-in-out hover:duration-700"
          >
            Contact Us
          </a>
          <a
            href=""
            className=" hover:underline hover:transition hover:ease-in-out hover:duration-700"
          >
            Careers
          </a>
        </div>
      </div>

      <div>
        <hr className="w-full py-3" />
        <p className="text-white flex sm:flex-col md:flex-row items-center justify-center m-auto text-center ">
          <AiOutlineCopyrightCircle />
          2023
          <span>
            <a href="" className="hover:text-slate-400">
              QReliance
            </a>
          </span>
          . All Rights Reserved
        </p>
      </div>
    </section>
  );
};

export default DivSection;
