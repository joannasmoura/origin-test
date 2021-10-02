import React from 'react';
import './Card.scss';
import {ReactComponent as BuyAHouse} from '../../assets/icons/buy-a-house.svg';
import Amount from '../Amount/Amount';
import Button from '../Button/Button';
import FormComponent from '../FormComponent/FormComponent';

const Card = () => {
  return (
    <div className="card-container">
      <div className="card">
        <div className={'goal'}>
          <BuyAHouse />
          <div className={'card-header'}>
            <p className={'card-title'} >Buy a house</p>
            <p className={'card-subtitle'} >Saving goal</p>
          </div>
        </div>
        <FormComponent className={'form'}/>
        <Amount />
        <Button />
      </div>
    </div>
  );
}

export default Card;
