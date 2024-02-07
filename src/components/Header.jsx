import { Link } from "react-scroll";
import Vidi from "../video/Vidi.mp4";

const Header = () => {
  function openBar() {
    const bar = document.querySelector(".bar");
    bar.classList.toggle("opened");
  }

  return (
    <header>
      <video src={Vidi} loop autoPlay muted></video>
      <h1>Best Charcoal Briquettes in Indonesia</h1>
      <p style={{ color: "white" }}>
        Experience the art of grilling with Java Charcoal's premium charcoal
        briquettes in Indonesia. Immerse yourself in the unmatched quality that
        defines our product, <br /> carefully crafted to elevate your grilling
        endeavors. <br />
      </p>
      <div className="row">
        {/* Scroll to "about-scroll" section */}
        <Link
          onClick={openBar}
          to="services"
          spy={true}
          smooth={true}
          duration={1000}
          activeClass="active"
        >
          <button className="btn" style={{ cursor: "pointer" }}>
            Product
          </button>
        </Link>

        {/* Open WhatsApp chat using the provided link */}
        <a
          href="https://wa.me/message/DDFS53IPYRVRE1"
          target="_blank" // Open link in a new tab
          rel="noopener noreferrer" // Security best practice for target="_blank" links
        >
          <button className="btn" style={{ cursor: "pointer" }}>
            Contact us
          </button>
        </a>
      </div>
      <div className="headerbg"></div>
    </header>
  );
};

export default Header;
