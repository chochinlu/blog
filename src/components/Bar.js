import React from 'react';
import { Text, Link, Card, Flex } from 'rebass';
import styled from 'styled-components/macro';

const Bar = props => (
  <Card border={1} px={2} pb={[1, 1, 1, 5]} m={2}>
    <Flex
      flexDirection={['row', 'row', 'row', 'column']}
      alignItems={['center', 'center', 'center', 'flex-start']}
    >
      <Text
        as="a"
        href="/"
        fontSize={['h3', 'h2', 'h2', 'h1']}
        fontWeight={1}
        fontFamily={1}
        color="primaryText"
        css={`
          :visited,
          :hover {
            color: inherit;
          }
        `}
      >
        帕客
      </Text>
      <Flex flexDirection="column" ml={2} justifyContent="baseline" mt={1}>
        <Text
          as="h4"
          fontSize={['subtitle1', 'h6', 'h6', 'h5']}
          fontWeight={300}
        >
          讀書翻譯, 心得, 技術筆記。
        </Text>
        <Link
          href="#"
          css={`
            text-decoration: none;
            cursor: pointer;
          `}
        >
          <Text as="h5" fontSize="subtitle1" color="secondaryText">
            @chochinlu
          </Text>
        </Link>
      </Flex>
    </Flex>
  </Card>
);

export default Bar;
