import React, { useState } from "react";

function QuestionCard({ question, answer }) {
  const [showAnswer, setShowAnswer] = useState(false);

  return (
    <div style={styles.card}>
      <h3>{question}</h3>
      <button onClick={() => setShowAnswer(!showAnswer)}>
        {showAnswer ? "Hide Answer" : "Show Answer"}
      </button>
      {showAnswer && <p>{answer}</p>}
    </div>
  );
}

const styles = {
  card: {
    border: "1px solid black",
    borderRadius: "5px",
    backgroundColor: "#f9f9f9",
    padding: "5px",
    marginBottom: "1rem",
  },
};

export default QuestionCard;
