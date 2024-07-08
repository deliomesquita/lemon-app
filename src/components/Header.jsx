import Nav from "./Nav";
import "../styles/Header.css";

function Header() {
  return <header>
    
    <section className="header">
      <div className="logo-container">
    <img className="logo" src="\images\Logo1.svg" alt="Little Lemon" />
      </div>
    <Nav />
    </section>
  </header>;
}

export default Header;
