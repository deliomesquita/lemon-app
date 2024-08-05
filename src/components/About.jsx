import "../styles/About.css";

function About() {
  return (
    <>
      <main className="about__container__about">
        <section className="about__container">
          <div className="about__text__block">
            <h2 className="about-intro-text-title">Little Lemon</h2>
            <h3 className="about__city">Chicago</h3>
            <p className="about__text">
              Amet minim mollit non deserunt ullamco est sit aliqua dolor do
              amet sint. Velit officia consequat duis enim velit mollit.
              Exercitation veniam consequat sunt nostrud amet. Amet minim mollit
              non deserunt ullamco est sit aliqua dolor do amet sint. Velit
              officia consequat duis enim velit mollit.
            </p>
          </div>
          <div className="about__images__container">
            <img
              className="about__image1"
              src="..\images\restaurantchef.jpg"
              alt="Restaurant Chef"
            />
            <img
              className="about__image2"
              src="..\images\MarioandAdrian A.jpg"
              alt="Restaurant Chefs"
            />
          </div>
        </section>
      </main>
    </>
  );
}

export default About;
