import { createSlice } from '@reduxjs/toolkit';

const toggleSlice = createSlice({
  name: 'params',
  initialState: { detailToggle: false, detailId: null },
  reducers: {
    onDetailToggle: state => {
      if (!state.detailToggle) state.detailToggle = true;
    },
    offDetailToggle: state => {
      if (state.detailToggle) state.detailToggle = false;
    },
    updateDetailId: (state, action) => {
      state.detailId = action.payload;
    },
  },
});

export const { onDetailToggle, offDetailToggle, updateDetailId } = toggleSlice.actions;
export default toggleSlice.reducer;
