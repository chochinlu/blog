import React from 'react';
import { Card, Heading } from 'rebass';

const NotMatch = props => {
  return (
    <Card border={1} px={2} py={4} m={2} flex={1} color="secondaryText">
      <Heading as="h3" fontSize="h4">
        404 Not Found
      </Heading>
    </Card>
  );
};

export default NotMatch;
