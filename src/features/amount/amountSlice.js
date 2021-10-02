import { createSlice } from '@reduxjs/toolkit';

const slice = createSlice({
  name: 'amount',
  initialState: {
    amountValue: '',
    month: new Date().getMonth(),
    year: new Date().getFullYear(),
    monthlySave:0,
    numberOfMonths: ''
  },
  reducers: {
    setAmount: (state, action) => {
      let {monthlySave, numberOfMonths} = getMonthlySaving(state.month, state.year, action.payload);
      return {
        ...state,
        amountValue: action.payload,
        monthlySave,
        numberOfMonths: ''
      }
    },
    setDate: (state, action) => {
      const {month, year} = action.payload;
      let {monthlySave, numberOfMonths} = getMonthlySaving(month, year, state.amountValue);
      return {
        ...state,
        month: month, 
        year,
        monthlySave,
        numberOfMonths
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


const getMonthlySaving = (month, year, amountValue) => {
  if(amountValue){
    const currentMonth = new Date().getMonth();
    const currentYear = new Date().getFullYear();
    const currentDate = new Date(currentYear, currentMonth);
    const definedDate = new Date(year, month);
    
    var months;
    months = (definedDate.getFullYear() - currentDate.getFullYear()) * 12;
    months -= currentDate.getMonth();
    months += definedDate.getMonth();
    let diffMonths = months <= 0 ? 0 : months;

    if(diffMonths === 0) return {monthlySave:0, numberOfMonths: 0}
  
    let ms = amountValue.replace(/,+/g, '') / diffMonths;
    return {monthlySave:new Intl.NumberFormat('en-IN').format(ms.toFixed(2)), numberOfMonths: diffMonths}
  }else{
    return {monthlySave:0, numberOfMonths: 0}
  }
  
}
