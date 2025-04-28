import React from "react";
import { useSelector } from "react-redux";

const FeedbackList = () => {
  const feedBacks = useSelector((state) => state.feedback);
  return (
    <div>
      <h3>Submitted Feedback :</h3>
      {feedBacks?.length === 0 && <p>No feedback yet</p>}
      <ul>
        {feedBacks?.map((feed, ind) => {
          return (
            <li key={ind}>
              <strong>{feed?.name}</strong>({feed?.email}) : {feed?.message}
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default FeedbackList;
