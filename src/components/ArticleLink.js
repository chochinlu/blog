import React from 'react';
import { Flex, Box, Card, Heading } from 'rebass';
import { Link } from 'react-router-dom';
import { format } from 'date-fns';
import 'styled-components/macro';

const formatedDate = date => format(date, 'YYYY-MM-DD');

const ArticleLink = ({ article, theme }) => (
  <Card m={2} border={1} borderColor="secondaryText" px={2} py={5}>
    <Link
      to={`article/${article.number}`}
      css={`
        :link,
        :visited,
        :hover,
        &:active {
          color: inherit;
        }
      `}
    >
      <Flex alignItems="center" justifyContent="space-between">
        <Heading as="h1" fontSize="h6" pb={2} color="primaryDark">
          {article.title}
        </Heading>
        <Box>
          <Heading as="h3" fontSize="body1" fontWeight={1}>
            {formatedDate(article.updated_at)}
          </Heading>
          <Heading as="h3" fontSize="overline" fontWeight={1}>
            (Created At {formatedDate(article.created_at)})
          </Heading>
        </Box>
      </Flex>
    </Link>

    {/* <StyledReactMarkdown
      source={article.body}
      color="primaryText"
      fontSize="body2"
      lineHeight={2}
      p={2}
    /> */}
  </Card>
);

export default ArticleLink;
