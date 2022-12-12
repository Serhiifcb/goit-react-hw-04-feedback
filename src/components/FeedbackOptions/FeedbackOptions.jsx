import PropTypes from 'prop-types'

export const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  return (
    <div>
      {options.map(option => (
        <button type="button" onClick={onLeaveFeedback} key={option} name={`${option}`}>{option.toUpperCase()}</button>
      ))}
    </div>
  )
}

FeedbackOptions.propTypes = {
  options: PropTypes.arrayOf(PropTypes.string).isRequired,
  onLeaveFeedback:PropTypes.func.isRequired
}