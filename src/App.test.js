import { render, screen } from "@testing-library/react";
import Booking from "./components/Booking";
import { updateTimes, initializeTimes } from "./App";
import { fetchAPI } from "./api";

// Mock the fetchAPI function to return a predefined array of times
jest.mock("./api", () => ({
  fetchAPI: jest.fn(),
}));

// Reset mocks before each test
beforeEach(() => {
  jest.clearAllMocks();
});

// 1st test

test("Validate the initial state of the reducer", () => {
  // Mock fetchAPI to return the expected times
  fetchAPI.mockReturnValueOnce([
    "17:00",
    "18:00",
    "19:00",
    "20:00",
    "21:00",
    "22:00",
  ]);

  const initialState = initializeTimes();

  // Assert that the initial state matches the mock fetchAPI output
  expect(initialState).toEqual([
    "17:00",
    "18:00",
    "19:00",
    "20:00",
    "21:00",
    "22:00",
  ]);
});

// 2nd test

test("Validate the reducer updates the state", () => {
  // Create an initial state from initializeTimes
  fetchAPI.mockReturnValueOnce([
    "17:00",
    "18:00",
    "19:00",
    "20:00",
    "21:00",
    "22:00",
  ]);

  const initialState = initializeTimes();

  // Action that updates the state with new availableTimes
  const action = {
    type: "update_times",
    availableTimes: ["18:00", "19:00", "20:00"],
  };

  // Call updateTimes with the initial state and the action
  const updateState = updateTimes(initialState, action);

  // Assert that the updated state matches the action's availableTimes
  expect(updateState).toEqual(["18:00", "19:00", "20:00"]);
});
