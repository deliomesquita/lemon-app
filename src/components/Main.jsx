import "../styles/Main.css";
import Cards from "./Cards";
import Testimonials from "./Testimonials";
import About from "./About";
import Footer from "./Footer";

function Main() {
  return (
    <> 
      <main className="main__container__description">
        <div className="main">
          <section className="main-intro-section">  
              <div className="main-intro-text-block">
                <h1 className="main-intro-text-title">Little Lemon</h1>
                <h3>Chicago</h3>
                <p>
                We are a family-owned restaurant that serves delicious food and
                drinks. We are located in Lisbon, Portugal.
                </p>
                <button className="main-intro-button">Reserve a Table</button>
              </div>
              <div className="main-intro-image-block">
                <img className="main-intro-image" src="\images\restauranfood.jpg" alt="Little Lemon Food" />
              </div>
          </section>
        </div>
      </main>
      <main className="main__container__specials">
        <div className="main__specials">
          <section className="main-specials-section">
          <div className="specials-container">
            <div className="specials-text-button">
              <h2 className="main-specials-text-title">Specials</h2>
              <button className="main-specials-button">Online Menu</button>
            </div>
            <Cards />
          </div>
        </section>
        </div>
      </main>
      <main className="main__container__testimonials">
        <Testimonials />
      </main>
      <main className="main__container__about">
        <About />
      </main>
      <main className="main__container__footer">
        <Footer />
      </main>
    </>
  );
}

export default Main;
