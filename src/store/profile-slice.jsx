import { createSlice } from "@reduxjs/toolkit";

const profileSlice = createSlice({
  name: "profile",
  initialState: { profile: {} },
  reducers: {
    setDetail(state, action) {
      state.profile = action.payload.profile;
    },
  },
});

export const profileActions = profileSlice.actions;
export default profileSlice;
