import React from "react";
import { useLoaderData, useParams, useNavigate } from "react-router";
import toast from "react-hot-toast";

const DoctorsProfile = () => {
  const { id } = useParams();
  const data = useLoaderData();
  const navigate = useNavigate();
  const doctorId = parseInt(id);

  const theDoctor = data.find((f) => f.id === doctorId);

  const handleBooking = () => {
    const bookings = JSON.parse(localStorage.getItem("bookings")) || [];

    // Check if already booked
    const already = bookings.find((b) => b.id === doctorId);

    if (already) {
      toast.error("You have already booked this doctor!");
      return;
    }

    // Store new booking

    bookings.push(theDoctor);
    localStorage.setItem("bookings", JSON.stringify(bookings));

    toast.success("Doctor appointment booked successfully!");

    // Navigate after toast
    setTimeout(() => {
      navigate("/mybooking");
    }, 200);
  };

  return (
    <div className="mx-auto space-y-10 bg-base-200 mt-10 pb-20">
      {/* Doctor Profile Details Header */}
      <div className="bg-white p-8 rounded-2xl shadow text-center">
        <h2 className="text-2xl font-bold text-black">
          Doctor’s Profile Details
        </h2>
        <p className="text-gray-600 mt-3 ">
          Lorem ipsum dolor sit amet consectetur. Sit enim blandit orci tortor
          amet ut. Suscipit sed est fermentum magna. Quis vitae tempus facilisis
          turpis imperdiet mattis donec dignissim volutpat.
        </p>
      </div>

      {/* Profile Section */}
      <div className="bg-white p-8 rounded-2xl shadow gap-10 grid grid-cols-1 sm:flex items-center justify-center">
        <div>
          <img
            src={theDoctor.image}
            alt={theDoctor.name}
            className="rounded-xl sm:w-[490px] sm:h-[380px]"
          />
        </div>

        <div className="w-2/3 space-y-3">
          <h2 className="text-2xl font-bold text-black">{theDoctor.name}</h2>

          <p className="text-gray-700 font-medium">
            {theDoctor.degrees.join(", ")}
          </p>

          <p className="text-gray-700">{theDoctor.specialization}</p>

          <p className="text-gray-600">{theDoctor.experience}</p>

          <p className="pt-2 font-semibold text-black">
            <span className="font-semibold text-black">Working at : </span>
            {theDoctor.hospital}
          </p>

          <hr className="border-t border-dashed border-gray-300 mt-2" />
          <p className="text-gray-600">Reg No: {theDoctor.reg_no}</p>
          <hr className="border-t border-dashed border-gray-300 mb-4" />

          <p className="font-semibold mt-3 text-black">Availability</p>
          <div className="flex gap-2">
            {theDoctor.availability.map((day, i) => (
              <span
                key={i}
                className="px-3 py-1 bg-yellow-100 rounded-full text-sm text-black"
              >
                {day}
              </span>
            ))}
          </div>

          <p className="mt-4">
            <span className="font-semibold text-black">Consultation Fee: </span>
            <span className="text-blue-600 font-bold">
              {theDoctor.currency} {theDoctor.consultation_fee}
            </span>
            <span className="text-gray-500 text-sm">
              {" "}
              (incl. Vat) Per consultation
            </span>
          </p>
        </div>
      </div>

      {/* Booking Section */}
      <div className="bg-white p-8 rounded-2xl shadow">
        <div className="flex justify-between items-center mb-3">
          <h3 className="text-center w-full font-semibold text-lg">
            Book an Appointment
          </h3>
        </div>

        <div className="flex justify-between mb-3 text-black">
          <p className="font-semibold mb-2 ">Availability</p>
          <span className="px-3 py-1 bg-green-100 text-green-700 rounded-full text-sm">
            Doctor Available Today
          </span>
        </div>

        <div className="flex items-start gap-2 bg-yellow-50 p-3 rounded-lg text-sm text-yellow-700">
          <span>⚠</span>
          <p>
            Due to high patient volume, we are currently accepting appointments
            for today only. We appreciate your understanding and cooperation.
          </p>
        </div>

        <div className="mt-6">
          <button
            onClick={handleBooking}
            className="w-full bg-blue-600 text-white py-3 rounded-full font-semibold"
          >
            Book Appointment Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default DoctorsProfile;
