export const FeedbackOptions = ({options, onLeaveFeedback}) => {
  return (
    <div>
      {Object.keys(options).map(option => (
        <button type="button" onClick={onLeaveFeedback} key={option} name={`${option}`}>{option.toUpperCase()}</button>
      ))}
    </div>
  )
}
