import "../styles/Hero.css";

function Hero() {
  return (
    <>
      <section className="hero__container__description">
        <article className="hero-intro-section">
          <div className="hero-intro-text-block">
            <h1 className="hero-intro-text-title">Little Lemon</h1>
            <h3>Chicago</h3>
            <p>
              We are a family-owned restaurant that serves delicious food and
              drinks. We are located in Lisbon, Portugal.
            </p>
            <button className="hero-intro-button">Reserve a Table</button>
          </div>
          <div className="hero-intro-image-block">
            <img
              className="hero-intro-image"
              src="\images\restauranfood.jpg"
              alt="Little Lemon Food"
            />
          </div>
        </article>
      </section>
    </>
  );
}

export default Hero;
