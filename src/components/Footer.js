function Footer() {
  return (
    <footer>
      <section className="footer-content">
        <img
          className="footer-img"
          src="\images\restauranfood.jpg"
          alt="Little Lemon Food"
        />
        <section className="footer-nav">
          <h2>Doormat Nav igation</h2>
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
      </section>

      <section className="footer-nav">
        <h2>Contact</h2>
        <nav>
          <ul>
            <li>123 Main St, Lisbon, Portugal</li>
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

      <section className="footer-nav">
        <h2>Social Media Links</h2>
        <nav>
          <ul>
            <li>
              <a
                href="https://www.facebook.com/littlelemonfood/"
                target="_blank"
              >
                facebook
              </a>
            </li>
            <li>
              <a
                href="https://www.instagram.com/littlelemonfood/"
                target="_blank"
              >
                Instagram
              </a>
            </li>
          </ul>
        </nav>
      </section>
    </footer>
  );
}

export default Footer;
