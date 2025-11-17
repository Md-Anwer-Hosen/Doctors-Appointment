import React from "react";

const Banner = () => {
  return (
    <div className="bg-white   sm:px-20 mx-auto border-base-300 pb-10 rounded-br-3xl border-r-0 border-l-0 rounded-bl-3xl ">
      <div className="p-3">
        <div className=" text-center item-center justify-center flex flex-col sm:mt-8 ">
          <h1 className=" text-2xl sm:mt-5 md:text-5xl font-extrabold">
            Dependable Care, Backed by Trusted <br /> Professionals.
          </h1>
          <p className="hidden sm:flex text-center md:text-md mt-4 ">
            Our platform connects you with verified, experienced doctors across
            various specialties — all at your convenience. Whether it's a
            routine checkup or urgent consultation, book appointments in minutes
            and receive quality care you can trust.
          </p>
          <div className="grid grid-cols-1 mt-5 sm:flex sm:gap-5 items-center justify-items-center sm:w-10/12 sm:justify-center sm:items-center mx-auto">
            <input
              className=" p-2 px-3 border border-base-300 rounded-4xl w-full mt-5"
              type="text"
              placeholder="Search any doctor..."
            />

            <a className="btn bg-[#176AE5] hover:bg-[#144ca7] rounded-4xl text-white mt-5 w-fit">
              Search Now
            </a>
          </div>
        </div>

        <div
          className="grid grid-cols-1 sm:grid-cols-2 sm
        gap-10 mt-5 items-center justify-center"
        >
          <div>
            <img src="banner-img-1.png" alt="" className="" />
          </div>
          <div>
            {" "}
            <img src="banner-img-1.png" alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
