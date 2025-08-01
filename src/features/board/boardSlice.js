import { createSlice } from "@reduxjs/toolkit";
import { v4 as uuidv4 } from "uuid";

const initialState = {
  Todo: [
    { id: uuidv4(), content: "Research project requirements" },
    { id: uuidv4(), content: "Create project repository on GitHub" },
    { id: uuidv4(), content: "Develop the main navigation component" },
  ],
  Inprogress: [
    { id: uuidv4(), content: "Design application layout and UI components" },
    { id: uuidv4(), content: "Implement routing and navigation" },
  ],
  Done: [
    { id: uuidv4(), content: "Develop core features and functionality" },
    { id: uuidv4(), content: "Write unit and integration tests" },
    { id: uuidv4(), content: "Deploy the application to production" },
  ],
};

export const boardSlice = createSlice({
  name: "OG",
  initialState,
  reducers: {
    addTask: (state, action) => {
      const { column, textData } = action.payload;
      if (state[column]) {
        state[column].push({
          id: uuidv4(),
          content : textData,
        });
      }
    },
  },
});

export const { addTask } = boardSlice.actions;
export default boardSlice.reducer;
