import Card from "./Card";
import BBQ from "../img/BBQ.png";
import Hardwood from "../img/Hardwood.png";
import SHISHA from "../img/SHISHA.png";
import MyCustomCarousel from "./produkgrid";

function Services() {
  return (
    <div className="container services">
      <div className="card-cover">
        <p className="main-title text-center">
          <b>Discover Our Product</b>
        </p>
        <div className="col-md-12">
          <div className="row">
            <div className="col-md-4 mb-1">
              <Card
                title="Shisha Charcoal"
                img={SHISHA}
                text="Hookah charcoal briquette is made of all-natural materials: coconut shell charcoal. Natural Coconut and a small portion of natural starch as binder.

                We carry out the process of grinding coconut charcoal  with binder particles tapioca starch . After the process of mixing all these ingredients, we do heating until 48 hours to make quality hookah charcoal. Visit our hookah charcoal factory and get a free sample now!. "
              />
            </div>
            <div className="col-md-4 mb-2">
              <Card
                title="BBQ Charcoal"
                img={BBQ}
                text="BBQ Charcoal made from hardwood, sawdust or coconut. Our minimum time of charcoal briquette burning is at 4-5 hours. Temperature of Charcoal heats at minimum 800 ºF. Combined with natural binders and filler (including coal dust) and manually compressed into their characteristic pillow shapes or hexagonal shapes."
              />
            </div>
            <div className="col-md-4 mb-2">
              <Card
                title="Lump Charcoal"
                img={Hardwood}
                text="Made from any kind of wood such as Mahony, Rosewood, Halaban and Tamarind. Best for BBQ for restaurants, grilling food. We provide various types of natural wood charcoal (BBQ Charcoal) for various purposes e.g. for restaurants, restaurants, grilling food, satay, fish, seafood, meat, baking pizza, baking india / arab bread, fuel stove anglo  to be cooked in seafood restaurants."
              />
            </div>
          </div>
        </div>
        <MyCustomCarousel />
      </div>
    </div>
  );
}

export default Services;
