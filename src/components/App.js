import React, { useState, useEffect } from 'react';
import { ThemeProvider } from 'styled-components/macro';
import theme from './theme';
import { GlobalStyle } from './style';
import { Box, Flex } from 'rebass';
import Bar from './Bar';
import Tags from './Tags';
import axios from 'axios';
import ArticleLinkList from './ArticleLinkList';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import NotMatch from './NotMatch';
import Article from './Article';
import { initUrl, requestConfig } from '../utils';

const getNavLinks = source =>
  source.split(',').map(linkStr => {
    let [url, rel] = linkStr.split(';');
    url = url.trim();
    url = url.slice(1, url.length - 1);
    rel = rel.split('=')[1];
    rel = rel.slice(1, rel.length - 1);
    return { rel, url };
  });

function App() {
  // const [itemPerPage, setItemPerPage] = useState(10);
  const [url, setUrl] = useState(initUrl);
  const [fetching, setFetching] = useState(false);
  const [navLinks, setNavLinks] = useState(null);
  const [articles, setArticles] = useState(null);

  const appRef = React.createRef();
  useEffect(() => {
    window.scrollTo(0, appRef.current.offsetTop);
  }, [appRef]);

  useEffect(() => {
    const getResult = async () => {
      try {
        setFetching(true);
        const result = await axios.get(url, requestConfig);
        setArticles([...result.data]);

        const navLinks = getNavLinks(result.headers.link);
        setNavLinks([...navLinks]);
      } catch (err) {
        console.log('Err: ', err.message);
      } finally {
        setFetching(false);
      }
    };
    getResult();
  }, [url]);

  const left = (
    <Box>
      <Bar />
      <Tags setUrl={setUrl} initUrl={initUrl} />
    </Box>
  );

  const routes = (
    <Switch>
      <Route
        exact
        path="/"
        render={() => (
          <ArticleLinkList
            fetching={fetching}
            navLinks={navLinks}
            articles={articles}
            setUrl={setUrl}
          />
        )}
      />
      <Route
        path="/article/:id"
        render={props => <Article {...props} articles={articles} />}
      />
      <Route component={NotMatch} />
    </Switch>
  );

  return (
    <BrowserRouter basename="/blog">
      <ThemeProvider theme={theme}>
        <>
          <GlobalStyle />
          <Flex
            ref={appRef}
            justifyContent="center"
            css={`
              min-height: 100vh;
              background-image: linear-gradient(
                to top,
                rgba(104, 159, 56, 0.5),
                rgba(245, 245, 245, 0.9)
              );
              background-size: cover;
              background-position: top;
            `}
          >
            <Flex
              width={[1, 1, 1, '1200px']}
              justifyContent="center"
              flexDirection={['column', 'column', 'column', 'row']}
            >
              {left}
              {routes}
            </Flex>
          </Flex>
        </>
      </ThemeProvider>
    </BrowserRouter>
  );
}

export default App;
