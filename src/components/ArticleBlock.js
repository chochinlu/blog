import React from 'react';
import { Flex, Box, Card, Heading } from 'rebass';
import ReactMarkdown from 'react-markdown';
import { StyledReactMarkdown } from './style';
import { format } from 'date-fns';

const formatedDate = date => format(date, 'YYYY-MM-DD');

const ArticleBlock = ({ article, theme }) => (
  <Card m={2} border={1} px={2} py={5}>
    <Flex alignItems="center">
      <Heading as="h1" fontSize="h6" pb={2} color="primaryDark" flex={1}>
        {article.title}
      </Heading>
      <Heading as="h3" fontSize="body1" fontWeight={1} mr={2}>
        {formatedDate(article.updated_at)}
      </Heading>
      <Heading as="h3" fontSize="overline" fontWeight={1}>
        (Created At {formatedDate(article.created_at)})
      </Heading>
    </Flex>

    {/* <StyledReactMarkdown
      source={article.body}
      color="primaryText"
      fontSize="body2"
      lineHeight={2}
      p={2}
    /> */}
  </Card>
);

export default ArticleBlock;
