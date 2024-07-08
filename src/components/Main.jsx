import "../styles/Main.css";

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
      {/* <section className="main-specials-section">
        <div className="main-specials-container">
          <div className="main-specials-top-block">
            <h2>Specials</h2>
            <button className="main-specials-button">Online Menu</button>
          </div>
          <div className="main-specials-cards-container">
            <div className="main-specials-card"></div>
            <div className="main-specials-card"></div>
            <div className="main-specials-card"></div>
          </div>
        </div>
      </section> */}
    </main>
  );
}

export default Main;
