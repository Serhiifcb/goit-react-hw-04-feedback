import React from "react";
import { FeedbackOptions } from "./FeedbackOptions/FeedbackOptions";
import { Notification } from "./Notification/Notification";
import { Section } from "./Section/Section";
import { Statistics } from "./Statistics/Statistics";

export class App extends React.Component {
  
  state = {
    good: 0,
    neutral: 0,
    bad: 0
  }
  
  incrementState = (event) => {
    this.setState(prevState => ({[event.target.name]: prevState[event.target.name] + 1}));
  }

  countTotalFeedback = () => (this.state.good + this.state.neutral + this.state.bad)
  
  countPositiveFeedbackPercentage = () => (Math.round(this.state.good / (this.countTotalFeedback()) * 100)); 

  render() {
    const { good, neutral, bad } = this.state
    const optionNames = Object.keys(this.state)
    return (
      <div>
        <Section title="Please leave feedback">
          <FeedbackOptions
          options={optionNames}
          onLeaveFeedback={this.incrementState}
          />
        </Section>
        <Section title="Statictics">
          {this.countTotalFeedback() > 0 ? (<Statistics
            good={good}
            neutral={neutral}
            bad={bad}
            total={this.countTotalFeedback()}
            positivePercentage={this.countPositiveFeedbackPercentage()}
          />) : <Notification message="There is no feedback" />}
        </Section>
      </div>
    );
  }
}


