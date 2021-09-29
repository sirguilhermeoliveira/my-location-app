import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface prevObject {
  location: any;
}

interface prevState {
  prevList: any;
}

const initialPrevState: prevState = {
  prevList: {},
};

const prevSlice = createSlice({
  name: 'prev',
  initialState: initialPrevState,
  reducers: {
    previous(state: prevState, action: PayloadAction<prevObject>) {
      state.prevList.push(action.payload);
    },
  },
});

export const prevActions = prevSlice.actions;
export default prevSlice.reducer;
