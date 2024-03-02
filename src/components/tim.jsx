import React from "react";

function CompanyTeam() {
  return (
    <div style={{ display: "flex", justifyContent: "center" }}>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: "20px",
          minHeight: "100vh",
          maxWidth: "100%", // Optional: Limit max width for larger screens
          padingBottom: "2px",
          boxSizing: "border-box",
        }}
      >
        <div style={{ alignItems: "center" }}>
          <h1>Tim Perusahaan</h1>
          <div style={{ display: "flex", gap: "130px", flexWrap: "wrap" }}>
            <div className="team-member">
              <img
                src="link_ke_gambar_ceo"
                alt="CEO"
                style={{ width: "200px", height: "200px", borderRadius: "50%" }}
              />
              <h2>John Doe</h2>
              <p>CEO</p>
            </div>
            <div className="team-member">
              <img
                src="link_ke_gambar_coo"
                alt="COO"
                style={{ width: "200px", height: "200px", borderRadius: "50%" }}
              />
              <h2>Jane Smith</h2>
              <p>COO</p>
            </div>
          </div>
        </div>
        <div
          className=""
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: "20px",
            width: "100%",
            padding: "20px", // Optional: Add padding for better spacing
            boxSizing: "border-box",
          }}
        >
          <div
            className="map"
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              gap: "20px",

              maxWidth: "100%", // Optional: Limit max width for larger screens
            }}
          >
            <div className="location-info" style={{ textAlign: "center" }}>
              <h2>Lokasi Perusahaan</h2>
              <iframe
                title="Perusahaan Map"
                width="100%"
                height="300"
                frameBorder="0"
                style={{ border: 0 }}
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3966.821192543797!2d2.2946947147704056!3d48.85809398010494!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNDjCsDA1JzU5LjciTiAywrA0NSc0Ny4xIlc!5e0!3m2!1sen!2sus!4v1645988676650!5m2!1sen!2sus"
                allowFullScreen
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CompanyTeam;
