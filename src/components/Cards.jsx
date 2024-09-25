import "../styles/Cards.css";

function Cards() {
  return (
    <>
      <section className="cards-container">
        <article className="card">
          <div className="image-container">
            <img
              className="card-image"
              src="../images/greeksalad.jpg"
              alt="Greek Salad"
            />
          </div>
          <div className="text-container">
            <div className="card-content">
              <div className="card-info">
                <h3>Greek Salad</h3> <span>$12.99</span>
              </div>
              <p>
                The famous greek salad of crispy lettuce, peppers, olives and
                our Chicago style feta cheese, garnished with crunchy garlic and
                rosemary croutons.{" "}
              </p>
            </div>
            <div className="order-delivery-container">
              <a href="">Order a delivery</a>
              <img src="../images/motorcycle.svg" alt="" />
            </div>
          </div>
        </article>
        <article className="card">
          <div className="image-container">
            <img
              className="card-image"
              src="../images/brucheta.png"
              alt="Bruchetta"
            />
          </div>
          <div className="text-container">
            <div className="card-content">
              <div className="card-info">
                <h3>Bruchetta</h3> <span>$5.99</span>
              </div>
              <p>
                Our Bruschetta is made from grilled bread that has been smeared
                with garlic and seasoned with salt and olive oil.{" "}
              </p>
            </div>
            <div className="order-delivery-container">
              <a href="">Order a delivery</a>
              <img src="../images/motorcycle.svg" alt="" />
            </div>
          </div>
        </article>
        <article className="card">
          <div className="image-container">
            <img
              className="card-image"
              src="../images/lemondesert.png"
              alt="Lemon Desert"
            />
          </div>
          <div className="text-container">
            <div className="card-content">
              <div className="card-info">
                <h3>Lemon Desert</h3> <span>$5.00</span>
              </div>
              <p>
                This comes straight from grandma’s recipe book, every last
                ingredient has been sourced and is as authentic as can be
                imagined.
              </p>
            </div>
            <div className="order-delivery-container">
              <a href="">Order a delivery</a>
              <img src="../images/motorcycle.svg" alt="" />
            </div>
          </div>
        </article>
      </section>
    </>
  );
}
export default Cards;
