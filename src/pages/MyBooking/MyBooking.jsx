import React, { useEffect, useState } from "react";
import toast from "react-hot-toast";
import AppointmentsBarChart from "../../components/AppointmentsBarChart/AppointmentsBarChart";

const MyBooking = () => {
  const [bookings, setBookings] = useState([]);

  // Load from localStorage
  useEffect(() => {
    const stored = JSON.parse(localStorage.getItem("bookings")) || [];
    setBookings(stored);
  }, []);

  // Cancel appointment
  const handleCancel = (id) => {
    const updated = bookings.filter((doc) => doc.id !== id);

    setBookings(updated);
    localStorage.setItem("bookings", JSON.stringify(updated));

    toast.success("Appointment cancelled!");
  };

  return (
    <>
      {bookings.length !== 0 && <AppointmentsBarChart />}

      <div className=" mx-auto p-6 space-y-6 mt-10">
        <h2 className="text-2xl font-bold text-center">My Bookings</h2>

        {}

        {bookings.length === 0 && (
          <div className="flex items-center justify-center h-full">
            <p className="text-gray-600 text-center text-2xl font-bold ">
              You have no appointments Today.
            </p>
          </div>
        )}

        {bookings.map((doc) => (
          <div className="  bg-white p-4 rounded-xl shadow">
            <div key={doc.id} className="flex justify-between items-center ">
              <div>
                <h3 className="text-lg font-semibold text-black">{doc.name}</h3>
                <p className="text-gray-600">{doc.specialization}</p>
                <p className="text-gray-500 text-sm">{doc.hospital}</p>
              </div>

              <div className="hidden sm:flex">
                <p className="">
                  <span className="font-semibold text-black">
                    Consultation Fee:{" "}
                  </span>
                  <span className="text-blue-600 font-bold">
                    {doc.currency} {doc.consultation_fee}
                  </span>
                  <span className="text-gray-500 text-sm">
                    {" "}
                    (incl. Vat) Per consultation
                  </span>
                </p>
              </div>
            </div>
            <button
              onClick={() => handleCancel(doc.id)}
              className=" bg-blue-600 text-white rounded-full w-full mt-5 px-4 py-2  font-semibold hover:bg-white hover:text-green-800 hover: border hover:border-blue-600"
            >
              Cancel
            </button>
          </div>
        ))}
      </div>
    </>
  );
};

export default MyBooking;
