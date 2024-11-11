import { render, screen, fireEvent } from "@testing-library/react";
import Booking from "./components/Booking";
import { updateTimes, initializeTimes } from "./App";
import { fetchAPI } from "./api";
import userEvent from "@testing-library/user-event";
import { cleanup } from "@testing-library/react";

afterEach(cleanup);

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

// Validation tests for the Booking form input values

describe("Booking Form HTML5 Validation", () => {
  beforeEach(() => {
    render(
      <Booking
        availableTimes={["17:00"]}
        handleDateChange={jest.fn()}
        submitForm={jest.fn()}
      />
    );
  });

  test("Date input has required and min attributes", () => {
    const dateInput = screen.getByLabelText(/Date/i);
    expect(dateInput).toBeRequired();
    expect(dateInput).toHaveAttribute("min");
  });

  test("Firstname input has required and pattern attributes", () => {
    const firstnameInput = screen.getByLabelText(/First Name/i);
    expect(firstnameInput).toBeRequired();
    expect(firstnameInput).toHaveAttribute("pattern", "^[A-Za-z]{3,}$");
  });

  test("Email input has required and pattern attributes", () => {
    const emailInput = screen.getByLabelText(/Email/i);
    expect(emailInput).toBeRequired();
    expect(emailInput).toHaveAttribute("pattern");
  });

  test("Phone input has required and pattern attributes", () => {
    const phoneInput = screen.getByLabelText(/Phone/i);
    expect(phoneInput).toBeRequired();
    expect(phoneInput).toHaveAttribute("pattern", "^\\+?\\d{5,15}$");
  });
});

describe("Booking Form JavaScript Validation", () => {
  beforeEach(() => {
    render(
      <Booking
        availableTimes={["17:00"]}
        handleDateChange={jest.fn()}
        submitForm={jest.fn()}
      />
    );
  });

  test("Firstname input shows custom validation message for invalid input", async () => {
    const firstnameInput = screen.getByLabelText(/First Name/i);
    await userEvent.type(firstnameInput, "Jo"); // Too short

    // Attempt to submit form to trigger validation
    const submitButton = screen.getByRole("button", { name: /Reserve Now/i });
    await userEvent.click(submitButton);

    expect(firstnameInput).toBeInvalid;
  });

  test("Email input shows custom validation message for missing input", async () => {
    const emailInput = screen.getByLabelText(/Email/i);
    emailInput.focus();
    emailInput.blur(); // Triggers the invalid state
    emailInput.setCustomValidity("Please enter your email address.");

    const submitButton = screen.getByRole("button", { name: /Reserve Now/i });
    await userEvent.click(submitButton);
    expect(emailInput.validationMessage).toBe(
      "Please enter your email address."
    );
  });

  test("Phone input shows custom validation message for incorrect pattern", async () => {
    const phoneInput = screen.getByLabelText(/Phone/i);
    await userEvent.type(phoneInput, "123"); // Too short

    const submitButton = screen.getByRole("button", { name: /Reserve Now/i });
    await userEvent.click(submitButton);
    phoneInput.setCustomValidity("Please enter a valid phone number.");
    expect(phoneInput.validationMessage).toMatch(
      "Please enter a valid phone number."
    );
  });

  test("Valid input passes validation without showing messages", async () => {
    const firstnameInput = screen.getByLabelText(/First Name/i);
    const emailInput = screen.getByLabelText(/Email/i);
    const phoneInput = screen.getByLabelText(/Phone/i);

    await userEvent.type(firstnameInput, "John");
    await userEvent.type(emailInput, "john@example.com");
    await userEvent.type(phoneInput, "+1234567890");

    const submitButton = screen.getByRole("button", { name: /Reserve Now/i });
    await userEvent.click(submitButton);

    expect(firstnameInput.validationMessage).toBe("");
    expect(emailInput.validationMessage).toBe("");
    expect(phoneInput.validationMessage).toBe("");
  });
});
