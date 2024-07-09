import "../styles/Main.css";
import Cards from "./Cards";

function Main() {
  return (
    <main className="main">
      <section className="main-intro-section">
        
          <div className="main-intro-text-block">
            <h1 className="main-intro-text-title">Little Lemon Food</h1>
            <h2>Chicago</h2>
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
      <section className="main-specials-section">
        <div className="main-specials-container">
          <Cards />
        </div>
      </section>
    </main>
  );
}

export default Main;
