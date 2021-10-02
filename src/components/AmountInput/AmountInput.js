import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { setAmount } from '../../features/amount/amountSlice';
import './AmountInput.scss';

const AmountInput = () => {
  const dispatch = useDispatch();
  const [amountValue, setAmountValue] = useState('')
  
  const handleChange = (e) => {
    let inputValue = e.target.value.replace(/,+/g, '');
    if(!isNaN(inputValue)){
      let value = new Intl.NumberFormat('en-IN').format(inputValue);
      setAmountValue(value);
      dispatch(setAmount(value));
    }
    
  }
  return (
    <div className="amount-input-container">
      <label className={'label amount-input'}>
        Total amount
        <input 
          onChange={(e) => handleChange(e)}
          className={'input'}
          name='amount'
          value={amountValue}
        />
      </label>
    </div>
    
  );
}

export default AmountInput;
