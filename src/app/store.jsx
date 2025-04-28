import { configureStore } from "@reduxjs/toolkit";
import feedbackReducer from "../features/feedback/FeedbackSlice";

export const store = configureStore({
  reducer: {
    feedback: feedbackReducer,
  },
});
