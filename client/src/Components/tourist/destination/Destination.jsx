import Mountain1 from "../../../Asset/images/mountain1.jpg";
import Mountain2 from "../../../Asset/images/mountain2.jpg";
import Mountain3 from "../../../Asset/images/mountain4.jpg";
import Mountain4 from "../../../Asset/images/mountain3.jpg";
import DestinationData from "./DestinationData.jsx";
import "./Destination.scss";
const text1 =
  "Munnar, located in the Western Ghats mountain range in Kerala, India, is a popular hill station known for its stunning landscapes, lush tea gardens, and cool climate. Situated at an altitude of 5,200 feet (1,600 metres), Munnar is famous for its rolling hills covered in tea plantations established in the late 19th century. Visitors can explore the picturesque tea estates, visit the Eravikulam National Park to see the endangered Nilgiri Tahr, and enjoy boating on the serene Kundala Lake.";
const text2 =
  "Ooty, also known as Udhagamandalam, is a picturesque hill station located in the Nilgiri Hills of Tamil Nadu, India. At an altitude of 7,350 feet (2,240 metres), Ooty is renowned for its scenic beauty, charming colonial architecture, and pleasant climate. Visitors can explore the expansive Ooty Botanical Gardens, take a leisurely boat ride on Ooty Lake, and enjoy the panoramic views from Doddabetta Peak, the highest point in the Nilgiris.";
const Destination = () => {
  return (
    <div className="destination">
      <h1>Places you might like</h1>
      <p>
        Explore handpicked getaways curated just for you, offering unique
        experiences and unforgettable memories
      </p>

      <DestinationData
        styles="first-des"
        heading="Munnar, Kerala"
        text={text1}
        img1={Mountain1}
        img2={Mountain2}
      />

      <DestinationData
        styles="first-des-reverse"
        heading="Ooty, Tamil Nadu"
        text={text2}
        img1={Mountain3}
        img2={Mountain4}
      />
    </div>
  );
};

export default Destination;
