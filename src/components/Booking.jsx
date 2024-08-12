import "../styles/Booking.css";

function Booking() {
  return (
    <section className="booking__container__booking">
      <article className="article__booking__container">
        <h2>Personal Details</h2>
        <h3>Fill the details</h3>
        <form className="booking__form__container">
          <div className="booking__date__time__container">
            <div className="booking__interior__date__container">
              <label for="date">
                Date <span className="red-star">*</span>
              </label>
              <input required type="date" id="date" />
            </div>
            <div className="booking__interior__time__container">
              <label for="time">
                Time <span className="red-star">*</span>
              </label>
              <input required type="time" id="time" />
            </div>
          </div>

          <div className="booking__adults__children__container">
            <div className="booking__interior__adults__container">
              <label for="adults">
                Adults <span className="red-star">*</span>
              </label>
              <select id="adults" required>
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
              <label for="children">
                Children <span className="red-star">*</span>
              </label>
              <select id="children" required>
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

              {/* <input required type="number" min="0" id="children" /> */}
            </div>
          </div>

          <div className="booking__name__container">
            <div className="booking__interior__firstname__container">
              <label for-="firstname">
                First Name <span className="red-star">*</span>
              </label>
              <input
                required
                type="text"
                id="firstname"
                placeholder="Enter your first name"
              />
            </div>
            <div className="booking__interior__lastname__container">
              <label for="lastname">
                Last Name <span className="red-star">*</span>
              </label>
              <input
                required
                type="text"
                id="lastname"
                placeholder="Enter your last name"
              />
            </div>
          </div>

          <div className="booking__email__container">
            <label for="email">
              Email <span className="red-star">*</span>
            </label>
            <input
              required
              type="email"
              id="email"
              placeholder="Enter your email address"
            />
          </div>
          <div className="booking__phone__container">
            <label for="phone">
              Phone <span className="red-star">*</span>
            </label>
            <input
              required
              type="tel"
              id="phone"
              placeholder="Enter your phone number"
            />
          </div>
          <div className="booking__specialrequest__container">
            <label for="specialrequest">
              Special Request <span className="red-star">*</span>
            </label>
            <input
              required
              type="text"
              id="specialrequest"
              placeholder="Write your special request"
            />
          </div>
          <button className="booking__button">Reserve Now</button>
        </form>
      </article>
    </section>
  );
}

export default Booking;
