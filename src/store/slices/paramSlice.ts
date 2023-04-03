import { createSlice } from '@reduxjs/toolkit';

const initialIssueParams = {
  page: 1,
  per_page: 10,
  sort: 'updated',
  direction: 'asc',
  state: 'open',
};

const paramSlice = createSlice({
  name: 'params',

  initialState: { issueParams: initialIssueParams },

  reducers: {
    updateIssueParams: (state, action) => {
      state.issueParams = { ...state.issueParams, ...action.payload };
    },
  },
});

export const { updateIssueParams } = paramSlice.actions;
export default paramSlice.reducer;
