import { useEffect, useState } from "react";
import DestinationList from "./destinationList";
import axiosInstance from "../../../../apis/axiosInstance"
// Example data - replace with your actual data source
const exampleDestinations = [
  {
    id: 1,
    title: "Machu Picchu",
    description:
      "Machu Picchu is an ancient Incan city set high in the Andes Mountains in Peru. The site is notable for its sophisticated dry-stone walls that fuse huge blocks without the use of mortar, intriguing buildings that play on astronomical alignments and panoramic views across a dramatic landscape that includes tropical forests.",
    mainImage:
      "https://images.unsplash.com/photo-1587595431973-160d0d94add1?auto=format&fit=crop&q=80&w=1200&h=800",
    thumbnailImage:
      "https://images.unsplash.com/photo-1587595431973-160d0d94add1?auto=format&fit=crop&q=80&w=600&h=400",
  },
  {
    id: 2,
    title: "Santorini",
    description:
      "Santorini is one of the Cyclades islands in the Aegean Sea. It was devastated by a volcanic eruption in the 16th century BC, forever shaping its rugged landscape. The whitewashed, cubiform houses of its 2 principal towns, Fira and Oia, cling to cliffs above an underwater caldera (crater).",
    mainImage:
      "https://images.unsplash.com/photo-1613395877344-13d4a8e0d49e?auto=format&fit=crop&q=80&w=1200&h=800",
    thumbnailImage:
      "https://images.unsplash.com/photo-1613395877344-13d4a8e0d49e?auto=format&fit=crop&q=80&w=600&h=400",
  },
];

function ViewDestinations() {
  const [destinations, setDestinations] = useState([]);

  useEffect(() => {
    getDestination()
  }, [])
  const getDestination = async () => {
    try {
      const res = await axiosInstance.get('/top-destinations/get-all');
      if (res.status === 200) {
        const data = res?.data?.data?.reverse() || [];
        setDestinations(data)
      }
    } catch (error) {
      console.log('error on get destination', error)
    }
  }

  console.log('res dest', destinations)
  return (
    <div>
      <DestinationList destinations={destinations} />
    </div>
  );
}

export default ViewDestinations;
