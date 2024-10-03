import "./App.css";
import Header from "./components/Header";
import Home from "./components/Home";
import Hero from "./components/Hero";
import Specials from "./components/Specials";
import Testimonials from "./components/Testimonials";
import About from "./components/About";
import Footer from "./components/Footer";
import Booking from "./components/Booking";
import { useReducer } from "react";
import { Routes, Route } from "react-router-dom";

// Function with initial state
function initialzeTimes() {
  return ["17:00", "18:00", "19:00", "20:00", "21:00", "22:00"];
}

// Function with custom state logic
function updateTimes(state, action) {
  switch (action.type) {
    case "update_Times":
      return action.availableTimes;
    default:
      return state;
  }
}

function App() {
  //===================================================================//
  // reducer to update the available times from Booking component START
  const [availableTimes, dispatch] = useReducer(updateTimes, initialzeTimes());

  // Function to handle series of cases that match how to update the state
  const handleDateChange = (selectedTime) => {
    dispatch({ type: "update_times", availableTimes: selectedTime });
  };
  // reducer to update the available times from Booking component START//
  //===================================================================//

  return (
    <div className="app">
      <Header className="header"></Header>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/hero" element={<Hero />} />
        <Route path="/specials" element={<Specials />} />
        <Route path="/testimonials" element={<Testimonials fullScreen />} />
        <Route path="/about" element={<About />} />
        <Route
          path="/booking"
          element={
            <Booking
              availableTimes={availableTimes}
              handleDateChange={handleDateChange}
            />
          }
        />
      </Routes>
      <Footer />
    </div>
  );
}

export { App, initialzeTimes, updateTimes };
