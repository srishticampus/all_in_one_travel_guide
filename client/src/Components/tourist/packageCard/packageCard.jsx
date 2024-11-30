import { BASE_URL } from "../../../apis/baseURL";

const PackageCard = ({item}) => {
  return (
    <div
      className="col-lg-3 col-md-6 wow fadeInUp tw-bg-slate-200"
      data-wow-delay="0.1s"
    >
      <div className="tw-flex tw-justify-center tw-align-middle">
        <img
          className=" tw-w-auto tw-h-72"
          src={`${BASE_URL}/${item?.packagePhoto}`}
          alt="package"
        />
      </div>
      <div className="package-item">
        <div className="text-center p-4 ">
          <h3 className="mb-4">{item?.packageName}</h3>
          <h6 className="mb-0">{item?.packageType}</h6>
          <div className="tw-justify-center tw-flex tw-mt-5">
            <button className="btn btn-primary py-2 px-4 ms-2">
              View More{" "}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
export default PackageCard;
