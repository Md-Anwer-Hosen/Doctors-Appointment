import Banner from "../../components/Banner/Banner";
import { useLoaderData } from "react-router-dom";
import Doctors from "../Doctors/Doctors";
import CountUpSection from "../../components/CountUpSection/CountUpSection";

const Home = () => {
  const data = useLoaderData();

  return (
    <div className="bg-base-200">
      <Banner />
      <Doctors data={data} />
      <CountUpSection />
    </div>
  );
};

export default Home;
