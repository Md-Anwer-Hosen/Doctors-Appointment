import React from "react";
import { Link, NavLink } from "react-router";

const Doctor = ({ doctor }) => {
  const { id, name, degrees, experience, image, reg_no } = doctor;
  return (
    <div>
      <div className=" p-7 bg-white rounded-xl shadow-lg text-left mx-auto">
        <div className="w-full aspect-[1.3/1] overflow-hidden rounded-lg mb-4">
          <img
            src={image}
            alt={`Dr. ${name}`}
            className="w-full h-full object-cover"
          />
        </div>

        <div className="flex gap-2 mb-3">
          {
            <span className="px-3 py-1 text-sm font-medium rounded-full bg-emerald-50 text-emerald-700 ">
              <p> availability</p>
            </span>
          }
          <span className="px-3 py-1 text-sm font-medium  text-[#176AE5]  bg-[#f3f8ff] rounded-2xl">
            {experience}
          </span>
        </div>

        <h2 className="text-xl font-bold text-gray-800 mb-1"> {name}</h2>
        <p className="text-base text-gray-600 mb-4">{degrees}</p>

        <hr className="border-t border-dashed border-gray-300 mb-4" />

        <div className="flex items-center  text-gray-500 mb-6 text-sm">
          <span className="text-sm font-medium text-gray-500 border border-gray-500 rounded-full w-4 h-4 flex items-center justify-center mr-2 ">
            R
          </span>
          <span className="font-medium">Reg No: {reg_no}</span>
        </div>

        <Link to={`/doctor/${id}`}>
          <button className="w-full py-3 border border-[#176AE5] text-[#176AE5] font-semibold rounded-4xl bg-white transition duration-150 hover:bg-indigo-50">
            View Details
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Doctor;
