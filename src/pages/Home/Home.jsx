import React from "react";
import Banner from "../../components/Banner/Banner";
import { useLoaderData } from "react-router-dom";
import Doctors from "../Doctors/Doctors";

const Home = () => {
  const data = useLoaderData();

  return (
    <div className="bg-base-200">
      <Banner />
      <Doctors data={data} />
    </div>
  );
};

export default Home;
