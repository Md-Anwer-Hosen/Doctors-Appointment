import React from "react";
import CountUp from "react-countup";

const CountUpSection = () => {
  return (
    <div className="text-center mt-20 mx-30 bg-base-200 pb-15">
      <h1 className="font-bold text-4xl">We Provide Best Medical Services</h1>
      <p className="mt-5">
        Our platform connects you with verified, experienced doctors across
        various specialties — all at your convenience.{" "}
      </p>
      <div className="grid grid-cols-4 gap-2 items-center justify-items-center mt-16">
        <div className="w-[300px] bg-white rounded-2xl px-10 py-5  text-left">
          <img src="fi_2854545.png" className="w-[60px]" alt="" />
          <div className="flex">
            <CountUp
              className="text-5xl font-bold mt-5"
              start={0}
              end={199}
              duration={2.5}
            />{" "}
            <p className="text-5xl mt-3 font-bold">+</p>
          </div>

          <p className="text-mg text-base-400 mt-3"> Total Doctors</p>
        </div>
        <div className="w-[300px] bg-white rounded-2xl px-10 py-5  text-left">
          <img src="fi_7804340.png" className="w-[60px]" alt="" />
          <div className="flex">
            <CountUp
              className="text-5xl font-bold mt-5"
              start={0}
              end={467}
              duration={2.5}
            />{" "}
            <p className="text-5xl mt-3 font-bold">+</p>
          </div>
          <p className="text-mg text-base-400 mt-3"> Total Reviews</p>
        </div>
        <div className="w-[300px] bg-white rounded-2xl px-10 py-5  text-left">
          <img src="fi_2854545.png" className="w-[60px]" alt="" />
          <div className="flex">
            <CountUp
              className="text-5xl font-bold mt-5"
              start={0}
              end={1900}
              duration={2.5}
            />{" "}
            <p className="text-5xl mt-3 font-bold">+</p>
          </div>
          <p className="text-mg text-base-400 mt-3"> Patients</p>
        </div>
        <div className="w-[300px] bg-white rounded-2xl px-10 py-5  text-left">
          <img src="Group.png" className="w-[60px]" alt="" />
          <div className="flex">
            <CountUp
              className="text-5xl font-bold mt-5"
              start={0}
              end={300}
              duration={2.5}
            />{" "}
            <p className="text-5xl mt-3 font-bold">+</p>
          </div>
          <p className="text-mg text-base-400 mt-3">Total Stuffs</p>
        </div>
      </div>
    </div>
  );
};

export default CountUpSection;
