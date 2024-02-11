import semua from "../img/semua.jpeg";

const Sesuai = () => {
  return (
    <>
      <div
        style={{ marginTop: "4rem", width: "100%", height: "10px" }}
        className="about-scroll"
      ></div>

      <div className="container about">
        <div className="row align-items-center">
          <div className="col-md-6 text-center">
            <p className="main-p">
              <b> Shape Details</b>
              the size of the charcoal can be requested according to the buyer’s
              request
            </p>
            <a
              href="https://wa.me/message/DDFS53IPYRVRE1"
              target="_blank" // Open link in a new tab
              rel="noopener noreferrer" // Security best practice for target="_blank" links
            >
              <button className="btn" style={{ cursor: "pointer" }}>
                Get aQuote Now !
              </button>
            </a>
          </div>

          <div className="">
            <img
              alt="about"
              src={semua}
              className="img-fluid"
              style={{ width: "100%", marginLeft: "20%" }}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Sesuai;
