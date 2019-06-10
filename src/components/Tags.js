import React, { useState } from 'react';
import { Card, Button, Flex } from 'rebass';
import { Tag } from './style';
import 'styled-components/macro';
import { StyledLink } from './style';
import { labelUrl as url } from '../utils';

const tagList = ['React', 'JavaScript', 'CSS', 'NodeJS'];

const Tags = props => {
  const [currentTag, setCurrentTag] = useState('all');

  return (
    <Card border={2} borderColor="text" px={2} pt={5} pb={5} m={2}>
      <Flex mb={2} flexDirection={['row', 'row', 'row', 'column']}>
        {tagList.map((tag, index) => (
          <Tag
            flex={1}
            key={tag}
            color={currentTag === tag ? 'text' : 'primaryText'}
            bg={currentTag === tag ? 'primary' : 'text'}
            borderColor="primaryDark"
            border={1}
            fontSize="body1"
            borderRadius="none"
            mb={[index === tagList.length - 1 ? 0 : 2, 1]}
            onClick={e => {
              props.setUrl(url(tag));
              setCurrentTag(tag);
            }}
          >
            <StyledLink to="/">{tag}</StyledLink>
          </Tag>
        ))}
      </Flex>
      <Flex>
        <Button
          flex={1}
          borderRadius="none"
          fontSize="body1"
          color={currentTag === 'all' ? 'text' : 'primaryText'}
          bg={currentTag === 'all' ? 'primary' : 'text'}
          borderColor="primaryDark"
          border={1}
          onClick={e => {
            props.setUrl(props.initUrl);
            setCurrentTag('all');
          }}
          css={`
            cursor: pointer;
            :focus {
              outline: none;
            }
          `}
        >
          所有內容
        </Button>
      </Flex>
    </Card>
  );
};

export default Tags;
