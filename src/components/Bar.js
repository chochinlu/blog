import React from 'react';
import { Text, Link, Card } from 'rebass';

const Bar = () => (
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

export default Bar;
