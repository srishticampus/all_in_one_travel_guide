import React from 'react'
import CustNav from '../CustProf/CustNav'
import { Link, useParams } from 'react-router-dom';

function CustViewAvailableRooms() {
  const { id } = useParams();

  // Decode the JSON string representation
  let decodedData = {};
  try {
    decodedData = JSON.parse(decodeURIComponent(id));
  } catch (error) {
    console.error("Error parsing JSON:", error);
  }

  // Access the 'room' object and 'data' array
  const { room, data } = decodedData;

  // You can now use 'room' and 'data' in your component
  console.log(room);
  console.log(data);

// 
  return (
    <div>
      <CustNav/>
      <div style={{ marginTop: "20px" }}>
        <div className="container text-center">
          <div className="row">
            {data.length ? (
              data.map((a) => {
                return (
                  <div className="col" style={{ margin: "10px 0px" }}>
                    <div
                      className="card"
                      style={{
                        width: "18rem",
                        backgroundColor: "white",
                        boxShadow: "1px 2px 2px 2px grey",
                      }}
                    >
                      <div className="card-body">
                        <h4 className="card-title" style={{ color: "Green" }}>
                          Room Number: {a.roomNo}
                        </h4>
                        <h3 className="card-text">Price: ₹{a.price}<small>/day</small></h3>
                        <p className="card-text">
                          Type: {a.type} ({a.ac})
                        </p>
                        <Link to={`/customer_book_rooms/${a._id}/${a.hotel_id}/${a.price}/${JSON.stringify({room})}`} >
                          <button className='btn btn-success' >Book now</button>

                        </Link>
                      </div>
                    </div>
                  </div>
                );
              })
            ) : (
              <div className="col">
                <div className="card" style={{ width: "18rem;" }}>
                  <div className="card-body">
                    <h5 className="card-title"  style={{ padding: "80px" }}>No Rooms Available</h5>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}

export default CustViewAvailableRooms
