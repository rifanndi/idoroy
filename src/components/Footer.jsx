import { Link, animateScroll as scroll } from "react-scroll";
import { FaWhatsapp } from "react-icons/fa";

function Footer() {
  return (
    <footer>
      <div className="container">
        <div className="row">
          <div className="side1">
            <div className="row">
              <div className="col-md-3">
                <h1 className="logo">Indo Royal Charcol</h1>
                <p className="footer-text">
                  Lorem ipsum Here are thirteen health benefits of apples Lorem
                </p>
              </div>
              <div className="col-md-3">
                <p className="footer-title">Important Link</p>
                <ul>
                  <li>
                    <Link
                      spy={true}
                      smooth={true}
                      duration={1000}
                      to="headerbg"
                    >
                      Home
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="services"
                      spy={true}
                      smooth={true}
                      duration={1000}
                    >
                      produk
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="about-scroll"
                      spy={true}
                      smooth={true}
                      duration={1000}
                    >
                      About Us
                    </Link>
                  </li>
                  <li>
                    <Link to="contact" spy={true} smooth={true} duration={1000}>
                      Contact
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="side2">
            <div className="row">
              <div className="col-md-3">
                <p className="footer-title">Contact</p>
                <ul>
                  <li>
                    <Link to="#">Rifa@IndoroyalCharoal.com</Link>
                  </li>
                  <li>
                    <Link to="#"></Link>
                  </li>
                  <li>
                    <Link to="#">085-84275-4076</Link>
                  </li>
                </ul>
              </div>
              <div className="col-md-3">
                <p className="footer-title">Social Media</p>
                <ul>
                  <li>
                    <a
                      target="_blank"
                      rel="noreferrer"
                      href="https://github.com/darkles"
                    >
                      Instagram
                    </a>
                  </li>
                  <li>
                    <a
                      target="_blank"
                      rel="noreferrer"
                      href="https://twitter.com/burhankcadag0"
                    >
                      Twitter
                    </a>
                  </li>
                  <li>
                    <a
                      target="_blank"
                      rel="noreferrer"
                      href="https://www.linkedin.com/in/burha\n-kocada%C4%9F-49a3331a5/"
                    >
                      Linkedin
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>

      <a
        href="https://wa.me/message/DDFS53IPYRVRE1"
        target="_blank" // Open link in a new tab
        rel="noopener noreferrer" // Security best practice for target="_blank" links
      >
        <button to="" className="gotop">
          <FaWhatsapp style={{ width: "50px", height: "100%" }} />
        </button>
      </a>
    </footer>
  );
}

export default Footer;
