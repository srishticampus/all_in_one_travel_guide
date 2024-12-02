import { BASE_URL } from "../../../apis/baseURL";

const PackageCard = ({item}) => {
  return (
    <div className="package-card">
    <figure className="card-banner">
      <img
        src={`${BASE_URL}/${item?.packagePhoto}`}
        alt="Experience The Great Holiday On Beach"
        loading="lazy"
      />
    </figure>

    <div className="card-content">
      <h3 className="h3 card-title">
        Experience The Great Holiday On Beach
      </h3>

      <p className="card-text">
        Immerse yourself in the rich heritage of Japan with our
        10-day package, exploring Tokyo, Kyoto, and Osaka
        through guided city tours, traditional tea ceremonies,
        and visits to historic temples. Experience the
        convenience of 3- to 5-star hotel stays and the
        excitement of a bullet train ride. Round-trip airfare
        and daily breakfast are included for a worry-free
        cultural escapade.
      </p>

      <ul className="card-meta-list">
        <li className="card-meta-item">
          <div className="meta-box">
            <ion-icon name="time"></ion-icon>

            <p className="text">7D/6N</p>
          </div>
        </li>

        <li className="card-meta-item">
          <div className="meta-box">
            <ion-icon name="people"></ion-icon>

            <p className="text">pax: 10</p>
          </div>
        </li>

        <li className="card-meta-item">
          <div className="meta-box">
            <ion-icon name="location"></ion-icon>

            <p className="text">Malaysia</p>
          </div>
        </li>
      </ul>
    </div>

    <div className="card-price">
      <div className="wrapper">
        <p className="reviews">(25 reviews)</p>

        <div className="card-rating">
          <ion-icon name="star"></ion-icon>
          <ion-icon name="star"></ion-icon>
          <ion-icon name="star"></ion-icon>
          <ion-icon name="star"></ion-icon>
          <ion-icon name="star"></ion-icon>
        </div>
      </div>

      <p className="price">
        ₹7,500
        <span>/ per person</span>
      </p>

      <button className="btn btn-secondary">Book Now</button>
    </div>
  </div>
  );
};
export default PackageCard;
