import "../styles/Specials.css";
import Cards from "./Cards";

function Specials() {
  return (
    <>
      <section className="section__container__specials">
        <article className="article-specials-section">
          <div className="specials-container">
            <div className="specials-text-button">
              <h2 className="specials-text-title">Specials</h2>
              <button className="specials-button">Online Menu</button>
            </div>
            <Cards />
          </div>
        </article>
      </section>
    </>
  );
}

export default Specials;
