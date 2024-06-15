import { createSlice } from "@reduxjs/toolkit";
export const profileSlice = createSlice({
  name: "profile",
  initialState: {
    name: "",
  },
  reducers: {
    addName: (state, action) => {
      state.name = action.payload;
    },
  },
});
// this is for dispatch
export const { addName } = profileSlice.actions;

// this is for configureStore
export default profileSlice.reducer;
