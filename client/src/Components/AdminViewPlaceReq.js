import React, { useEffect, useState } from 'react'
import AdminNav from './AdminNav'
import axiosInstance from './BaseUrl';
import { Link, useNavigate } from 'react-router-dom';

function AdminViewPlaceReq() {

  const navigate=useNavigate();
  useEffect(() => {
    if(localStorage.getItem('adminlog')==null){
      navigate('/')
    }
  })

    const [place, setplace] = useState([]);
  useEffect(() => {
    axiosInstance
      .post(`/viewAllPlacesforApproval`)
      .then((res) => {
        console.log(res);
        if(res.data.data){
          setplace(res.data.data);

        }else{
          setplace([])
        }
      })
      .catch((res) => {
        console.log(res);
      });
  }, []);

  const handleApprove=(id)=>{
    axiosInstance.post(`/approveTouristPlaceById/${id}`)
    .then((res)=>{
        console.log(res);
      if(res.data.status==200){
        alert('Approved')
        window.location.reload()

      }else{
        alert('Failed');
      }
       
    })
    .catch((err)=>{
        console.log(err);        
        alert('Failed');

    })
  }
  const handleRemove=(id)=>{
    axiosInstance.post(`/deleteTouristplaceById/${id}`)
    .then((res)=>{
        console.log(res);
      if(res.data.status==200){
        alert('Removed')
        window.location.reload()

      }else{
        alert('Failed');
      }
       
    })
    .catch((err)=>{
        console.log(err);        
        alert('Failed');

    })
  }

  return (
    <div>
      <AdminNav/>
      <div style={{ minHeight: "300px", margin: "15px 0px" }}>
      <div className="container text-center">
        <div className="row">
          {place.length?place.map((a) => {
            return (
              <div className="col-3" style={{ margin: "10px 30px" }}>
                <div
                  className="card"
                  style={{ width: "300px", margin: "auto" }}
                >
                  {/* <img
                    src={`http://localhost:4004/${a.image.originalname}`}
                    className="card-img-top"
                    alt={a.image.filename}
                    height="240px"
                  /> */}
                  <div className="card-body">
                    <h3 className="card-title">{a.loc}</h3>
                    <h5 className="card-title">{a.city},{a.district}</h5>
                    <p className="card-text" style={{ color: "black" }}>
                     Distance : {a.distance}km
                    </p>
                    <p className="card-text" style={{ color: "black" }}>
                     TravelMode : {a.travelmode}
                    </p>
                    <p className="card-text" style={{ color: "black" }}>
                      Location Type:{a.locType}{" "}
                    </p>
                    
                  </div>
                  <div>
                    
                    <button
                      onClick={()=>{handleApprove(a._id)}}
                      className="btn btn-success"
                      style={{ margin: "10px 10px" }}
                    >
                      Approve
                    </button>
                    <button
                      onClick={()=>{handleRemove(a._id)}}
                      className="btn btn-danger"
                      style={{ margin: "10px 10px" }}
                    >
                      Reject
                    </button>
                  </div>
                </div>
              </div>
            );
          }):<h1 style={{padding:'120px'}} >No Requests</h1>}
        </div>
      </div>
    </div>
    </div>
  )
}

export default AdminViewPlaceReq
