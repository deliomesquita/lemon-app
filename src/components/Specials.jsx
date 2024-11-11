import "../styles/Specials.css";
import Cards from "./Cards";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

function Specials() {
  const navigate = useNavigate();
  function navigatePage() {
    return navigate("/specials");
  }

  useEffect(() => {
    const url = window.location.href;
    const pageUrl = "/specials";
    const button = document.querySelector(".specials-button");
    if (url.includes(pageUrl)) {
      button.style.display = "none";
    }
  }, []);

  return (
    <>
      <section className="section__container__specials">
        <article className="article-specials-section">
          <div className="specials-container">
            <div className="specials-text-button">
              <h2 className="specials-text-title">Specials</h2>
              <button
                className="specials-button"
                aria-label="On Click"
                onClick={navigatePage}
              >
                Online Menu
              </button>
            </div>
            <Cards />
          </div>
        </article>
      </section>
    </>
  );
}

export default Specials;
