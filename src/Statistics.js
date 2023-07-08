import React from "react";

const Statistics = (props) => {
    if(props.click.countFeedback === 0)
    {
        return(
            <div>
                <h1>No feedback given. Please give one.</h1>
            </div>
        )
    }
  return (
    <div>
      <h1>Statistics</h1>
      <p>Good : {props.click.good}</p>
      <p>Neutral : {props.click.neutral}</p>
      <p>Bad : {props.click.bad}</p>
      <p>Average : {props.score.averageScore}</p>
      <p>Positive : {props.score.positiveFeedBackPercentage}% </p>
    </div>
  );
};

export default Statistics;
