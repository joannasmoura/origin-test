import React, { useState, useEffect } from 'react';
import { months } from '../../utils';
import { useDispatch } from 'react-redux';
import { setDate } from '../../features/counter/amountSlice';
import './DateInput.scss';
import {ReactComponent as ChevronLeft} from '../../assets/icons/chevron-left.svg';
import {ReactComponent as ChevronRight} from '../../assets/icons/chevron-right.svg';

const DateInput = () => {
  const dispatch = useDispatch();
  const currentMonth = new Date().getMonth();
  const currentYear = new Date().getFullYear();
  const [month, setMonth] = useState(currentMonth);
  const [year, setYear] = useState(currentYear);

  useEffect(() => {
    dispatch(setDate({month, year}));
  }, [month, year])

  const nextMonth = () => {
    if(month < 11){
      setMonth(month+1);
    } else {
      setMonth(0);
      setYear(year+1);
    }
  }

  const previousMonth = () => {
    if(month !== currentMonth){
      if(month > 0){
        setMonth(month-1);
      } else {
        setMonth(11);
        setYear(year-1);
      }
    }
  }

  return (
    <div className="date-input-container">
      <label className={'label reach-date-input'}>
        Reach goal by
        <div className={'date-input'} name='reachDate'>
          <div> 
            <button onClick={() => previousMonth()}><ChevronLeft /></button> 
          </div>
          <div className='button-text'> 
            <span className='month'>{months[month]}</span>
            <span className='year'>{year}</span>
          </div>
          <div>
            <button onClick={() => nextMonth()}><ChevronRight /></button>
          </div>
        </div>
      </label>
    </div>
  );
}

export default DateInput;
