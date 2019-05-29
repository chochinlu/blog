import React from 'react';
import { Card, Heading } from 'rebass';

const Article = props => {
  return (
    <Card border={1} px={2} py={4} m={2} flex={1} color="primaryText">
      <Heading as="h3" fontSize="h4">
        Article {props.match.params.id}
      </Heading>
    </Card>
  );
};

export default Article;
