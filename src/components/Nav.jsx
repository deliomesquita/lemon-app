import "../styles/Nav.css";
/* Function to stop transitions on resize */
 (function() { 
        const classes = document.body.classList;
        let timer = 0;
        window.addEventListener('resize', function () {
            if (timer) {
                clearTimeout(timer);
                timer = null;
            }
            else
                classes.add('stop-transitions');

            timer = setTimeout(() => {
                classes.remove('stop-transitions');
                timer = null;
            }, 100);
        });
    })();
    
function Nav() {
  return (
    <nav className="navigation">
      <div id="menuToggle">
    <input type="checkbox" />
    <span></span>
    <span></span>
    <span></span>
    <ul id="menu">
        <li>
          <a href="/">Home</a>
        </li>
        <li>
          <a href="/about">About</a>
        </li>
        <li>
          <a href="/menu">Menu</a>
        </li>
        <li>
          <a href="/reservations">Reservations</a>
        </li>
        <li>
          <a href="/contact">Order Online</a>
        </li>
        <li>
          <a href="/login">Login</a>
        </li>
      </ul>
      </div>
    </nav>
  );
}

export default Nav;
