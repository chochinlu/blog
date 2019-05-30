import { createGlobalStyle } from 'styled-components';
import styled from 'styled-components';
import { space, fontSize, color, lineHeight } from 'styled-system';
import { Button } from 'rebass';
import ReactMarkdown from 'react-markdown';

export const GlobalStyle = createGlobalStyle`
  *,*::before, *::after {
    margin:0;
    padding: 0;
    box-sizing: inherit;
    text-decoration: none;
  }

  html {
    font-family: "Noto Sans TC", sans-serif;
    font-size: 62.5%;
    font-weight: 400;
    line-height: 1.5;
    box-sizing: border-box;
  }
`;

export const Tag = styled(Button)`
  ${space}
`;

export const StyledReactMarkdown = styled(ReactMarkdown)`
  ${color}
  ${space}
  ${fontSize}
  ${lineHeight}

  width: 100%;
  img {
    max-width: 100%;
  }

  h1, h2, h3, h4, h5, h6, p, pre {
    margin-bottom: ${props => props.theme.space[3]};
  }

  pre {
    white-space: pre-wrap; 
  }
`;
