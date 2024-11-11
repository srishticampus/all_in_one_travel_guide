import React from "react";
import earthVideo from "../../../Asset/videos/video-2.mp4";
import { TouristButton } from "../button/TouristButton";
import "./TouristHeader.scss";
export default function TouristHeader() {
  return (
    <div className="hero-container">
      <video src={earthVideo} autoPlay loop muted />
      <div className="video-overlay">
        <h1>ADVENTURE AWAITS</h1>
        <p>What are you waiting for?</p>
        <div className="hero-btns">
          <TouristButton
            className="btns"
            buttonStyle="btn--outline"
            buttonSize="btn--large"
          >
            GET STARTED
          </TouristButton>
          <TouristButton
            className="btns"
            buttonStyle="btn--primary"
            buttonSize="btn--large"
          >
            WATCH TRAILER <i className="far fa-play-circle" />
          </TouristButton>
        </div>
      </div>
    </div>
  );
}
