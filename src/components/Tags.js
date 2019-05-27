import React from 'react';
import { Card, Button, Flex } from 'rebass';
import { Tag } from './style';

const tagList = ['React', 'JavaScript', 'CSS', 'NodeJS'];

const Tags = props => (
  <Card border={1} px={2} pt={5} pb={5} m={2}>
    <Flex mb={2} flexWrap={true}>
      {tagList.map((tag, index) => (
        <Tag
          flex={1}
          key={tag}
          color="primaryText"
          bg="text"
          border={1}
          fontSize="body1"
          borderRadius="none"
          mr={index === tagList.length - 1 ? 0 : 1}
        >
          {tag}
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
      >
        所有標籤
      </Button>
    </Flex>
  </Card>
);

export default Tags;
