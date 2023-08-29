import React from "react";

interface Props {
  num1: number;
  num2: number;
}

const SumTwoProps: React.FC<Props> = ({ num1, num2 }) => {
  const calTwoValues = (a: number, b: number) => {
    return a + b;
  };

  return <div>{calTwoValues(num1, num2)}</div>;
};

export default SumTwoProps;
