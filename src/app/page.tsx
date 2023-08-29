import styles from "./page.module.css";
import SumTwoValues from "./Components/SumTwoValues";
import SumTwoProps from "./Components/SumTwoProps";
import React from "react";

export default function Home() {
  return (
    <main className={styles.main}>
      <div className={styles.description}>
        <SumTwoValues />
        <SumTwoProps num1={0} num2={0} />
      </div>
    </main>
  );
}
