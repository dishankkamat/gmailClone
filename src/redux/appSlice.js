import { createSlice } from "@reduxjs/toolkit";

const appSlice = createSlice({
  name: "appSlice",
  initialState: {
    open: false,
    emails: null,
    selectedEmail: null,
    user: null,
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
    setUser: (state, action) => {
      state.user = action.payload;
    },
  },
});

export const { setOpen, setEmails, setSelectedEmail, setUser } =
  appSlice.actions;

export default appSlice.reducer;
