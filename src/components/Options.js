function Options({ question, answer, dispatch }) {
  const answered = answer !== null;

  return (
    <div className="options">
      {question.options.map((q, i) => (
        <button
          className={`btn btn-option ${i === answer ? "answer" : ""} ${
            answered ? (i === question.correctOption ? "correct" : "wrong") : ""
          }`}
          key={q}
          onClick={() => dispatch({ type: "newAnswer", payload: i })}
          disabled={answered}
        >
          {q}
        </button>
      ))}
    </div>
  );
}

export default Options;
