import React, { useState } from "react";
import Doctor from "../../components/Doctor/Doctor";

const Doctors = ({ data }) => {
  const [showAll, setShowAll] = useState(false);
  const dataToShow = showAll ? data : data.slice(0, 6);
  console.log(dataToShow);
  return (
    <>
      <div className="mx-30">
        <div className="text-center mt-14 px-10">
          <h1 className="text-3xl font-bold">Our Best Doctors</h1>
          <p className="mt-5 text-md">
            Our platform connects you with verified, experienced doctors across
            various specialties — all at your convenience. Whether it's a <br />{" "}
            routine checkup or urgent consultation, book appointments in minutes
            and receive quality care you can trust.
          </p>
        </div>

        <div className="grid grid-cols-3 gap-7 mt-20">
          {dataToShow.map((d) => (
            <Doctor key={d.id} doctor={d} />
          ))}
        </div>
        <div className="flex items-center justify-center mt-7">
          {!showAll && (
            <button
              onClick={() => setShowAll(true)}
              className="btn mt-5 bg-blue-500 text-white"
            >
              See All Doctors
            </button>
          )}
        </div>
      </div>
    </>
  );
};

export default Doctors;
