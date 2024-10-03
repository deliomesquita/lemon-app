import { render, screen } from "@testing-library/react";
import Booking from "./components/Booking";
import { updateTimes, initialzeTimes } from "./App";

const TIMES = ["17:00", "18:00", "19:00", "20:00", "21:00", "22:00"];

test("renders the Booking heading", () => {
  render(<Booking availableTimes={TIMES} />);
  const headingElement = screen.getByText("Time");
  expect(headingElement).toBeInTheDocument();
});

test("Validate the initial state of the reducer", () => {
  const initialState = initialzeTimes();

  expect(initialState).toEqual(TIMES);
});

test("Validate the same value that is provided in the state", () => {
  const initialState = initialzeTimes();
  const action = { type: "update_times", availableTimes: initialState };
  const updatedState = updateTimes(initialState, action);
  expect(updatedState).toEqual(initialState);
});
