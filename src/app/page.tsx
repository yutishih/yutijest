// import styles from "./page.module.css";
import "./style.css";
import React from "react";
import SumTwoValues from "./Components/SumTwoValues";
import SumTwoProps from "./Components/SumTwoProps";
import TwoSum from "./Components/TwoSum";
import RandomUserComponent from "./Components/RandomUserComponent";

export default function Home() {
  return (
    <div className="main">
      <div className="component-wrap">
        {/* <SumTwoValues /> */}
        {/* <SumTwoProps num1={0} num2={0} /> */}
        {/* <TwoSum /> */}
        <RandomUserComponent />
      </div>
    </div>
  );
}
