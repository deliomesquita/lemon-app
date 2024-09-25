import "../styles/Footer.css";

function Footer() {
  return (
    <>
      <section className="footer__container__footer">
        <footer className="footer__container">
          <article className="footer-content">
            <img
              className="img--baguettes"
              src="\images\restauranfood.jpg"
              alt="Little Lemon Food"
            />
            <section className="footer-nav">
              <h2>Site Links</h2>
              <nav>
                <ul>
                  <li>
                    <a href="#">Home</a>
                  </li>
                  <li>
                    <a href="#">About</a>
                  </li>
                  <li>
                    <a href="#">Menu</a>
                  </li>
                  <li>
                    <a href="#">Reservations</a>
                  </li>
                  <li>
                    <a href="#">Order Online</a>
                  </li>
                </ul>
              </nav>
            </section>

            <section className="footer-nav">
              <h2>Social Media</h2>
              <nav>
                <ul>
                  <li>
                    <a
                      className="social-media-links"
                      href="https://www.facebook.com/littlelemonfood/"
                      target="_blank"
                    >
                      <img
                        className="facebook-img"
                        src="../images/facebook.png"
                        alt="Facebook"
                      />
                    </a>
                  </li>
                  <li>
                    <a
                      className="social-media-links"
                      href="https://www.instagram.com/littlelemonfood/"
                      target="_blank"
                    >
                      <img
                        className="instagram-img"
                        src="../images/instagram.png"
                        alt="Instagram"
                      />
                    </a>
                  </li>
                </ul>
              </nav>
            </section>

            <section className="footer-nav">
              <h2>Contact</h2>
              <nav>
                <ul>
                  <li className="footer---contact--address">
                    123 Main St, Lisbon, Portugal
                  </li>
                  <li>
                    <a href="tel:+123456789">+1 234-567-890</a>
                  </li>
                  <li>
                    <a href="mailto:info@littlelemonfood.com">
                      info@littlelemonfood.com
                    </a>
                  </li>
                </ul>
              </nav>
            </section>
          </article>
        </footer>
      </section>
    </>
  );
}

export default Footer;
