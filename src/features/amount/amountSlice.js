import { createSlice } from '@reduxjs/toolkit';
import { months } from '../../utils';

const slice = createSlice({
  name: 'amount',
  initialState: {
    amountValue: '',
    month: months[new Date().getMonth()],
    year: new Date().getFullYear()
  },
  reducers: {
    setAmount: (state, action) => {
      return {
        ...state,
        amountValue: action.payload
      }
    },
    setDate: (state, action) => {
      const {month, year} = action.payload;
      return {
        ...state,
        month: months[month], 
        year
      }
    }
  },
});
export default slice.reducer
// Actions
export const {
  setAmount,
  setDate
} = slice.actions
