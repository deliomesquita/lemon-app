import "../styles/Testimonials.css";

function Testimonials() {
  return (
    <>
      <main className="testimonials__container__testimonials">
        <h2 className="testimonials-title">Testimonials</h2>
        <section className="testimonials__cards__container">
          <div className="testimonials-card">
            <div className="testimonials-card-image-container">
              <img
                className="testimonials-card-image"
                src="..\images\1.png"
                alt="Client Photo"
              />
              <p className="testimonials-card-client-name">Paul</p>
            </div>
            <p className="testimonials-review-text">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam
              adipisci itaque aliquid vel atque, rerum earum illum placeat
              exercitationem. Nemo.
            </p>
          </div>
          <div className="testimonials-card">
            <div className="testimonials-card-image-container">
              <img
                className="testimonials-card-image"
                src="..\images\3.jpg"
                alt="Client Photo"
              />
              <p className="testimonials-card-client-name">Miriam</p>
            </div>
            <p className="testimonials-review-text">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae
              obcaecati dolorem laudantium, id nostrum adipisci iusto harum
              dignissimos. In, facilis.
            </p>
          </div>
          <div className="testimonials-card">
            <div className="testimonials-card-image-container">
              <img
                className="testimonials-card-image"
                src="..\images\2.jpg"
                alt="Client Photo"
              />
              <p className="testimonials-card-client-name">Antonio</p>
            </div>
            <p className="testimonials-review-text">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Laudantium adipisci vitae suscipit porro aliquam? Magnam
              perferendis hic libero nesciunt in?
            </p>
          </div>
          <div className="testimonials-card">
            <div className="testimonials-card-image-container">
              <img
                className="testimonials-card-image"
                src="..\images\4.png"
                alt="Client Photo"
              />
              <p className="testimonials-card-client-name">Francisca</p>
            </div>
            <p className="testimonials-review-text">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptas
              itaque consequatur nulla ipsa. Dignissimos praesentium voluptas
              odit exercitationem ipsam sequi?
            </p>
          </div>
        </section>
      </main>
    </>
  );
}

export default Testimonials;
