import notFoundImg from "../assets/404.png";

const NoDataFound = () => {
  return (
    <div className="location-not-found">
      <h1>Sorry, Location Not Found</h1>
      <img src={notFoundImg} alt="location-not-found" />
    </div>
  );
};

export default NoDataFound;
