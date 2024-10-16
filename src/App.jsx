import "./App.css";
import Header from "./components/Header";
import Home from "./components/Home";
import Hero from "./components/Hero";
import Specials from "./components/Specials";
import Testimonials from "./components/Testimonials";
import About from "./components/About";
import Footer from "./components/Footer";
import Booking from "./components/Booking";
import { useReducer, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import { fetchAPI, submitAPI } from "./api";
import ConfirmedBooking from "./components/ConfirmedBooking.jsx";
import { useNavigate } from "react-router-dom";

// Function with initial state
function initializeTimes() {
  const today = new Date();
  return fetchAPI(today);
}

// Function with custom state logic
function updateTimes(state, action) {
  switch (action.type) {
    case "update_times":
      return action.availableTimes;
    default:
      return state;
  }
}

function App() {
  // Creates the useNavigate hook
  const navigate = useNavigate();

  // Function to submit the form data to the API accpeting the formData
  function submitForm(formData) {
    const isSuccess = submitAPI(formData);
    if (isSuccess) {
      navigate("/confirmedBooking");
    } else {
      console.log("Something went wrong");
    }
  }

  // useEffect to fetch the data from the API when the component mounts
  useEffect(() => {
    const fetchInitialTimes = async () => {
      const times = await initializeTimes();

      dispatch({ type: "update_times", availableTimes: times });
    };
    fetchInitialTimes();
  }, []);

  //=================================================================//
  // reducer to update the available times from Booking component START
  const [availableTimes, dispatch] = useReducer(updateTimes, initializeTimes());

  // Function to handle series of cases that match how to update the state
  const handleDateChange = async (selectedDate) => {
    const date = new Date(selectedDate); // Ensure selectedDate is a valid Date object

    const times = await fetchAPI(date); // Pass the Date object to fetchAPI
    dispatch({ type: "update_times", availableTimes: times });
  };
  // reducer to update the available times from Booking component END//
  //=================================================================//

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
              submitForm={submitForm}
            />
          }
        />
        <Route path="/confirmedbooking" element={<ConfirmedBooking />} />
      </Routes>
      <Footer />
    </div>
  );
}

export { App, initializeTimes, updateTimes };
