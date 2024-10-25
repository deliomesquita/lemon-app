import "../styles/Booking.css";
import { useState } from "react";
import React, { useEffect, useRef } from "react";

function Booking({ availableTimes, handleDateChange, submitForm }) {
  // create new date, remove the time and return just the date
  const newDate = () => {
    const date = new Date();
    // const dateWithoutTime = date.toLocaleDateString();
    return date;
  };

  // Function to handle the date change
  const handleDateChangeUpdate = (e) => {
    const selectedDate = e.target.value;
    setDate(selectedDate);
    handleDateChange(new Date(selectedDate));
  };
  // Create useState variables for the form data
  const [date, setDate] = useState(newDate);
  const [time, setTime] = useState("17:00");
  const [adults, setAdults] = useState("1");
  const [children, setChildren] = useState("0");
  const [firstname, setFirstname] = useState("");
  const [lastname, setLastname] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [specialrequest, setSpecialRequest] = useState("");
  const [occasion, setOccasion] = useState("Casual");

  // Create formData variable to store the form data
  const formData = [
    date,
    time,
    adults,
    children,
    firstname,
    lastname,
    email,
    phone,
    specialrequest,
    occasion,
  ];

  const handleSubmit = (e) => {
    e.preventDefault();
    submitForm(formData);
    console.log({
      date,
      time,
      adults,
      children,
      firstname,
      lastname,
      email,
      phone,
      specialrequest,
      occasion,
    });
  };

  // Use a ref to directly access the DOM element to set min attribute in the date picker
  const dateInputRef = useRef(null);

  useEffect(() => {
    if (dateInputRef.current) {
      // Get the current date
      const today = new Date().toISOString().split("T")[0];
      // Set the min attribute
      dateInputRef.current.setAttribute("min", today);
    }
  }, []);

  // Firstname validation with useRef to access the firstname input element
  const firstnameRef = useRef(null);

  useEffect(() => {
    if (firstnameRef.current) {
      const input = firstnameRef.current;

      const handleInvalid = (event) => {
        if (
          event.target.validity.patternMismatch ||
          event.target.validity.valueMissing
        ) {
          event.target.setCustomValidity(
            "Please enter a valid name with at least 3 characters, no numbers or special characters."
          );
        }
      };

      const handleChange = (event) => {
        event.target.setCustomValidity("");
      };

      // Add event listeners
      input.addEventListener("invalid", handleInvalid);
      input.addEventListener("change", handleChange);

      // Cleanup function to remove event listeners when component unmounts
      return () => {
        input.removeEventListener("invalid", handleInvalid);
        input.removeEventListener("change", handleChange);
      };
    }
  }, []);

  return (
    <>
      <section className="booking__container__booking">
        <article className="article__booking__container">
          <h2>Personal Details</h2>
          <h3>Fill the details</h3>
          <form className="booking__form__container" onSubmit={handleSubmit}>
            <div className="booking__date__time__container">
              <div className="booking__interior__date__container">
                <label htmlFor="date">
                  Date <span className="red-star">*</span>
                </label>
                <input
                  required
                  type="date"
                  id="date"
                  ref={dateInputRef}
                  value={date}
                  onChange={handleDateChangeUpdate}
                />
              </div>
              <div className="booking__interior__time__container">
                <label htmlFor="time">
                  Time <span className="red-star">*</span>
                </label>
                <select
                  id="time"
                  required
                  value={time}
                  onChange={(e) => setTime(e.target.value)}
                >
                  {availableTimes.map((time) => {
                    return (
                      <option value={time} key={time}>
                        {time}
                      </option>
                    );
                  })}
                </select>
              </div>
            </div>
            <div className="booking__adults__children__container">
              <div className="booking__interior__adults__container">
                <label htmlFor="adults">
                  Adults <span className="red-star">*</span>
                </label>
                <select
                  id="adults"
                  required
                  value={adults}
                  onChange={(e) => setAdults(e.target.value)}
                >
                  <option value="1">1</option>
                  <option value="2">2</option>
                  <option value="3">3</option>
                  <option value="4">4</option>
                  <option value="5">5</option>
                  <option value="6">6</option>
                  <option value="7">7</option>
                  <option value="8">8</option>
                  <option value="9">9</option>
                  <option value="10">10</option>
                  <option value="11">11</option>
                  <option value="12">12</option>
                  <option value="13">13</option>
                </select>
                {/* <input required type="number" min="1" id="adults" /> */}
              </div>
              <div className="booking__interior__children__container">
                <label htmlFor="children">Children</label>
                <select
                  id="children"
                  value={children}
                  onChange={(e) => setChildren(e.target.value)}
                >
                  <option value="0">0</option>
                  <option value="1">1</option>
                  <option value="2">2</option>
                  <option value="3">3</option>
                  <option value="4">4</option>
                  <option value="5">5</option>
                  <option value="6">6</option>
                  <option value="7">7</option>
                  <option value="8">8</option>
                  <option value="9">9</option>
                  <option value="10">10</option>
                </select>
              </div>
            </div>
            <div className="booking__name__container">
              <div className="booking__interior__firstname__container">
                <label htmlFor="firstname">
                  First Name <span className="red-star">*</span>
                </label>
                <input
                  pattern="^[A-Za-z]{3,}$"
                  required
                  type="text"
                  id="firstname"
                  ref={firstnameRef}
                  placeholder="Enter your first name"
                  value={firstname}
                  onChange={(e) => setFirstname(e.target.value)}
                />
              </div>
              <div className="booking__interior__lastname__container">
                <label htmlFor="lastname">
                  Last Name <span className="red-star">*</span>
                </label>
                <input
                  required
                  type="text"
                  id="lastname"
                  placeholder="Enter your last name"
                  value={lastname}
                  onChange={(e) => setLastname(e.target.value)}
                />
              </div>
            </div>
            <div className="booking__email__phone__container">
              <div className="booking__email__container">
                <label htmlFor="email">
                  Email <span className="red-star">*</span>
                </label>
                <input
                  pattern="/^((?!\.)[\w-_.]*[^.])(@\w+)(\.\w+(\.\w+)?[^.\W])$/gim;"
                  required
                  type="email"
                  id="email"
                  placeholder="Enter your email address"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
              <div className="booking__phone__container">
                <label htmlFor="phone">
                  Phone <span className="red-star">*</span>
                </label>
                <input
                  required
                  type="tel"
                  id="phone"
                  placeholder="Enter your phone number"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                />
              </div>
            </div>
            <div className="booking__specialrequest__container">
              <div className="booking__occasion__container">
                <label htmlFor="occasion">Occasion</label>
                <select
                  id="occasion"
                  value={occasion}
                  onChange={(e) => setOccasion(e.target.value)}
                >
                  <option value="Casual">Casual</option>
                  <option value="Birthday">Birthday</option>
                  <option value="Anniversary">Anniversary</option>
                  <option value="Wedding">Wedding</option>
                  <option value="Christening">Christening</option>
                </select>
              </div>
              <label htmlFor="specialrequest">Special Request</label>
              <textarea
                type="text"
                id="specialrequest"
                placeholder="Write your special request"
                value={specialrequest}
                onChange={(e) => setSpecialRequest(e.target.value)}
              />
            </div>
            <button className="booking__button">Reserve Now</button>
          </form>
        </article>
      </section>
    </>
  );
}

export default Booking;
