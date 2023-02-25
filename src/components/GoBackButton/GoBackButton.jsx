import svg from '../../images/sprtite.svg';
import React from 'react';
import { StyledButton } from './GoBackButton.styled';

const GoBackButton = () => {
  return (
    <StyledButton>
      <svg width="25px" height="25px">
        <use href={`${svg}#icon-back`}></use>
      </svg>
      <span>Go Back</span>
    </StyledButton>
  );
};



export default GoBackButton;
