import React from "react";
import { render, screen, waitFor, act } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import axios from "axios";
import RandomUserComponent from "../Components/RandomUserComponent";

jest.mock("axios");
const mockedAxios = axios as jest.Mocked<typeof axios>;

describe("RandomUserComponent", () => {
  beforeEach(() => {
    mockedAxios.get.mockImplementation(
      () =>
        new Promise((resolve) =>
          setTimeout(() => resolve({ data: { results: [] } }), 300)
        )
    );
  });

  it("renders loading state initially", async () => {
    await act(async () => {
      render(<RandomUserComponent />);
    });
    const loadingElement = await screen.findByText("Loading...");
    expect(loadingElement).toBeInTheDocument();
  });

  it("renders random user data after fetching", async () => {
    const fakeUserData = {
      name: { title: "Mr", first: "John", last: "Doe" },
      email: "john.doe@example.com",
      phone: "123-456-789",
      picture: { large: "https://example.com/pic.jpg" },
    };

    // mockedAxios.get.mockResolvedValueOnce({
    //   data: { results: [fakeUserData] },
    // });
    mockedAxios.get.mockImplementation(
      () =>
        new Promise((resolve) =>
          setTimeout(() => resolve({ data: { results: [fakeUserData] } }), 300)
        )
    );

    await act(async () => {
      render(<RandomUserComponent />);
      await waitFor(async () => {
        screen.debug(); //debug line
        expect(screen.getByText("Mr John Doe")).toBeInTheDocument();
        expect(screen.getByText("Phone: 123-456-789")).toBeInTheDocument();
        expect(
          screen.getByText("Email: john.doe@example.com")
        ).toBeInTheDocument();
      });
    });
  });

  it("renders an error message when the fetch fails", async () => {
    mockedAxios.get.mockRejectedValueOnce(new Error("An error occurred"));

    await act(async () => {
      render(<RandomUserComponent />);
      await waitFor(async () => {
        const errorElement = await screen.findByText(
          /Error: An error occurred/i
        );
        expect(errorElement).toBeInTheDocument();
      });
    });
  });
});
