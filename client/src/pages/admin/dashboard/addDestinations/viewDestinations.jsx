import { useEffect, useState } from "react";
import DestinationList from "./destinationList";
import axiosInstance from "../../../../apis/axiosInstance";
import TouristNavbar from "../../../../Components/tourist/navbar/TouristNavbar";
import Footer from "../../../../Components/Footer/Footer";

function ViewDestinations() {
  const [destinations, setDestinations] = useState([]);
  const [fixedDest, setFixedDest] = useState([]);
  
  const filterDest = (filtered) => {
    setDestinations(filtered);
  };

  useEffect(() => {
    getDestination();
  }, []);

  const getDestination = async () => {
    try {
      const res = await axiosInstance.get("/top-destinations/get-all");
      if (res.status === 200) {
        const data = res?.data?.data?.reverse() || [];
        setDestinations(data);
        setFixedDest(data);
      }
    } catch (error) {
      console.log("error on get destination", error);
    }
  };

  // Handle destination update
  const handleUpdateSuccess = (updatedDestination) => {
    setDestinations(prevDestinations => 
      prevDestinations.map(dest => 
        dest._id === updatedDestination._id ? updatedDestination : dest
      )
    );
    setFixedDest(prevFixedDest => 
      prevFixedDest.map(dest => 
        dest._id === updatedDestination._id ? updatedDestination : dest
      )
    );
  };

  return (
    <div>
      <DestinationList
        destinations={destinations}
        getDestination={getDestination}
        setDestinations={setDestinations} 
        fixedDest={fixedDest}
        filterDest={filterDest}
         setFixedDest={setFixedDest}  
        onUpdateSuccess={handleUpdateSuccess}  // Pass the update handler
      />
    </div>
  );
}

export default ViewDestinations;