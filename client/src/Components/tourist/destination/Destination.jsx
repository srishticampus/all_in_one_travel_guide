import { useState, useEffect } from "react";
import Mountain1 from "../../../Asset/images/mountain1.jpg";
import Mountain2 from "../../../Asset/images/mountain2.jpg";
import Mountain3 from "../../../Asset/images/mountain4.jpg";
import Mountain4 from "../../../Asset/images/mountain3.jpg";
import beach1 from "../../../Asset/images/beach.jpg";
import beach2 from "../../../Asset/images/beach2.jpg";
import DestinationData from "./DestinationData.jsx";
import axiosInstance from "../../../apis/axiosInstance.js";
import "./Destination.scss";

const places = [
  {
    heading: "Munnar, Kerala",
    content:
      "Munnar, located in the Western Ghats mountain range in Kerala, India, is a popular hill station known for its stunning landscapes, lush tea gardens, and cool climate. Situated at an altitude of 5,200 feet (1,600 metres), Munnar is famous for its rolling hills covered in tea plantations established in the late 19th century. Visitors can explore the picturesque tea estates, visit the Eravikulam National Park to see the endangered Nilgiri Tahr, and enjoy boating on the serene Kundala Lake.",
    img1: Mountain1,
    img2: Mountain2,
  },
  {
    heading: "Ooty, Tamil Nadu",
    content:
      "Ooty, also known as Udhagamandalam, is a picturesque hill station located in the Nilgiri Hills of Tamil Nadu, India. At an altitude of 7,350 feet (2,240 metres), Ooty is renowned for its scenic beauty, charming colonial architecture, and pleasant climate. Visitors can explore the expansive Ooty Botanical Gardens, take a leisurely boat ride on Ooty Lake, and enjoy the panoramic views from Doddabetta Peak, the highest point in the Nilgiris.",
    img1: Mountain3,
    img2: Mountain4,
  },
  {
    heading: "Kovalam, Kerala",
    content:
      "Kovalam is a picturesque coastal town in Kerala, India, renowned for its pristine beaches and serene backwaters. It's a popular tourist destination, offering a perfect blend of relaxation and adventure. Visitors can enjoy sunbathing, swimming, surfing, and boating. The Lighthouse Beach, Hawah Beach, and Samudra Beach are some of the most famous beaches in Kovalam.",
    img1: beach1,
    img2: beach2,
  },
];

const Destination = () => {
  const [destinations, setDestinations] = useState([]);

  useEffect(() => {
    getDestination();
  }, []);

  const getDestination = async () => {
    try {
      const res = await axiosInstance.get("/top-destinations/get-all");
      if (res.status === 200) {
        const data = res.data?.data || [];
        setDestinations(data.reverse());
      }
    } catch (error) {
      console.log("error on get destination", error);
    }
  };

  // Decide what to render: API or local data
  const dataToRender = destinations.length > 0
    ? destinations.map((item) => ({
        heading: item.title,
        content: item.description,
        img1: item.img1,
        img2: item.img2,
      }))
    : places;

  return (
    <div className="destination">
      <h1>Top Destinations</h1>
      <p>
        Explore handpicked getaways curated just for you, offering unique
        experiences and unforgettable memories
      </p>
      {dataToRender.map((place, i) => (
        <DestinationData
          key={i}
          styles={i % 2 === 0 ? "first-des" : "first-des-reverse"}
          heading={place.heading}
          text={place.content}
          img1={place.img1}
          img2={place.img2}
        />
      ))}
    </div>
  );
};

export default Destination;
