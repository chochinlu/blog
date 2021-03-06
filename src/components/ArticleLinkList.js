import React, { useEffect } from 'react';
import { Box, Flex, Heading } from 'rebass';
import ArticleLink from './ArticleLink';
import 'styled-components/macro';
import ActionButton from './ActionButton';

const ArticleLinkList = ({ fetching, navLinks, articles, setUrl }) => {
  const appRef = React.createRef();
  useEffect(() => {
    window.scrollTo(0, appRef.current.offsetTop);
  }, [appRef]);

  const buttons = () => {
    let items = [
      { rel: 'first', title: '最前頁', url: null },
      { rel: 'prev', title: '前一頁', url: null },
      { rel: 'next', title: '下ㄧ頁', url: null },
      { rel: 'last', title: '最末頁', url: null }
    ];

    navLinks.forEach(({ rel, url }) => {
      switch (rel) {
        case 'first':
          items[0].url = url;
          break;
        case 'prev':
          items[1].url = url;
          break;
        case 'next':
          items[2].url = url;
          break;
        case 'last':
          items[3].url = url;
          break;
        default:
          break;
      }
    });

    return items;
  };

  return (
    <Box flex={1} ref={appRef}>
      {fetching && (
        <Heading as="h3" fontSize="h6" ml={2} mt={2}>
          Fetching Data ....
        </Heading>
      )}

      {articles &&
        !fetching &&
        articles.map(article => (
          <ArticleLink key={article.id} article={article} />
        ))}

      {navLinks && !fetching && (
        <Flex px={2} mb={2}>
          {buttons().map(link => (
            <ActionButton key={link.rel} setUrl={setUrl} url={link.url}>
              {link.title}
            </ActionButton>
          ))}
        </Flex>
      )}
    </Box>
  );
};
export default ArticleLinkList;
