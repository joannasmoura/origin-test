import React from 'react';
import { useSelector } from 'react-redux';
import './Amount.scss';

const Amount = () => {
  const {amountValue, month, year} = useSelector(state => state.amount);
  return (
    <div className="amount-card">
      <div className="title-amount">Monthly Amount</div>
      <div className="value">$521</div>
      <div className="result">
        <p className='result-text'>You’re planning <strong>48 monthly deposits</strong> to reach your <strong>${amountValue}</strong> goal by <strong>{month} {year}</strong>.</p>
        </div>
    </div>
  );
}

export default Amount;
