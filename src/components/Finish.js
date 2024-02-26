function Finish({ points, highscore }) {
  const precentage = Math.ceil((points / 280) * 100);

  let emoji;
  if (precentage === 100) emoji = "🥇";
  if (precentage >= 80 && precentage < 100) emoji = "🥳";
  if (precentage >= 60 && precentage < 80) emoji = "☺";
  if (precentage >= 40 && precentage < 60) emoji = "😔";
  if (precentage <= 20) emoji = "🤦‍♂️";

  return (
    <>
      <p className="result">
        <span>{emoji}</span> You scored <strong>{points} </strong>
        out of 280 ({precentage}%)
      </p>
      <p className="highscore">(Highscore : {highscore} points)</p>
    </>
  );
}

export default Finish;
