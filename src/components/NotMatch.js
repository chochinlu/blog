import React from 'react';
import { Card, Box, Heading } from 'rebass';

const NotMatch = props => {
  const articleRef = React.createRef();
  return (
    <Box flex={1} ref={articleRef}>
      <Card
        border={2}
        borderColor="text"
        px={2}
        pt={2}
        pb={4}
        m={2}
        color="primaryText"
      >
        <Heading as="h3" fontSize="h4">
          404 Not Found
        </Heading>
      </Card>
    </Box>
  );
};

export default NotMatch;
