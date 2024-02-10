function Card(props) {
  return (
    <div className="card">
      <br />

      <div className="text-center">
        <img alt="card-img" src={props.img} className="text-center img-fluid" />
      </div>
      <div className="text-center">
        <h3 className="card-title">{props.title}</h3>
      </div>
      <div className="text-center p-3">
        <p className="card-text">{props.text}</p>
      </div>
      <div className="text-center">
        <a
          href="https://wa.me/message/DDFS53IPYRVRE1"
          target="_blank" // Open link in a new tab
          rel="noopener noreferrer" // Security best practice for target="_blank" links
        >
          <button className="btn btn-primary" style={{ cursor: "pointer" }}>
            Get Quwote Now
          </button>
        </a>
      </div>
    </div>
  );
}

export default Card;
