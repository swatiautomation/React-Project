import Hero from "../components/Hero";
import HomeCard from "../components/HomeCard";
import JobListings from "../components/JobListings";
import ViewAll from "../components/ViewAll";

const HomePage = () => {
  return (
    <>
      <Hero />
      <HomeCard></HomeCard>
      <JobListings isHome={true} />
      <ViewAll></ViewAll>
    </>
  );
};

export default HomePage;
