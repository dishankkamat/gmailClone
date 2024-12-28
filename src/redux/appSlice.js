import { createSlice } from "@reduxjs/toolkit";

const appSlice = createSlice({
  name: "appSlice",
  initialState: {
    open: false,
    emails: null,
    selectedEmail: null,
  },
  reducers: {
    setOpen: (state, action) => {
      state.open = action.payload;
    },
    setSelectedEmail: (state, action) => {
      state.selectedEmail = action.payload;
    },
    setEmails: (state, action) => {
      state.emails = action.payload;
    },
  },
});

export const { setOpen, setEmails, setSelectedEmail } = appSlice.actions;

export default appSlice.reducer;
