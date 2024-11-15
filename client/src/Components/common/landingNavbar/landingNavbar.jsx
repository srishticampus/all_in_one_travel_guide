import appLogo from "../../../Asset/images/logo.jpg";
const LandingNavbar = () => {
  return (
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
                <img src={appLogo} alt="Tourly logo" />
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
  );
};

export default LandingNavbar;