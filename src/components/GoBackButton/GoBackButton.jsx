import svg from '../../images/sprtite.svg';
import React from 'react';
import { StyledButton } from './GoBackButton.styled';

const GoBackButton = () => {
  // const handleGoBack = () => window.history.back();

  return (
    <StyledButton>
      <svg
        width="25px"
        height="25px"
        // onClick={handleGoBack}
      >
        <use href={`${svg}#icon-back`}></use>
      </svg>
      <span>Go Back</span>
    </StyledButton>
  );
};

export default GoBackButton;
