function Button({ dispatch, answer, index }) {
  if (answer === null) return;

  if (index < 14)
    return (
      <button
        className="btn btn-ui"
        onClick={() => dispatch({ type: "nextQ" })}
      >
        Next
      </button>
    );
  if (index === 14)
    return (
      <button
        className="btn btn-ui"
        onClick={() => dispatch({ type: "finish" })}
      >
        finish
      </button>
    );
}

export default Button;
