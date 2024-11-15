import React from "react";
import logoBlue from "../../../Asset/images/guide/logo.svg";
import popular1 from "../../../Asset/images/guide/popular-1.jpg";
import popular2 from "../../../Asset/images/guide/popular-2.jpg";
import popular3 from "../../../Asset/images/guide/popular-3.jpg";
import package1 from "../../../Asset/images/guide/packege-1.jpg";
import package2 from "../../../Asset/images/guide/packege-2.jpg";
import package3 from "../../../Asset/images/guide/packege-3.jpg";
import gallery1 from "../../../Asset/images/guide/gallery-1.jpg";
import gallery2 from "../../../Asset/images/guide/gallery-2.jpg";
import gallery3 from "../../../Asset/images/guide/gallery-3.jpg";
import gallery4 from "../../../Asset/images/guide/gallery-4.jpg";
import gallery5 from "../../../Asset/images/guide/gallery-5.jpg";
import heroBanner from "../../../Asset/images/guide/hero-banner.jpg";

import "./agencyHome.scss";
export default function AgencyHome() {
  return (
    <div id="agency-home">
      <header class="header" data-header>
        <div class="overlay" data-overlay></div>

        <div class="header-bottom">
          <div class="container">
            <ul class="social-list">
              <li>
                <a href="#" class="social-link">
                  <ion-icon name="logo-facebook"></ion-icon>
                </a>
              </li>

              <li>
                <a href="#" class="social-link">
                  <ion-icon name="logo-twitter"></ion-icon>
                </a>
              </li>

              <li>
                <a href="#" class="social-link">
                  <ion-icon name="logo-youtube"></ion-icon>
                </a>
              </li>
            </ul>

            <nav class="navbar" data-navbar>
              <div class="navbar-top">
                <a href="#" class="logo">
                  <img src={logoBlue} alt="Tourly logo" />
                </a>

                <button
                  class="nav-close-btn"
                  aria-label="Close Menu"
                  data-nav-close-btn
                >
                  <ion-icon name="close-outline"></ion-icon>
                </button>
              </div>

              <ul class="navbar-list">
                <li>
                  <a href="#home" class="navbar-link" data-nav-link>
                    home
                  </a>
                </li>

                <li>
                  <a href="#" class="navbar-link" data-nav-link>
                    about us
                  </a>
                </li>

                <li>
                  <a href="#destination" class="navbar-link" data-nav-link>
                    destination
                  </a>
                </li>

                <li>
                  <a href="#package" class="navbar-link" data-nav-link>
                    packages
                  </a>
                </li>

                <li>
                  <a href="#gallery" class="navbar-link" data-nav-link>
                    gallery
                  </a>
                </li>

                <li>
                  <a href="#contact" class="navbar-link" data-nav-link>
                    contact us
                  </a>
                </li>
              </ul>
            </nav>

            <button class="btn btn-primary">Book Now</button>
          </div>
        </div>
      </header>

      <main>
        <article>
          <section class="hero" id="home">
            <div class="container">
              <h2 class="h1 hero-title">Journey to explore world</h2>

              <p class="hero-text">
                Ac mi duis mollis. Sapiente? Scelerisque quae, penatibus?
                Suscipit class corporis nostra rem quos voluptatibus habitant?
                Fames, vivamus minim nemo enim, gravida lobortis quasi, eum.
              </p>

              <div class="btn-group">
                <button class="btn btn-primary">Learn more</button>

                <button class="btn btn-secondary">Book now</button>
              </div>
            </div>
          </section>

          <section class="popular" id="destination">
            <div class="container">
              <p class="section-subtitle">Uncover place</p>

              <h2 class="h2 section-title">Popular destination</h2>

              <p class="section-text">
                Discover your next dream destination. Whether it's a tropical
                beach, bustling city, or serene mountain escape, adventure
                awaits
              </p>

              <ul class="popular-list">
                <li>
                  <div class="popular-card">
                    <figure class="card-img">
                      <img
                        src={popular1}
                        alt="San miguel, italy"
                        loading="lazy"
                      />
                    </figure>

                    <div class="card-content">
                      <div class="card-rating">
                        <ion-icon name="star"></ion-icon>
                        <ion-icon name="star"></ion-icon>
                        <ion-icon name="star"></ion-icon>
                        <ion-icon name="star"></ion-icon>
                        <ion-icon name="star"></ion-icon>
                      </div>

                      <p class="card-subtitle">
                        <a href="#">Italy</a>
                      </p>

                      <h3 class="h3 card-title">
                        <a href="#">San miguel</a>
                      </h3>

                      <p class="card-text">
                        Explore the timeless beauty of San miguel. From Rome's
                        ancient wonders to Venice's romantic canals, every
                        moment is a masterpiece
                      </p>
                    </div>
                  </div>
                </li>

                <li>
                  <div class="popular-card">
                    <figure class="card-img">
                      <img
                        src={popular2}
                        alt="Burj khalifa, dubai"
                        loading="lazy"
                      />
                    </figure>

                    <div class="card-content">
                      <div class="card-rating">
                        <ion-icon name="star"></ion-icon>
                        <ion-icon name="star"></ion-icon>
                        <ion-icon name="star"></ion-icon>
                        <ion-icon name="star"></ion-icon>
                        <ion-icon name="star"></ion-icon>
                      </div>

                      <p class="card-subtitle">
                        <a href="#">Dubai</a>
                      </p>

                      <h3 class="h3 card-title">
                        <a href="#">Burj khalifa</a>
                      </h3>

                      <p class="card-text">
                        Touch the sky at the iconic Burj Khalifa. Experience
                        Dubai from the world's tallest tower and marvel at the
                        breathtaking views
                      </p>
                    </div>
                  </div>
                </li>

                <li>
                  <div class="popular-card">
                    <figure class="card-img">
                      <img
                        src={popular3}
                        alt="Kyoto temple, japan"
                        loading="lazy"
                      />
                    </figure>

                    <div class="card-content">
                      <div class="card-rating">
                        <ion-icon name="star"></ion-icon>
                        <ion-icon name="star"></ion-icon>
                        <ion-icon name="star"></ion-icon>
                        <ion-icon name="star"></ion-icon>
                        <ion-icon name="star"></ion-icon>
                      </div>

                      <p class="card-subtitle">
                        <a href="#">Japan</a>
                      </p>

                      <h3 class="h3 card-title">
                        <a href="#">Kyoto temple</a>
                      </h3>

                      <p class="card-text">
                        Step into the tranquility of Kyoto's ancient temples.
                        Discover the serene beauty and timeless traditions that
                        define Japan's cultural heart
                      </p>
                    </div>
                  </div>
                </li>
              </ul>

              <button class="btn btn-primary">More destintion</button>
            </div>
          </section>

          <section class="package" id="package">
            <div class="container">
              <p class="section-subtitle">Popular Packeges</p>

              <h2 class="h2 section-title">Checkout Our Packeges</h2>

              <p class="section-text">
                Embark on a thrilling 7-day journey through Costa Rica,
                featuring guided rainforest canopy tours, white-water rafting,
                and hikes up the majestic Arenal Volcano. Stay in 4-star
                accommodations with daily breakfast and dinner included.
                Round-trip airfare and airport transfers ensure a seamless
                adventure.
              </p>

              <ul class="package-list">
                <li>
                  <div class="package-card">
                    <figure class="card-banner">
                      <img
                        src={package1}
                        alt="Experience The Great Holiday On Beach"
                        loading="lazy"
                      />
                    </figure>

                    <div class="card-content">
                      <h3 class="h3 card-title">
                        Experience The Great Holiday On Beach
                      </h3>

                      <p class="card-text">
                        Immerse yourself in the rich heritage of Japan with our
                        10-day package, exploring Tokyo, Kyoto, and Osaka
                        through guided city tours, traditional tea ceremonies,
                        and visits to historic temples. Experience the
                        convenience of 3- to 5-star hotel stays and the
                        excitement of a bullet train ride. Round-trip airfare
                        and daily breakfast are included for a worry-free
                        cultural escapade.
                      </p>

                      <ul class="card-meta-list">
                        <li class="card-meta-item">
                          <div class="meta-box">
                            <ion-icon name="time"></ion-icon>

                            <p class="text">7D/6N</p>
                          </div>
                        </li>

                        <li class="card-meta-item">
                          <div class="meta-box">
                            <ion-icon name="people"></ion-icon>

                            <p class="text">pax: 10</p>
                          </div>
                        </li>

                        <li class="card-meta-item">
                          <div class="meta-box">
                            <ion-icon name="location"></ion-icon>

                            <p class="text">Malaysia</p>
                          </div>
                        </li>
                      </ul>
                    </div>

                    <div class="card-price">
                      <div class="wrapper">
                        <p class="reviews">(25 reviews)</p>

                        <div class="card-rating">
                          <ion-icon name="star"></ion-icon>
                          <ion-icon name="star"></ion-icon>
                          <ion-icon name="star"></ion-icon>
                          <ion-icon name="star"></ion-icon>
                          <ion-icon name="star"></ion-icon>
                        </div>
                      </div>

                      <p class="price">
                        ₹7,500
                        <span>/ per person</span>
                      </p>

                      <button class="btn btn-secondary">Book Now</button>
                    </div>
                  </div>
                </li>

                <li>
                  <div class="package-card">
                    <figure class="card-banner">
                      <img
                        src={package2}
                        alt="Summer Holiday To The Oxolotan River"
                        loading="lazy"
                      />
                    </figure>

                    <div class="card-content">
                      <h3 class="h3 card-title">
                        Summer Holiday To The Oxolotan River
                      </h3>

                      <p class="card-text">
                        Escape to the Maldives for a 6-day luxury retreat in an
                        overwater bungalow at a 5-star resort. Enjoy an
                        all-inclusive meal plan, snorkeling excursions, and a
                        sunset dolphin cruise, topped off with a spa treatment
                        and private beach dinner. Round-trip airfare and airport
                        transfers complete this idyllic getaway.
                      </p>

                      <ul class="card-meta-list">
                        <li class="card-meta-item">
                          <div class="meta-box">
                            <ion-icon name="time"></ion-icon>

                            <p class="text">7D/6N</p>
                          </div>
                        </li>

                        <li class="card-meta-item">
                          <div class="meta-box">
                            <ion-icon name="people"></ion-icon>

                            <p class="text">pax: 10</p>
                          </div>
                        </li>

                        <li class="card-meta-item">
                          <div class="meta-box">
                            <ion-icon name="location"></ion-icon>

                            <p class="text">Malaysia</p>
                          </div>
                        </li>
                      </ul>
                    </div>

                    <div class="card-price">
                      <div class="wrapper">
                        <p class="reviews">(20 reviews)</p>

                        <div class="card-rating">
                          <ion-icon name="star"></ion-icon>
                          <ion-icon name="star"></ion-icon>
                          <ion-icon name="star"></ion-icon>
                          <ion-icon name="star"></ion-icon>
                          <ion-icon name="star"></ion-icon>
                        </div>
                      </div>

                      <p class="price">
                        ₹ 520,00
                        <span>/ per person</span>
                      </p>

                      <button class="btn btn-secondary">Book Now</button>
                    </div>
                  </div>
                </li>

                <li>
                  <div class="package-card">
                    <figure class="card-banner">
                      <img
                        src={package3}
                        alt="Santorini Island's Weekend Vacation"
                        loading="lazy"
                      />
                    </figure>

                    <div class="card-content">
                      <h3 class="h3 card-title">
                        Every journey tells a story. Make yours extraordinary
                        with us
                      </h3>

                      <p class="card-text">
                        Unlock the secrets of the globe. We’ll be your trusted
                        travel companion. Every journey tells a story. Make
                        yours extraordinary with us.
                      </p>

                      <ul class="card-meta-list">
                        <li class="card-meta-item">
                          <div class="meta-box">
                            <ion-icon name="time"></ion-icon>

                            <p class="text">7D/6N</p>
                          </div>
                        </li>

                        <li class="card-meta-item">
                          <div class="meta-box">
                            <ion-icon name="people"></ion-icon>

                            <p class="text">pax: 10</p>
                          </div>
                        </li>

                        <li class="card-meta-item">
                          <div class="meta-box">
                            <ion-icon name="location"></ion-icon>

                            <p class="text">Malaysia</p>
                          </div>
                        </li>
                      </ul>
                    </div>

                    <div class="card-price">
                      <div class="wrapper">
                        <p class="reviews">(40 reviews)</p>

                        <div class="card-rating">
                          <ion-icon name="star"></ion-icon>
                          <ion-icon name="star"></ion-icon>
                          <ion-icon name="star"></ion-icon>
                          <ion-icon name="star"></ion-icon>
                          <ion-icon name="star"></ion-icon>
                        </div>
                      </div>

                      <p class="price">
                      ₹6,600
                        <span>/ per person</span>
                      </p>

                      <button class="btn btn-secondary">Book Now</button>
                    </div>
                  </div>
                </li>
              </ul>

              <button class="btn btn-primary">View All Packages</button>
            </div>
          </section>

          <section class="gallery" id="gallery">
            <div class="container">
              <p class="section-subtitle">Photo Gallery</p>

              <h2 class="h2 section-title">Photo's From Travellers</h2>

              <p class="section-text">
                Step into a world of wonder. Your unforgettable journey starts
                with us. Craft memories that last a lifetime. Choose us for your
                next adventure.
              </p>

              <ul class="gallery-list">
                <li class="gallery-item">
                  <figure class="gallery-image">
                    <img src={gallery1} alt="Gallery image" />
                  </figure>
                </li>

                <li class="gallery-item">
                  <figure class="gallery-image">
                    <img src={gallery2} alt="Gallery image" />
                  </figure>
                </li>

                <li class="gallery-item">
                  <figure class="gallery-image">
                    <img src={gallery3} alt="Gallery image" />
                  </figure>
                </li>

                <li class="gallery-item">
                  <figure class="gallery-image">
                    <img src={gallery4} alt="Gallery image" />
                  </figure>
                </li>

                <li class="gallery-item">
                  <figure class="gallery-image">
                    <img src={gallery4} alt="Gallery image" />
                  </figure>
                </li>
              </ul>
            </div>
          </section>

          <section class="cta" id="contact">
            <div class="container">
              <div class="cta-content">
                <p class="section-subtitle">Live in Dream</p>

                <h2 class="h2 section-title">
                  Ready For Unforgatable Travel. Remember Us!
                </h2>

                <p class="section-text">
                  Discover the world like never before. Remember us for your
                  next adventure. Experience the journey of a lifetime. Let us
                  be your guide to unforgettable memories.
                </p>
              </div>

              <button class="btn btn-secondary">Sign Up!</button>
            </div>
          </section>
        </article>
      </main>

      <footer class="footer">
        <div class="footer-top">
          <div class="container">
            <div class="footer-brand">
              <a href="#" class="logo">
                <img src={gallery5} alt="Tourly logo" />
              </a>

              <p class="footer-text">
                Unleash your wanderlust with us. Think of us for your next
                incredible journey.Adventure awaits at every corner. Keep us in
                mind for your travel dreams.
              </p>
            </div>

            <div class="footer-contact">
              <h4 class="contact-title">Contact Us</h4>

              <p class="contact-text">Feel free to contact and reach us !!</p>

              <ul>
                <li class="contact-item">
                  <ion-icon name="call-outline"></ion-icon>

                  <a href="tel:+01123456790" class="contact-link">
                    +01 (123) 4567 90
                  </a>
                </li>

                <li class="contact-item">
                  <ion-icon name="location-outline"></ion-icon>

                  <address>Kerala, Trivandrum</address>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div class="footer-bottom">
          <div class="container">
            <p class="copyright">
              &copy; 2024 <a href="">Tourist Guide</a>. All rights reserved
            </p>

            <ul class="footer-bottom-list">
              <li>
                <a href="#" class="footer-bottom-link">
                  Privacy Policy
                </a>
              </li>

              <li>
                <a href="#" class="footer-bottom-link">
                  Term & Condition
                </a>
              </li>

              <li>
                <a href="#" class="footer-bottom-link">
                  FAQ
                </a>
              </li>
            </ul>
          </div>
        </div>
      </footer>

      <a href="#top" class="go-top" data-go-top>
        <ion-icon name="chevron-up-outline"></ion-icon>
      </a>
    </div>
  );
}
