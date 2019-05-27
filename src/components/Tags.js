import React from 'react';
import { Box, Card, Button } from 'rebass';
import { Tag } from './style';

const Tags = () => (
  <Card border={1} px={2} pt={5} pb={5} m={2}>
    <Box mb={2}>
      {['React', 'JavaScript', 'CSS', 'NodeJS'].map(tag => (
        <Tag
          key={tag}
          color="primaryText"
          bg="text"
          border={1}
          fontSize="body1"
          mr={2}
          borderRadius="none"
        >
          {tag}
        </Tag>
      ))}
    </Box>
    <Button
      borderRadius="none"
      fontSize="body1"
      bg="text"
      color="primaryText"
      border={1}
    >
      所有標籤
    </Button>
  </Card>
);

export default Tags;
