import React from 'react';
import { ThemeProvider } from 'styled-components/macro';
import theme from './theme';
import { GlobalStyle } from './style';
import { Box, Flex } from 'rebass';
import Bar from './Bar';
import Tags from './Tags';
import Article from './Article';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <>
        <GlobalStyle />
        <Flex justifyContent="center">
          <Flex
            width="1200px"
            justifyContent="center"
            flexDirection={['column', 'column', 'column', 'row']}
            // css={{ border: '2px solid red' }}
          >
            {/* info / menu area */}
            <Box>
              <Bar />
              <Tags />
            </Box>
            {/* main / article / list area */}
            <Box flex={1}>
              <Article />
              <Article />
              <Article />
              <Article />
              <Article />
            </Box>
          </Flex>
        </Flex>
      </>
    </ThemeProvider>
  );
}

export default App;
