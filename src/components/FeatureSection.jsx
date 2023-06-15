import React from "react";
import { BsPencilSquare } from "react-icons/bs";
import { GrCloudSoftware } from "react-icons/gr";
import { GrCloudComputer } from "react-icons/gr";

const FeatureSection = () => {
  return (
    <section className="p-10 flex flex-col gap-4 bg-slate-200">
      <div className="flex flex-col md:flex-row gap-4 justify-between">
        <div className="text-left">
          <p className="font-bold mb-2 text-blue-600">OUR SERVICE</p>
          <p className="text-slate-900 text-lg">We Offer a Wide Variety of IT Services</p>
        </div>

        <div>
          <button className="bg-blue-600 rounded-md m-auto p-3 w-32 text-center">
            See More
          </button>
        </div>
      </div>

      <div className="flex flex-col md:flex-row justify-between gap-4">
        <div className="flex flex-col p-6 gap-4 pl-4 border-l-2 border-blue-600 transition duration-500 hover:bg-blue-600 hover:text-white hover:border-blue-500 hover:rounded hover:ease-in-out">
          <span className="flex gap-4 items-center">
            <BsPencilSquare />
            <h4>IT Management</h4>
          </span>
          <p className="text-start break-words">
            We help businesses by making sure their technology systems work well
            and meet their goals. This includes tasks like fixing hardware and
            software, keeping the network safe, organizing data, and planning
            for future technology needs.
          </p>
        </div>

        <div className="flex flex-col p-6 gap-4 pl-4 border-l-2 border-blue-600 transition duration-500 hover:bg-blue-600 hover:text-white hover:border-blue-500 hover:rounded">
          <span className="flex gap-4 items-center">
            <GrCloudSoftware />
            <h4>Software Engineering</h4>
          </span>
          <p className="text-start break-words">
            We specialize in software engineering, which is the process of using
            engineering principles and methods to design, develop, and maintain
            high-quality software systems during development.
          </p>
        </div>

        <div className="flex flex-col p-6 gap-4 pl-4 border-l-2 border-blue-600 transition duration-500 hover:bg-blue-600 hover:text-white hover:border-blue-500 hover:rounded">
          <span className="flex gap-4 items-center">
            <GrCloudComputer />
            <h4>Cloud Computing</h4>
          </span>
          <p className="text-start break-words">
            We assist businesses and individuals with cloud computing, which
            enables access to data, software, and other resources online. Our
            service helps to reduce costs, increase flexibility, and improve
            teamwork.
          </p>
        </div>
      </div>
    </section>
  );
};

export default FeatureSection;

