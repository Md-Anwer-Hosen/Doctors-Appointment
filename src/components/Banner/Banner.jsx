import React from "react";

const Banner = () => {
  return (
    <div className="bg-white  px-20 border-1 border-base-300 pb-10 rounded-br-3xl border-r-0 border-l-0 rounded-bl-3xl ">
      <div className="">
        <div className="text-center item-center justify-center flex flex-col mt-8">
          <h1 className="text-5xl font-extrabold">
            Dependable Care, Backed by Trusted <br /> Professionals.
          </h1>
          <p className="text-md mt-4">
            Our platform connects you with verified, experienced doctors across
            various specialties — all at your convenience. Whether it's a
            routine checkup or urgent consultation, book appointments in minutes
            and receive quality care you can trust.
          </p>
          <div className="flex items-center justify-center mt-7  gap-3">
            <div>
              <input
                className="p-2 px-3 border border-base-300 rounded-4xl w-[600px]"
                type="text"
                placeholder="Search any doctor..."
              />
            </div>
            <div>
              <a className="btn bg-[#176AE5] hover:bg-[#144ca7] rounded-4xl text-white">
                Emergency
              </a>
            </div>
          </div>
        </div>

        <div className="flex gap-10 mt-5 items-center justify-center">
          <div>
            <img src="banner-img-1.png" alt="" />
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
