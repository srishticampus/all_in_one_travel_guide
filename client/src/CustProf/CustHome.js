import React, { useEffect } from "react";
import CustNav from "./CustNav";
import ViewPlaceCust from "../Components/ViewPlaceCust";
import { useNavigate } from "react-router-dom";
import Home from "../Components/home/Home";

function CustHome() {
  return (
    <div>
      <Home />
    </div>
  );
}

export default CustHome;
