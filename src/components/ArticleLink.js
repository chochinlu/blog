import React from 'react';
import { Flex, Box, Card, Heading } from 'rebass';
import { Link } from 'react-router-dom';
import { format } from 'date-fns';
import 'styled-components/macro';

const formatedDate = date => format(date, 'YYYY-MM-DD');

const ArticleLink = ({ article, theme }) => (
  <Card
    m={2}
    border={1}
    borderColor="secondaryText"
    px={2}
    py={5}
    css={`
      transition: all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1);
      :hover {
        box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23);
        background-color: rgba(255, 255, 255, 0.8);
        border-color: ${props => props.theme.colors.text};
      }
    `}
  >
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
  </Card>
);

export default ArticleLink;
