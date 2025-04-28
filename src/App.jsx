import React from "react";
import "./index.css";

import FeedbackForm from "./components/FeedbackForm";
import FeedbackList from "./features/feedback/FeedbackList";

const App = () => {
  return (
    <div id="App">
      <h1>User feedback App</h1>
      <FeedbackForm />
      <hr />
      <FeedbackList />
    </div>
  );
};

export default App;
