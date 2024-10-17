import { Link } from "react-router-dom";
import "../styles/Nav.css";
import { useEffect } from "react"; // Import useEffect for handling event listeners

/* Function to stop transitions on resize */
(function () {
  const classes = document.body.classList;
  let timer = 0;
  window.addEventListener("resize", function () {
    if (timer) {
      clearTimeout(timer);
      timer = null;
    } else classes.add("stop-transitions");

    timer = setTimeout(() => {
      classes.remove("stop-transitions");
      timer = null;
    }, 100);
  });
})();

function Nav() {
  useEffect(() => {
    const links = document.querySelectorAll("#menu a");
    const checkbox = document.querySelector("#menuToggle input");

    // Add a click event listener to each link in the menu
    links.forEach((link) => {
      link.addEventListener("click", () => {
        checkbox.checked = false; // Uncheck the burger menu checkbox to close it
      });
    });

    // Clean up event listeners on component unmount
    return () => {
      links.forEach((link) => {
        link.removeEventListener("click", () => {
          checkbox.checked = false;
        });
      });
    };
  }, []);

  return (
    <nav className="navigation">
      <div id="menuToggle">
        <input type="checkbox" />
        <span></span>
        <span></span>
        <span></span>
        <ul id="menu">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/specials">Specials</Link>
          </li>
          <li>
            <Link to="/testimonials">Testimonials</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/booking">Booking</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Nav;
