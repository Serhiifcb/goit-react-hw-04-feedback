export const Statistics = ({ good, neutral, bad, total, positivePercentage }) => {
  return (
    <div>
      <p>Good: <span>{good}</span></p>
      <p>Neutral: <span>{neutral}</span></p>
      <p>Bad: <span>{bad}</span></p>
      <p>Total: {total}</p>
      <p>Positive feedback: {positivePercentage}%</p>
    </div>
  )
}