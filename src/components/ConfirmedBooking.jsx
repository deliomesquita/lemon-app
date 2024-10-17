import "../styles/ConfirmedBooking.css";
import { useNavigate } from "react-router-dom";

function ConfirmedBooking() {
  const navigate = useNavigate();
  function navigatePage() {
    return navigate("/");
  }

  return (
    <>
      <section className="confirmed__booking__container">
        <article className="article__confirmed__booking__container">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 126 95"
            width="126"
            height="95"
          >
            <path
              class="check-element-square"
              stroke="#1cd42d"
              stroke-width="2"
              stroke-linejoin="round"
              stroke-linecap="round"
              stroke-miterlimit="10"
              stroke-dasharray="534"
              stroke-dashoffset="535"
              fill="#1cd42d"
              d="M107.5 52.5c-.3-.1-.5-.2-.8-.2-.6 0-1.1.2-1.5.7l-4.2 4.2c-.4.4-.6.9-.6 1.4v16.6c0 2.9-1 5.3-3.1 7.4-2 2-4.5 3.1-7.4 3.1H35.8c-2.9 0-5.3-1-7.4-3.1-2-2-3.1-4.5-3.1-7.4V20.9c0-2.9 1-5.3 3.1-7.4 2-2 4.5-3.1 7.4-3.1H90c1 0 1.9.1 2.9.4.3.1.5.1.6.1.6 0 1.1-.2 1.5-.7L98.2 7c.6-.4.8-1 .7-1.7-.1-.7-.5-1.2-1.2-1.5-2.3-1.1-4.9-1.6-7.6-1.6H35.8c-5.2 0-9.6 1.8-13.3 5.5C18.8 11.4 17 15.8 17 21v54.2c0 5.2 1.8 9.6 5.5 13.3 3.7 3.7 8.1 5.5 13.3 5.5H90c5.2 0 9.6-1.8 13.3-5.5 3.7-3.7 5.5-8.1 5.5-13.3V54.4c0-.9-.4-1.5-1.3-1.9zm0 0"
            />
            <path
              class="check-element"
              stroke="#1cd42d"
              stroke-width="2"
              stroke-linejoin="round"
              stroke-linecap="round"
              stroke-miterlimit="10"
              stroke-dasharray="340"
              stroke-dashoffset="340"
              fill="#1cd42d"
              d="M123.9 15.1l-7.2-7.2c-1-1-2.3-1.6-3.7-1.6-1.4 0-2.7.5-3.7 1.6L67.1 50.1 50 33c-1-1-2.3-1.6-3.7-1.6-1.4 0-2.7.5-3.7 1.6l-7.2 7.2c-1 1-1.6 2.3-1.6 3.7 0 1.4.5 2.7 1.6 3.7l28 28c1 1 2.3 1.6 3.7 1.6 1.4 0 2.7-.5 3.7-1.6l53.1-53.1c1-1 1.6-2.3 1.6-3.7-.1-1.4-.6-2.6-1.6-3.7zm0 0"
            />
          </svg>
          <div className="confirmed-booking-text-container">
            <h2>Thanks for submitting!</h2>
            <p>Your booking has been confirmed!</p>
            <button className="go-home-button" onClick={navigatePage}>
              Go Home
            </button>
          </div>
        </article>
      </section>
    </>
  );
}

export default ConfirmedBooking;
