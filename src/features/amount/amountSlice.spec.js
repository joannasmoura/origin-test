import { months } from '../../utils';
import amountReducer, {
  setAmount,
  setDate,
} from './amountSlice';

describe('amount reducer', () => {
  const initialState = {
    amountValue: '',
    month: months[new Date().getMonth()],
    year: new Date().getFullYear()
  };
  it('should handle initial state', () => {
    expect(amountReducer(undefined, { type: 'unknown' })).toEqual({
      amountValue: '',
      month: months[new Date().getMonth()],
      year: new Date().getFullYear()
    });
  });

  it('should handle set amount', () => {
    const actual = amountReducer(initialState, setAmount('12'));
    expect(actual.amountValue).toEqual('12');
  });

  it('should handle decrement', () => {
    const actual = amountReducer(initialState, setDate({month:5, year:2020}));
    expect(actual.month).toEqual(months[5]);
    expect(actual.year).toEqual(2020);
  });
});
