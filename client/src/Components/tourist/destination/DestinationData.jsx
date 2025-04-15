import "./Destination.scss";
import { BASE_URL } from "../../../apis/baseURL";

const DestinationData = (props) => {
  const { styles, heading, text, img1, img2 } = props;

  const getImageSrc = (img) => {
    // If img is a local import (object or already full path), return as-is
    if (typeof img !== "string") return img;

    // If it's already a full URL, return it
    if (img.startsWith("http")) return img;

    // Otherwise assume it's a filename from backend
    return `${BASE_URL}/${img}`;
  };

  return (
    <div className={styles}>
      <div className="des-text">
        <h2>{heading}</h2>
        <p>{text}</p>
      </div>

      <div className="image">
        <img alt="img1" src={getImageSrc(img1)} />
        <img alt="img2" src={getImageSrc(img2)} />
      </div>
    </div>
  );
};

export default DestinationData;
