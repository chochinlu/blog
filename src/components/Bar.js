import React from 'react';
import { Text, Link as HtmlLink, Card, Flex } from 'rebass';
import styled from 'styled-components/macro';
import { Link } from 'react-router-dom';

const Bar = props => (
  <Card border={1} px={2} pb={[1, 1, 1, 5]} m={2}>
    <Flex
      flexDirection={['row', 'row', 'row', 'column']}
      alignItems={['center', 'center', 'center', 'flex-start']}
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
        <Text fontSize={['h3', 'h2', 'h2', 'h1']} fontWeight={1} fontFamily={1}>
          帕客
        </Text>
      </Link>
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
