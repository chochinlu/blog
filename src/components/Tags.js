import React from 'react';
import { Card, Button, Flex } from 'rebass';
import { Tag } from './style';
import styled from 'styled-components/macro';
import { StyledLink } from './style';

const tagList = ['React', 'JavaScript', 'CSS', 'NodeJS'];

const url = label =>
  `https://api.github.com/repos/chochinlu/blog/issues?page=1&per_page=10&labels=${label}`;

const Tags = props => (
  <Card border={2} borderColor="text" px={2} pt={5} pb={5} m={2}>
    <Flex mb={2} flexDirection={['row', 'row', 'row', 'column']}>
      {tagList.map((tag, index) => (
        <Tag
          flex={1}
          key={tag}
          color="primaryText"
          bg="text"
          border={1}
          fontSize="body1"
          borderRadius="none"
          mb={[index === tagList.length - 1 ? 0 : 2, 1]}
          onClick={e => props.setUrl(url(tag))}
        >
          <StyledLink to="/">{tag}</StyledLink>
        </Tag>
      ))}
    </Flex>
    <Flex>
      <Button
        flex={1}
        borderRadius="none"
        fontSize="body1"
        bg="text"
        color="primaryText"
        border={1}
        onClick={e => props.setUrl(props.initUrl)}
        css={`
          cursor: pointer;
          :focus {
            outline: none;
          }
        `}
      >
        所有內容
      </Button>
    </Flex>
  </Card>
);

export default Tags;