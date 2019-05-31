import React, { useEffect } from 'react';
import { Box, Card, Heading, Flex, Button } from 'rebass';
import { StyledReactMarkdown } from './style';
import { format } from 'date-fns';
import { Link } from 'react-router-dom';
import { article } from '../data';
import styled from 'styled-components/macro';

// TODO: should move to util
const formatedDate = date => format(date, 'YYYY-MM-DD');

const Article = props => {
  const articleRef = React.createRef();

  const id = props.match.params.id;
  // const article = props.articles.find(a => a.number === parseInt(id, 10));

  // if props.articles === null useeffect fetch

  useEffect(() => {
    window.scrollTo(0, articleRef.current.offsetTop);
  }, [articleRef]);

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
        <Heading as="h1" fontSize="h3" color="primaryDark">
          {article.title}
        </Heading>
        <Flex
          alignItems="center"
          justifyContent="flex-end"
          pb={1}
          css={`
            border-bottom: 1px solid ${props => props.theme.colors.text};
          `}
        >
          <Heading as="h3" fontSize="body1" mr={2}>
            Issue {props.match.params.id}
          </Heading>
          <Heading as="h3" fontSize="body1" fontWeight={1} mr={2}>
            {formatedDate(article.updated_at)}
          </Heading>
        </Flex>

        <StyledReactMarkdown
          source={article.body}
          color="primaryText"
          fontSize="body1"
          fontWeight={1}
          lineHeight={3}
          p={2}
          mt={2}
        />
      </Card>
      <Flex>
        <Button
          flex={1}
          bg="text"
          color="primaryText"
          fontSize="body1"
          borderRadius="none"
          border={1}
          mx={2}
          mb={3}
        >
          <Link
            to="/"
            css={`
              display: inline-block;
              width: 100%;
              :link,
              :visited,
              :hover,
              &:active {
                color: inherit;
              }
            `}
          >
            Back
          </Link>
        </Button>
        <Button
          flex={1}
          bg="text"
          color="primaryText"
          fontSize="body1"
          borderRadius="none"
          border={1}
          mx={2}
          mb={3}
          onClick={() => window.scrollTo(0, articleRef.current.offsetTop)}
        >
          Top
        </Button>
      </Flex>
    </Box>
  );
};

export default Article;
