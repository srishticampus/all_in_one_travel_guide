import { Footer } from "antd/es/layout/layout";
import TouristNavbar from "../../../../Components/tourist/navbar/TouristNavbar";
import { useEffect } from "react";

export const ViewDestinationDetails = () => {
    const [destination, setDestination] = useState({});


    useEffect(() => {
        getDestinationById()
    }, [])
    const getDestinationById = async () => {
        
    }
  return (
    <div>
      <TouristNavbar />
      <div>
        <div className="tw-relative">
          <div className="tw-aspect-video tw-relative">
            <img
              src={destination.img2Url}
              alt={destination.title}
              className="tw-w-full tw-h-full tw-object-cover"
            />
          </div>
        </div>

        <div className="tw-p-6">
          <div className="tw-flex tw-gap-4 tw-mb-4">
            <img
              src={destination.img1Url}
              alt={`${destination.title} thumbnail`}
              className="tw-w-32 tw-h-32 tw-rounded-lg tw-object-cover"
            />
            <div>
              <h2 className="tw-text-2xl tw-font-bold tw-text-gray-900 tw-mb-2">
                {destination.title}
              </h2>
              <p className="tw-text-gray-600 tw-whitespace-pre-line">
                {destination.description}
              </p>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};
