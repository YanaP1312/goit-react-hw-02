import { useState } from "react";
import "./App.css";
import Description from "./components/Description/Description";
import Feedback from "./components/Feedback/Feedback";
import Options from "./components/Options/Options";

function App() {
  const [values, setValues] = useState({
    good: 0,
    neutral: 0,
    bad: 0,
  });

  function updateFeedback(feedbackType) {
    setValues((defaultValues) => ({
      ...defaultValues,
      [feedbackType]: defaultValues[feedbackType] + 1,
    }));
  }

  return (
    <div>
      <Description />
      <Options children="Good" onClick={() => updateFeedback("good")} />
      <Options children="Neutral" onClick={() => updateFeedback("neutral")} />
      <Options children="Bad" onClick={() => updateFeedback("bad")} />
      <Feedback children="Good" value={values.good} />
      <Feedback children="Neutral" value={values.neutral} />
      <Feedback children="Bad" value={values.bad} />
    </div>
  );
}

export default App;
