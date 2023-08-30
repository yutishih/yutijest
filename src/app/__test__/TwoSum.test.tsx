import React from "react";
import { render, fireEvent, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import TwoSum, { twoSumQuestion } from "../Components/TwoSum";

describe("twoSumQuestion function", () => {
  it("should return an empty array if no pairs sum up to the target", () => {
    expect(twoSumQuestion([1, 2, 3], 10)).toEqual([]);
  });

  it("should return pairs of indices that sum up to the target", () => {
    expect(twoSumQuestion([2, 7, 11, 15], 9)).toEqual([[0, 1]]);
  });

  it("should handle multiple pairs that sum up to the target", () => {
    expect(twoSumQuestion([3, 3, 11, 15], 6)).toEqual([[0, 1]]);
  });
});

describe("TwoSum React component", () => {
  it('should display "No value has been inputted" initially', () => {
    render(<TwoSum />);
    expect(screen.getByText("No value has been inputted")).toBeInTheDocument();
  });

  it("should display the answer when the form is submitted", async () => {
    render(<TwoSum />);

    fireEvent.change(screen.getByPlaceholderText("Array Input"), {
      target: { value: "2 7 11 15" },
    });
    fireEvent.change(screen.getByPlaceholderText("Target Input"), {
      target: { value: "9" },
    });
    fireEvent.click(screen.getByText(/SUBMIT/i));

    expect(screen.getByText("0, 1")).toBeInTheDocument();
  });
});
