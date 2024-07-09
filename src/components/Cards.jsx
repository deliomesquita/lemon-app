import "../styles/Cards.css";

function Cards() {
  return (
    <div className="cards-container">
      <div className="card">
        <img className="card-image" src="../images/greeksalad.jpg" alt="Greek Salad" />
        <div className="text-container">
            <div className="card-info">
                <h3>Greek Salad</h3> <span>$12.99</span>
            </div>
            <p>The famous greek salad of crispy lettuce, peppers, olives and our Chicago style feta cheese, garnished with crunchy garlic and rosemary croutons. </p>
            <div className="order-delivery-container">
                <a href="">Order a delivery</a>
                <img src="../images/motorcycle.svg" alt="" />
            </div>
        </div>
      </div>
      <div className="card">
        <img className="card-image" src="../images/bruchetta.jpg" alt="Bruchetta" />
        <div className="text-container">
            <div className="card-info">
                <h3>Bruchetta</h3> <span>$5.99</span>
            </div>
            <p>Our Bruschetta is made from grilled bread that has been smeared with garlic and seasoned with salt and olive oil. </p>
            <div className="order-delivery-container">
                <a href="">Order a delivery</a>
                <img src="../images/motorcycle.svg" alt="" />
            </div>
        </div>
      </div>
      <div className="card">
        <img className="card-image" src="../images/lemondesert.jpg" alt="Lemon Desert" />
        <div className="text-container">
            <div className="card-info">
                <h3>Lemon Desert</h3> <span>$5.00</span>
            </div>
            <p>This comes straight from grandma’s recipe book, every last ingredient has been sourced and is as authentic as can be imagined.</p>
            <div className="order-delivery-container">  
                <a href="">Order a delivery</a>
                <img src="../images/motorcycle.svg" alt="" />
            </div>
        </div>
      </div>


    </div>
    )
};
export default Cards;