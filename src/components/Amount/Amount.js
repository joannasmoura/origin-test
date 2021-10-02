import React from 'react';
import { useSelector } from 'react-redux';
import { months } from '../../utils';
import './Amount.scss';

const Amount = () => {
  const {amountValue, month, year, monthlySave, numberOfMonths} = useSelector(state => state.amount);
  return (
    <div className="amount-card">
      <div className="title-amount">Monthly Amount</div>
      <div className="value">${monthlySave}</div>
      <div className="result">
        <p className='result-text'>You’re planning <strong>{numberOfMonths} monthly deposits</strong> to reach your <strong>${amountValue}</strong> goal by <strong>{ months[month]} {year}</strong>.</p>
        </div>
    </div>
  );
}

export default Amount;
