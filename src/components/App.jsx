import React, { Component } from 'react';
import FeedbackOptions from './Feedback/FeedbackOptions';
import Notification from './Notification/Notification';
import Section from './Section/Section';
import Statistics from './Statistic/Statistics';

export default class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0
  }

  updateState = (key) => {
    this.setState((state) =>
      ({ ...state, [key]: state[key] + 1 })
    );
  };

  countTotalFeedback = () => {
    return this.state.good + this.state.neutral + this.state.bad;
  }

  countPositiveFeedbackPercentage = () => {
    return Math.round((this.state.good / this.countTotalFeedback()) * 100);
  }

  render() {
    const stateKey = [];
    for (const key in this.state) {
      stateKey.push(key);
    }

    return (
      <>
        <Section title="Please leave feedbeck">
          <FeedbackOptions
            keys={stateKey}
            updateState={this.updateState}
          />
        </Section>
        <Section title="Statistics">
          {this.countTotalFeedback() ? (
            <Statistics
              stateKey={stateKey}
              state={this.state}
              total={this.countTotalFeedback}
              positivePercentage={this.countPositiveFeedbackPercentage}
            />
          ) : (
            <Notification message="There is no feedback" />
          )}
        </Section>
      </>
    )
  };
}
