import React from "react";
import About from "../About";
import Navbar from "../LandingNavbar/LandingNavbar";
import Footer from "../Footer";
import { TopPlaces } from "../topPlaces/topPlaces";

function Home() {
  return (
    <>
      <Navbar />
      <div>
        <div className="container-fluid bg-primary py-5 mb-5 hero-header">
          <div className="container py-5">
            <div className="row justify-content-center py-5">
              <div className="col-lg-10 pt-lg-5 mt-lg-5 text-center">
                <h1 className="display-3 text-white mb-3 animated slideInDown home_head_div">
                  Enjoy Your Vacation With Us
                </h1>

                <p className="fs-4 text-white mb-4 animated slideInDown sub_home_head_div">
                  ' Some moments are very special, Because it's never to be get
                  back '
                </p>
              </div>
            </div>
          </div>
        </div>
        <About />
        <TopPlaces />
      </div>
      <Footer />
    </>
  );
}

export default Home;
