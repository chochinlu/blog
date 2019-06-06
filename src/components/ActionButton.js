import React from 'react';
import { Button } from 'rebass';
import 'styled-components/macro';

const ActionButton = props => {
  const handleClick = e => {
    e.preventDefault();
    props.setUrl(props.url);
  };

  return (
    <Button
      flex={1}
      bg="text"
      color="primaryText"
      fontSize="body1"
      borderRadius="none"
      border={1}
      css={`
        cursor: pointer;
        :focus {
          outline: none;
        }
      `}
      onClick={handleClick}
      disabled={props.url === null}
    >
      {props.children}
    </Button>
  );
};
export default ActionButton;
