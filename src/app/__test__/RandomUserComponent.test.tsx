import React from "react";
import { render, screen, waitFor, act } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import axios from "axios";
import RandomUserComponent from "../Components/RandomUserComponent";

//We mock Axios using jest.mock('axios') so that we can control its behavior in the tests.
jest.mock("axios");

describe("RandomUserComponent Component", () => {
  //The first test checks if the component displays "Loading..." initially.
  it("renders loading state initially", () => {
    render(<RandomUserComponent />);
    expect(screen.getByText("Loading...")).toBeInTheDocument();
  });

  //The second test mocks a successful API response and checks if the component renders the user data correctly.
  it("renders user data when API call is successful", async () => {
    // Mock successful API response
    (axios.get as jest.Mock).mockResolvedValue({
      data: {
        results: [
          {
            name: { title: "Mr", first: "John", last: "Doe" },
            email: "john.doe@example.com",
            phone: "123-456-7890",
            picture: { large: "https://example.com/johndoe.jpg" },
          },
        ],
      },
    });
    render(<RandomUserComponent />);

    //Async Handling: We use waitFor from @testing-library/react to wait for the component to re-render after the mock API call is resolved or rejected.
    await waitFor(() => {
      //Assertions: We use expect along with toBeInTheDocument() to check if the expected elements are present in the document.
      expect(screen.getByText("Mr John Doe")).toBeInTheDocument();
      expect(screen.getByText("Phone: 123-456-7890")).toBeInTheDocument();
      expect(
        screen.getByText("Email: john.doe@example.com")
      ).toBeInTheDocument();
      expect(screen.getByAltText("John's profile")).toBeInTheDocument();
    });
  });

  //The third test mocks a failed API response and checks if the component displays an error message.
  it("renders error message when API call fails", async () => {
    // Mock failed API response
    (axios.get as jest.Mock).mockRejectedValue(
      new Error("An API error occurred")
    );

    render(<RandomUserComponent />);

    //Using a Regular Expression, otherwise the test will fail
    await waitFor(() => {
      expect(screen.getByText(/An API error occurred/)).toBeInTheDocument();
    });
  });
});
