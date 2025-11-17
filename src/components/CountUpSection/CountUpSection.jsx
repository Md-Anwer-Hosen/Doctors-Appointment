import React, { useEffect, useRef, useState } from "react";
import CountUp from "react-countup";

const CountUpSection = () => {
  const sectionRef = useRef(null);
  const [startCount, setStartCount] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setStartCount(true); // Start counting
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={sectionRef}
      className="text-center mt-20 md:mx-30 bg-base-200 pb-15"
    >
      <h1 className="font-bold text-2xl sm:text-3xl md:text-4xl">
        We Provide Best Medical Services
      </h1>
      <p className="mt-5">
        Our platform connects you with verified, experienced doctors across
        various specialties — all at your convenience.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-5 md:gap-5 items-center justify-items-center mt-16 text-black">
        <div className="w-full  bg-white rounded-2xl px-10 py-5 text-left">
          <img src="fi_2854545.png" className="w-[60px]" alt="" />
          <div className="flex">
            {startCount && (
              <CountUp
                className="text-5xl font-bold mt-5 text-black"
                start={0}
                end={199}
                duration={2.5}
              />
            )}
            <p className=" text-black text-5xl mt-3 font-bold">+</p>
          </div>
          <p className="text-mg text-base-400 mt-3 text-black">Total Doctors</p>
        </div>

        {/* 2 */}
        <div className="w-full bg-white rounded-2xl px-10 py-5 text-left">
          <img src="fi_7804340.png" className="w-[60px]" alt="" />
          <div className="flex">
            {startCount && (
              <CountUp
                className=" text-black text-5xl font-bold mt-5"
                start={0}
                end={467}
                duration={2.5}
              />
            )}
            <p className="text-5xl mt-3 font-bold text-black">+</p>
          </div>
          <p className="text-mg text-base-400 mt-3 text-black">Total Reviews</p>
        </div>

        {/* 3 */}
        <div className="w-full bg-white rounded-2xl px-10 py-5 text-left">
          <img src="fi_2854545.png" className="w-[60px]" alt="" />
          <div className="flex">
            {startCount && (
              <CountUp
                className="text-5xl font-bold mt-5 text-black"
                start={0}
                end={1900}
                duration={2.5}
              />
            )}
            <p className="text-5xl mt-3 font-bold text-black">+</p>
          </div>
          <p className="text-mg text-base-400 mt-3 text-black">Patients</p>
        </div>

        {/* 4 */}
        <div className="w-full bg-white rounded-2xl px-10 py-5 text-left">
          <img src="Group.png" className="w-[60px]" alt="" />
          <div className="flex">
            {startCount && (
              <CountUp
                className="text-5xl font-bold mt-5 text-black"
                start={0}
                end={300}
                duration={2.5}
              />
            )}
            <p className="text-5xl mt-3 font-bold text-black">+</p>
          </div>
          <p className="text-mg text-base-400 mt-3 text-black">Total Staff</p>
        </div>
      </div>
    </div>
  );
};

export default CountUpSection;
