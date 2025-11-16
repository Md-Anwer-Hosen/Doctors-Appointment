import React, { useEffect, useState } from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
  ResponsiveContainer,
} from "recharts";

const AppointmentsBarChart = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const bookings = JSON.parse(localStorage.getItem("bookings")) || [];

    // Calculate doctor-wise total price
    const priceTotals = {};
    bookings.forEach((doc) => {
      priceTotals[doc.name] = priceTotals[doc.name]
        ? priceTotals[doc.name] + doc.consultation_fee
        : doc.consultation_fee;
    });

    // Transform to array for Recharts
    const chartData = Object.keys(priceTotals).map((name) => ({
      name,
      totalPrice: priceTotals[name],
    }));

    setData(chartData);
  }, []);

  return (
    <div className="bg-white p-5 rounded-xl shadow">
      <h2 className="text-xl font-bold mb-4 text-center">
        Doctor Appointments (Revenue)
      </h2>

      {data.length === 0 ? (
        <p className="text-gray-600 text-center">No bookings yet.</p>
      ) : (
        <ResponsiveContainer width="100%" height={300}>
          <BarChart
            data={data}
            margin={{ top: 20, right: 30, left: 0, bottom: 5 }}
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis
              allowDecimals={false}
              tickFormatter={(value) => `$${value}`} // Shows $ symbol
            />
            <Tooltip formatter={(value) => `$${value}`} />
            <Bar dataKey="totalPrice" fill="#3b82f6" />
          </BarChart>
        </ResponsiveContainer>
      )}
    </div>
  );
};

export default AppointmentsBarChart;
