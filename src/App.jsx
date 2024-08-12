import "./App.css";
import Header from "./components/Header";
import Home from "./components/Home";
import Hero from "./components/Hero";
import Specials from "./components/Specials";
import Testimonials from "./components/Testimonials";
import About from "./components/About";
import Footer from "./components/Footer";
import Booking from "./components/Booking";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="app">
      <Header className="header"></Header>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/hero" element={<Hero />} />
        <Route path="/specials" element={<Specials />} />
        <Route path="/testimonials" element={<Testimonials fullScreen />} />
        <Route path="/about" element={<About />} />
        <Route path="/booking" element={<Booking />} />
      </Routes>

      <Footer />
    </div>
  );
}

export default App;
