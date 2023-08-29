import React from "react";

function SumTwoValues() {
  const calTwoValues = (a: number, b: number) => {
    return a + b;
  };
  return <div>{calTwoValues(5, 6)}</div>;
}

export default SumTwoValues;
