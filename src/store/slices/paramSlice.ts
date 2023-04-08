import { createSlice } from '@reduxjs/toolkit';

const initialIssueParams = {
  //   page: 1,
  //   per_page: 20,
  sort: 'created',
  direction: 'asc',
  state: 'open',
  creator: '',
};

const paramSlice = createSlice({
  name: 'params',

  initialState: { issueParams: initialIssueParams },

  reducers: {
    updateIssueParam: (state, action) => {
      state.issueParams = { ...state.issueParams, ...action.payload };
    },
  },
});

export const { updateIssueParam } = paramSlice.actions;
export default paramSlice.reducer;
