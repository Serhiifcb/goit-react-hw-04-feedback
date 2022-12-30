import React, {useState} from "react";
import { FeedbackOptions } from "./FeedbackOptions/FeedbackOptions";
import { Notification } from "./Notification/Notification";
import { Section } from "./Section/Section";
import { Statistics } from "./Statistics/Statistics";

export const App = () => {

  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const incrementState = (event) => {
    switch (event.target.name) {
      case 'good':
        setGood(state => state + 1)
        break;
      
      case 'neutral':
        setNeutral(state => state + 1)
        break;
      
      case 'bad':
        setBad(state => state + 1)
        break;
    
      default:
        break;
    }
  }
  const countTotalFeedback = () => (good + neutral + bad)
  const countPositiveFeedbackPercentage = () => (Math.round(good / (countTotalFeedback()) * 100));
  const optionNames = Object.keys({ good, neutral, bad });
  
  return (
      <div>
        <Section title="Please leave feedback">
          <FeedbackOptions
          options={optionNames}
          onLeaveFeedback={incrementState}
          />
        </Section>
        <Section title="Statictics">
          {countTotalFeedback() > 0 ? (<Statistics
            good={good}
            neutral={neutral}
            bad={bad}
            total={countTotalFeedback()}
            positivePercentage={countPositiveFeedbackPercentage()}
          />) : <Notification message="There is no feedback" />}
        </Section>
      </div>
    );
}


// export class App extends React.Component {
  
//   state = {
//     good: 0,
//     neutral: 0,
//     bad: 0
//   }
  
//   incrementState = (event) => {
//     this.setState(prevState => ({[event.target.name]: prevState[event.target.name] + 1}));
//   }

//   countTotalFeedback = () => (this.state.good + this.state.neutral + this.state.bad)
  
//   countPositiveFeedbackPercentage = () => (Math.round(this.state.good / (this.countTotalFeedback()) * 100)); 

//   render() {
//     const { good, neutral, bad } = this.state
//     const optionNames = Object.keys(this.state)
//     return (
//       <div>
//         <Section title="Please leave feedback">
//           <FeedbackOptions
//           options={optionNames}
//           onLeaveFeedback={this.incrementState}
//           />
//         </Section>
//         <Section title="Statictics">
//           {this.countTotalFeedback() > 0 ? (<Statistics
//             good={good}
//             neutral={neutral}
//             bad={bad}
//             total={this.countTotalFeedback()}
//             positivePercentage={this.countPositiveFeedbackPercentage()}
//           />) : <Notification message="There is no feedback" />}
//         </Section>
//       </div>
//     );
//   }
// }


