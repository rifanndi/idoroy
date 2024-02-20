import aboutt from "../img/aboutt.png";
import MyCustomCarousel from "./MyCarousel";

const About = () => {
  return (
    <>
      <div
        style={{ marginTop: "4rem", width: "100%", height: "10px" }}
        className="about-scroll"
      ></div>

      <div className="container about">
        <div className="row" style={{ gap: "10px" }}>
          <div style={{ marginTop: "10%" }} className="col-md-6 text-center">
            <img alt="about" src={aboutt} style={{ width: "100%" }} />
          </div>

          <div className="col-md-6">
            <p className="main-title ">
              Abaut us
              <br />
            </p>
            <b>WE ARE THE BEST SUPPLIER OF CHARCOAL BRIQUETTE</b>
            <p className="main-p">
              Indo Royal Charcoal is a leading exporter specializing in premium
              Coconut Charcoal Briquettes, BBQ Charcoal Briquettes, and Sawdust
              Charcoal Briquettes. Committed to innovation, we actively engage
              in the international briquette industry, catering to the needs of
              our partners while contributing to the Indonesian economy. In
              addition to manufacturing coconut charcoal briquettes for
              hookah/shisha, we also supply wood charcoal briquettes for
              barbecue, sourced from hardwoods such as mahogany and halaban,
              along with various other hardwoods in high demand for export to
              diverse countries. With our extensive experience in the charcoal
              industry, we eagerly anticipate collaborating and cooperating with
              your esteemed company in the future.
            </p>
            <a
              href="https://wa.me/message/DDFS53IPYRVRE1"
              target="_blank" // Open link in a new tab
              rel="noopener noreferrer" // Security best practice for target="_blank" links
            >
              <button className="btn" style={{ cursor: "pointer" }}>
                free sample Now
              </button>
            </a>
          </div>
        </div>
        <MyCustomCarousel />{" "}
      </div>
    </>
  );
};

export default About;
