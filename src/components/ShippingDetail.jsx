import konn from "../img/konn.jpg";

const ShippingDetail = () => {
  return (
    <>
      <div className="" style={{}}>
        <div className="row">
          <div style={{ marginTop: "12%" }} className="col-md-6 text-center">
            <img
              alt="about"
              src={konn}
              className="img-fluid"
              style={{ width: "100%" }}
            />
          </div>

          <div className="col-md-6">
            <p className="main-title ">
              <br />
              <b>Shipping Detail</b>
            </p>
            <p className="" style={[]}>
              <b>
                {" "}
                Production capacity : 250 MT / month Payment Term : TT 50% Down
                Payment & 50% After Stuffing Port of Loading : Jakarta Minimum
                order quantity : 18 MT / 20″FCL. Shipping document: Bill of
                lading, commercial invoice, packing list, certificate of origin,
                report of analysis, self heating test.
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
    </>
  );
};

export default ShippingDetail;
