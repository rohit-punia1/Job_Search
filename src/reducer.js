import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  filters:{}
};

const Filters = createSlice({
  name: 'filter',
  initialState,
  reducers: {

    updateFilters(state,data){      
      state.filters={...state.filters,[data.payload.filterName]:data.payload.data}
    },
    increment(state) {
      state.counter++;
    },
    decrement(state) {
      state.counter--;
    },
  },
});

export const { increment, decrement,updateFilters } = Filters.actions;
export default Filters.reducer;
