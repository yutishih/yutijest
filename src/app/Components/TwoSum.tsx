//tell nextjs to use client component instead of server one.
"use client";

import React, { FC, useState } from "react";

export const twoSumQuestion = (
  nums: number[],
  target: number
): [number, number][] => {
  const hashMap: { [key: number]: number[] } = {};
  const answers: [number, number][] = [];

  for (let i = 0; i < nums.length; i++) {
    const complement = target - nums[i];
    if (hashMap[complement] !== undefined) {
      for (const index of hashMap[complement]) {
        answers.push([index, i]);
      }
    }
    if (hashMap[nums[i]] === undefined) {
      hashMap[nums[i]] = [];
    }
    hashMap[nums[i]].push(i);
  }
  return answers;
};

const TwoSum: FC = () => {
  const [arrayInput, setArrayInput] = useState<string>("");
  const [targetNumber, setTargetNumber] = useState<number | null>(null);
  const [answer, setAnswer] = useState<[number, number][] | null>(null);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const nums = arrayInput.split(" ").map((num) => parseInt(num.trim()));
    if (targetNumber !== null) {
      const result = twoSumQuestion(nums, targetNumber);
      setAnswer(result);
    }
  };

  return (
    <div className="question-wrap">
      <div>Leetcode #1: Two Sum</div>
      <form onSubmit={handleSubmit}>
        <p>Input an array - space-separated:</p>
        <input
          className="form-element"
          type="text"
          placeholder="Array Input"
          value={arrayInput}
          onChange={(e) => setArrayInput(e.target.value)}
        />
        <p>input a target number:</p>
        <input
          className="form-element"
          type="number"
          placeholder="Target Input"
          value={targetNumber ?? ""}
          onChange={(e) => setTargetNumber(parseInt(e.target.value))}
        />
        <button className="form-element" type="submit" value="Submit">
          SUBMIT
        </button>
      </form>
      <p>Answer: </p>
      {answer === null ? (
        "No value has been inputted"
      ) : answer.length > 0 ? (
        <ul>
          {answer.map((pair, index) => (
            <li key={index}>{pair.join(", ")}</li>
          ))}
        </ul>
      ) : (
        "Not found"
      )}
    </div>
  );
};

export default TwoSum;
