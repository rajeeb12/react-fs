import { useState } from "react";

import Statistics from "./Statistics";

function App() {
  const [click, setClick] = useState({
    good: 0,
    neutral: 0,
    bad: 0,
    countFeedback: 0,
    sumOfFeedbackScore: 0,
  });
  const [score, setScore] = new useState({averageScore:0.0,positiveFeedBackPercentage:0.0})


  //good
  const handleGoodCount = () => {
    const newState = {
      ...click,
      good: click.good + 1,
      countFeedback: click.countFeedback + 1,
      sumOfFeedbackScore: click.sumOfFeedbackScore + 1,
    };
    const scoreNewState = {
      averageScore : newState.sumOfFeedbackScore / newState.countFeedback,
      positiveFeedBackPercentage : (newState.good / newState.countFeedback) * 100,
    }
    setClick(newState);
    setScore(scoreNewState);
  };

  // neutral
  const handleNeutralCount = () => {
    const newState = {
      ...click,
      neutral: click.neutral + 1,
      countFeedback: click.countFeedback + 1,
    };
    const scoreNewState = {
      averageScore : newState.sumOfFeedbackScore / newState.countFeedback,
      positiveFeedBackPercentage : (newState.good / newState.countFeedback) * 100,
    }
    setClick(newState);
    setScore(scoreNewState);
  };

  //bad
  const handleBadCount = () => {
    const newState = {
      ...click,
      bad: click.bad + 1,
      countFeedback: click.countFeedback + 1,
      sumOfFeedbackScore: click.sumOfFeedbackScore - 1, 
    };
    const scoreNewState = {
      averageScore : newState.sumOfFeedbackScore / newState.countFeedback,
      positiveFeedBackPercentage : (newState.good / newState.countFeedback) * 100,
    }
    setClick(newState);
    setScore(scoreNewState);
  };
  console.log(
    click.good,
    click.neutral,
    click.bad,
    click.countFeedback,
    click.sumOfFeedbackScore,
    score.averageScore,
    score.positiveFeedBackPercentage,
  );
  return (
    <div>
      <h1>Give Feedback </h1>
      <div>
        <button onClick={handleGoodCount}>Good</button>
        <button onClick={handleNeutralCount}>Neutral</button>
        <button onClick={handleBadCount}>Bad</button>
      </div>
      <Statistics click={click} score={score} />
    </div>
  );
}

export default App;
