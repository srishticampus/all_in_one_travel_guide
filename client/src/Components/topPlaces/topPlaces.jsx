import { Container } from "react-bootstrap";
import "./topPlaces.css";

export const TopPlaces = () => {
  const regions = {
    north: [
      {
        id: 1,
        place: "New Delhi",
        image: "https://www.tourmyindia.com/imagess/uttarakhand01-package.webp",
      },
      {
        id: 2,
        place: "Rajastan",
        image: "https://www.tourmyindia.com/imagess/up-package.webp",
      },
      {
        id: 3,
        place: "Himachal",
        image: "https://www.tourmyindia.com/imagess/himachal-package.webp",
      },
      {
        id: 4,
        place: "J&K",
        image: "https://www.tourmyindia.com/imagess/j&k-package.webp",
      },
      {
        id: 5,
        place: "Rajasthan",
        image: "https://www.tourmyindia.com/imagess/rajasthan-package.webp",
      },
      {
        id: 6,
        place: "Ladakh",
        image: "https://www.tourmyindia.com/imagess/ladakh-trend.webp",
      },
      {
        id: 7,
        place: "Delhi",
        image: "https://www.tourmyindia.com/imagess/delhi-package.webp",
      },
    ],
    south: [],
    east: [],
    west: [],
    center: [],
  };
  const data = regions.north;

  const renderingImages = data.map((item, index) => {
    if (index === 0) return;
    return (
      <div className="col-md-4 col-6" key={index}>
        <div className="img-container">
          <img src={item.image} alt="place" className="img-fluid" />
          <b>{item.place}</b>
        </div>
      </div>
    );
  });

  return (
    <Container className=" mx-auto " id="top-places-container">
      <p className="display-6">
        <strong className="text-primary font-weight-bold">Explore </strong> Top
        Destinations by Region{" "}
      </p>
      <div id="top-places-list">
        <ul className="nav">
          <li className="nav-item ">
            <button className="nav-link active">North India</button>
          </li>
          <li className="nav-item">
            <button className="nav-link ">South India</button>
          </li>
          <li className="nav-item">
            <button className="nav-link ">East India</button>
          </li>
          <li className="nav-item">
            <button className="nav-link ">West India</button>
          </li>
          <li className="nav-item">
            <button className="nav-link ">Center India</button>
          </li>
        </ul>
      </div>

      <div className="row g-3 mt-3">
        <div className="col-lg-5 col-md-12 col-sm-12">
          <div className="img-container">
            <img
              src="https://www.tourmyindia.com/imagess/uttarakhand01-package.webp"
              alt="tourst-place"
              className="w-100"
            />
            <b>New Delhi</b>
          </div>
        </div>
        <div className="col-lg-7 col-md-12 col-12">
          <div className="row g-3 flex-wrap"> {renderingImages}</div>
        </div>
      </div>
    </Container>
  );
};
