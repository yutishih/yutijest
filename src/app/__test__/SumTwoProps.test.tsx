import React from "react";
import { render } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import SumTwoProps from "../Components/SumTwoProps";

describe("SumTwoProps Component", () => {
  it("should render the sum of 5 and 6 as 11", () => {
    const { getByText } = render(<SumTwoProps num1={5} num2={6} />);
    expect(getByText("11")).toBeInTheDocument();
  });

  it("should render the sum of 3 and 2 as 5", () => {
    const { getByText } = render(<SumTwoProps num1={3} num2={2} />);
    expect(getByText("5")).toBeInTheDocument();
  });

  it("should render the sum of -1 and 1 as 0", () => {
    const { getByText } = render(<SumTwoProps num1={-1} num2={1} />);
    expect(getByText("0")).toBeInTheDocument();
  });
});
