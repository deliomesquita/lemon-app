import "../styles/Main.css";
import Hero from "./Hero";
import Specials from "./Specials";
import Testimonials from "./Testimonials";
import About from "./About";
import Footer from "./Footer";

function Main() {
  return (
    <>
      <Hero />
      <Specials />
      <Testimonials />
      <About />
      <main className="main__container__footer">
        <Footer />
      </main>
    </>
  );
}

export default Main;
