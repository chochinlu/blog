import React, { useState, useEffect } from 'react';
import { Box, Card, Heading, Flex, Button } from 'rebass';
import { StyledReactMarkdown, StyledLink, Tag } from './style';
import 'styled-components/macro';
import axios from 'axios';
import { issueUrl, commentUrl, formatedDate, requestConfig } from '../utils';
import { labelUrl as url } from '../utils';

const ArticleCard = props => (
  <Card
    border={2}
    borderColor="text"
    px={2}
    pt={2}
    pb={4}
    m={2}
    color="primaryText"
  >
    {props.children}
  </Card>
);

const ActionButton = ({ children, ...props }) => (
  <Button
    flex={1}
    bg="text"
    color="primaryText"
    fontSize="body1"
    borderRadius="none"
    border={1}
    mb={3}
    css={`
      cursor: pointer;
      :focus {
        outline: none;
      }
    `}
    {...props}
  >
    {children}
  </Button>
);

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
      if (!article) {
        let result = props.articles.find(a => a.number === parseInt(id, 10));
        result ? setArticle(result) : getResult(id);
      }
    }
  }, [article, props.articles, props.match.params.id]);

  useEffect(() => {
    window.scrollTo(0, articleRef.current.offsetTop);
  }, [articleRef]);

  //redirect
  if (!article && !fetching)
    return (
      <Box flex={1} ref={articleRef}>
        <ArticleCard>
          <Heading as="h3" fontSize="h4" ml={2} mt={2}>
            Not Found
          </Heading>
        </ArticleCard>
      </Box>
    );

  if (!article && fetching)
    return (
      <Box flex={1} ref={articleRef}>
        <ArticleCard>
          <Heading as="h3" fontSize="h6" ml={2} mt={2}>
            Fetching Data ....
          </Heading>
        </ArticleCard>
      </Box>
    );

  const head = (
    <>
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
        <Heading
          as="h3"
          fontSize="body1"
          mr={2}
          onClick={() =>
            window.open(commentUrl(props.match.params.id), '_blank')
          }
          css={`
            cursor: pointer;
            text-decoration: underline;
          `}
        >
          Issue {props.match.params.id}
        </Heading>
        <Heading as="h3" fontSize="body1" fontWeight={1} mr={2}>
          {formatedDate(article.updated_at)}
        </Heading>
      </Flex>
    </>
  );

  const content = (
    <StyledReactMarkdown
      source={article.body}
      color="primaryText"
      fontSize="body1"
      fontWeight={1}
      lineHeight={3}
      p={2}
      mt={2}
    />
  );

  const labels = (
    <Card mx={3} borderTop={2} borderColor="text" py={5}>
      {article.labels.map(label => (
        <Button
          key={label.name}
          color="text"
          bg={`#${label.color}`}
          mr={2}
          border={0}
          fontSize="body1"
          borderRadius="none"
          onClick={e => {
            props.setUrl(url(label.name));
          }}
        >
          <StyledLink to="/">{label.name}</StyledLink>
        </Button>
      ))}
    </Card>
  );

  const actions = (
    <Flex mx={2}>
      <ActionButton>
        <StyledLink to="/">上一頁</StyledLink>
      </ActionButton>
      <ActionButton
        onClick={() => window.scrollTo(0, articleRef.current.offsetTop)}
      >
        回頂端
      </ActionButton>
      <ActionButton
        onClick={() => window.open(commentUrl(props.match.params.id), '_blank')}
      >
        留言
      </ActionButton>
    </Flex>
  );

  return (
    <Box flex={1} ref={articleRef}>
      <ArticleCard>
        {head}
        {content}
        {labels}
      </ArticleCard>
      {actions}
    </Box>
  );
};

export default Article;
