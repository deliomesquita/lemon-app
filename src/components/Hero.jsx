import "../styles/Hero.css";
import { useNavigate } from "react-router-dom";

function Hero() {
  const navigate = useNavigate();
  function navigatePage() {
    return navigate("/booking");
  }

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
            <button
              className="hero-intro-button"
              aria-label="On Click"
              onClick={navigatePage}
            >
              Reserve a Table
            </button>
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
