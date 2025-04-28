import React from "react";
import { createSlice } from "@reduxjs/toolkit";

const FeedbackSlice = createSlice({
  name: "feedback",
  initialState: [],
  reducers: {
    addFeedback: (state, action) => {
      state.push(action.payload);
    },
  },
});

export const { addFeedback } = FeedbackSlice.actions;
export default FeedbackSlice.reducer;
