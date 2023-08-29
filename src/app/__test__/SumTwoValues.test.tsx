import React from "react";
import { render } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import SumTwoValues from "../Components/SumTwoValues";

// describe("SumTwoValues Component", () => {
//   it("should render the sum of 5 and 6 as 11", () => {
//     const { getByText, container } = render(<SumTwoValues />);
//     expect(getByText("11")).toBeInTheDocument();
//   });
// });

describe("SumTwoValues Component", () => {
  it("should render the sum of 5 and 6 as 11", () => {
    const { getByText, container } = render(<SumTwoValues />);

    // Using .toBeInTheDocument() to check if the element is in the document
    expect(getByText("11")).toBeInTheDocument();

    // Using .not.toBe() to check for the opposite of a matcher
    expect(getByText("11")).not.toBe(undefined);

    // Using .toBeDefined() to check if the element is defined
    expect(getByText("11")).toBeDefined();

    // Using .toBeTruthy() to check if the element is truthy
    expect(getByText("11")).toBeTruthy();

    // Using .toContainHTML() to check if the rendered output contains the expected HTML
    expect(container).toContainHTML("<div>11</div>");
  });
});
