import React from 'react';
import AmountInput from '../AmountInput/AmountInput';
import DateInput from '../DateInput/DateInput';
import './FormComponent.scss';

const FormComponent = () => {
  return (
    <div className="form">
      <AmountInput />
      <DateInput />
    </div>
  );
}

export default FormComponent;
