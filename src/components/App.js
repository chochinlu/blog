import React from 'react';
import { ThemeProvider } from 'styled-components/macro';
import theme from './theme';
import { GlobalStyle, Tag } from './style';
import { Text, Link, Box, Card, Flex, Button } from 'rebass';

function App() {
  const bar = (
    <Card border={1} px={2} pb={5} m={2}>
      <Text as="h1" fontSize="h1" fontWeight={1} fontFamily={1}>
        帕客
      </Text>
      <Text as="h4" fontSize="h5" fontWeight={300}>
        讀書翻譯, 心得, 技術筆記。
      </Text>
      <Link href="mailto:chochinlu@gmail.com" fontSize="body1">
        @chochinlu
      </Link>
    </Card>
  );

  const tags = (
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

  const article = (
    <Card m={2} border={1} px={2} py={5}>
      <h2>Article Title</h2>
      <h3>2019/05/12</h3>
      <div>
        <p>sadasdasdasdasdasdasasd asdasd </p>
        <p>sadasdasdasdasdasdasasd asdasd </p>
        <p>sadasdasdasdasdasdasasd asdasd </p>
      </div>
      <button>閱讀更多</button>
    </Card>
  );

  return (
    <ThemeProvider theme={theme}>
      <>
        <GlobalStyle />
        <Flex justifyContent="center">
          <Flex
            width="1200px"
            justifyContent="center"
            // css={{ border: '2px solid red' }}
          >
            {/* info / menu area */}
            <Box>
              {bar}
              {tags}
            </Box>
            {/* main / article / list area */}
            <Box flex={1}>
              {article}
              {article}
              {article}
            </Box>
          </Flex>
        </Flex>
      </>
    </ThemeProvider>
  );
}

export default App;
