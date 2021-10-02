import { configureStore } from '@reduxjs/toolkit';
import { combineReducers } from 'redux';
import amountReducer from '../features/amount/amountSlice';

const reducer = combineReducers({
  amount:amountReducer
})

export const store = configureStore({
  reducer,
});
