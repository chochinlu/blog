import React from 'react';
import { Text, Link as HtmlLink, Card, Flex, Box } from 'rebass';
import styled from 'styled-components/macro';
import { StyledLink } from './style';

const Bar = props => (
  <Card border={2} borderColor="text" px={2} pb={[1, 1, 1, 5]} m={2}>
    <Flex
      flexDirection={['row', 'row', 'row', 'column']}
      alignItems={['center', 'center', 'center', 'flex-start']}
      justifyContent={['space-between', 'space-between', 'space-between']}
    >
      <Box>
        <StyledLink to="/">
          <Text
            fontSize={['h3', 'h2', 'h2', 'h1']}
            fontWeight={1}
            fontFamily={1}
          >
            帕客
          </Text>
        </StyledLink>
      </Box>
      <Flex flexDirection="column" ml={2} justifyContent="baseline" mt={1}>
        <Text
          as="h4"
          fontSize={['subtitle1', 'h6', 'h6', 'h5']}
          fontWeight={300}
        >
          讀書翻譯, 心得, 技術筆記。
        </Text>
        <HtmlLink
          href="#"
          css={`
            text-decoration: none;
            cursor: pointer;
          `}
        >
          <Text as="h5" fontSize="subtitle1" color="secondaryText">
            @chochinlu
          </Text>
        </HtmlLink>
      </Flex>
    </Flex>
  </Card>
);

export default Bar;
