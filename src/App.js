import "./styles.css";
import React from "react";
import questions from "./data";
import QuestionCard from "./components/QuestionCard";
export default function App() {
  return (
    // <div className="App">
    // <h1>Hello CodeSandbox</h1>
    // <h2>Start editing to see some magic happen!</h2>
    // </div>
    <div>
      <h1>Interview Questions and Answere </h1>
      {questions.map((item) => (
        <QuestionCard
          key={item.id}
          question={item.question}
          answer={item.answer}
        />
      ))}
    </div>
  );
}
