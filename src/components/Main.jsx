import About from "./About";
import Services from "./Services";
import MyCustomCarousel from "./MyCarousel";
import MyCustomCarousell from "./produkgrid";
//!import Contact from "./Contact";

function Main() {
  return (
    <>
      <main>
        <MyCustomCarousel />
        <MyCustomCarousell />
        <Services />

        <About />
      </main>
    </>
  );
}
export default Main;
