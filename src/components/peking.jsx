import coconutcharcoalpacking from "../img/coconutcharcoalpacking.png";

const Peking = () => {
  return (
    <>
      <div
        style={{ marginTop: "4rem", width: "100%", height: "50%" }}
        className="about-scroll"
      >
        <div>
          <div className="row">
            <div style={{ marginTop: "12%" }} className="col-md-6 text-center">
              <img
                alt="about"
                src={coconutcharcoalpacking}
                className="img-fluid"
                style={{ width: "100%" }}
              />
            </div>

            <div className="col-md-6">
              <p className="main-title ">
                <br />
                <b>Packaging Details</b>
              </p>
              <p className="" style={[]}>
                <b>
                  {" "}
                  Inner box / Brand box: 1, 2, 5 kg, inner plastic +
                  Carton/brand box, full color printing + Master box 10kg Master
                  box only: 10 kg, inner plastic, b/w printing or full color
                  printing
                </b>
              </p>
              <a
                href="https://wa.me/message/DDFS53IPYRVRE1"
                target="_blank" // Open link in a new tab
                rel="noopener noreferrer" // Security best practice for target="_blank" links
              >
                <button className="btn" style={{ cursor: "pointer" }}>
                  Get a aQuote Now !
                </button>
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Peking;
