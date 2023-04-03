import { createSlice } from '@reduxjs/toolkit';

const paramSlice = createSlice({
  name: 'params',
  initialState: {
    issueParams: {
      page: 1,
      per_page: 20,
      sort: 'updated',
      direction: 'asc',
    },
  },
  reducers: {},
});

export const {} = paramSlice.actions;
export default paramSlice.reducer;
