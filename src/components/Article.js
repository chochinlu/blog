import React, { useState, useEffect } from 'react';
import { Box, Card, Heading, Flex, Button } from 'rebass';
import { StyledReactMarkdown } from './style';
import { Link } from 'react-router-dom';
import styled from 'styled-components/macro';
import axios from 'axios';
import { issueUrl, formatedDate, requestConfig } from '../utils';

const Article = props => {
  const [fetching, setFetching] = useState(false);
  const [article, setArticle] = useState(null);
  const articleRef = React.createRef();

  const getResult = async id => {
    try {
      setFetching(true);
      const result = await axios.get(issueUrl(id), requestConfig);
      setArticle(result.data);
    } catch (err) {
      console.log('Err: ', err.message);
    } finally {
      setFetching(false);
    }
  };

  useEffect(() => {
    const id = props.match.params.id;

    if (!props.articles) {
      getResult(id);
    } else {
      let result = props.articles.find(a => a.number === parseInt(id, 10));
      result ? setArticle(result) : getResult(id);
    }
  }, [props.articles, props.match.params.id]);

  useEffect(() => {
    window.scrollTo(0, articleRef.current.offsetTop);
  }, [articleRef]);

  //redirect
  if (!article && !fetching)
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
          <Heading as="h3" fontSize="h4" ml={2} mt={2}>
            Not Found
          </Heading>
        </Card>
      </Box>
    );

  if (!article && fetching)
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
          <Heading as="h3" fontSize="h6" ml={2} mt={2}>
            Fetching Data ....
          </Heading>
        </Card>
      </Box>
    );

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
