import Abut from "../img/Abut.png";

const About = () => {
  return (
    <>
      <div
        style={{ marginTop: "4rem", width: "100%", height: "10px" }}
        className="about-scroll"
      ></div>

      <div className="container about">
        <div className="row">
          <div style={{ marginTop: "1%" }} className="col-md-6 text-center">
            <img alt="about" src={Abut} className="img-fluid" />
          </div>
          <div className="col-md-6">
            <h2 className="main-title about-h2">ABOUT US</h2>
            <p className="main-p">
              WE ARE THE BEST SUPPLIER OF CHARCOAL BRIQUETTE CV Djavacoal
              Indonesia is a exporter of premium Coconut Charcoal Briquette ,
              BBQ Charcoal Briquette and Sawdust Charcoal briquette. We are
              committed to being an innovative company and actively operating in
              the international briquette industry serving the needs of partners
              and building the Indonesian economy. Apart from producing cocounut
              briquettes for hookah / shisha, we also provide wood briquette for
              barbeque, Hardwoods from mahony and halabn and a variety of other
              hardwoods that are widely needed for export to various countries.
              With our experience in the charcoal industry, We look forward to
              collaborating and cooperating with your company in the future.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
