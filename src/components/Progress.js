function Progress({ numQuestions, answer, points, index }) {
  return (
    <header className="progress">
      <progress max={15} value={index + Number(answer !== null)}></progress>
      <p>
        Question <strong>{index + 1}</strong>/{numQuestions}
      </p>
      <p>
        <strong>{points}</strong>/280
      </p>
    </header>
  );
}

export default Progress;
