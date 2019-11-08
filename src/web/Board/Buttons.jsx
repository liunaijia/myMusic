import React from 'react';
import Button from './Button';
import Icon from './Icon';
import Flex from './Flex';
import Typography from './Typography';

function Board() {
  function handleButtonClick(event) {
    console.log(event);
  }

  return (
    <>
      <h2>Typography</h2>

      <h2>Buttons</h2>
      <Flex>
        <Flex inline align="center" justify="center">
          <Button onClick={handleButtonClick}>Save</Button>
        </Flex>
          &nbsp;
        <Flex inline align="center" justify="center">
          <Button onClick={handleButtonClick}>
            <Icon size={1.5}>save</Icon>
              SAVE
          </Button>
        </Flex>
          &nbsp;
        <Flex inline align="center" justify="center">
          <Button onClick={handleButtonClick}>
            <Icon size={1.5}>done</Icon>
          </Button>
        </Flex>
          &nbsp;
        <Flex inline align="center" justify="center">
          <Button onClick={handleButtonClick}>
              SAVE
            <Icon size={1}>keyboard_arrow_down</Icon>
          </Button>
        </Flex>
          &nbsp;
        <Flex inline align="center" justify="center">
          <Button onClick={handleButtonClick}>
            <Icon size={1.5}>add</Icon>
              SAVE
            <Icon size={1}>keyboard_arrow_down</Icon>
          </Button>
        </Flex>
          &nbsp;
        <Flex inline align="center" justify="center">
          <Button onClick={handleButtonClick}>
            <a href="#">VIEW</a>
          </Button>
        </Flex>
      </Flex>
    </>
  );
}

export default Board;
