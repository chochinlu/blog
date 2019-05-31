import { createGlobalStyle } from 'styled-components';
import styled from 'styled-components';
import { space, fontSize, fontWeight, color, lineHeight } from 'styled-system';
import { Button } from 'rebass';
import ReactMarkdown from 'react-markdown';
import { Link } from 'react-router-dom';

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

export const StyledLink = styled(Link)`
  display: inline-block;
  width: 100%;
  :link,
  :visited,
  :hover,
  &:active {
    color: inherit;
  }
`;

export const StyledReactMarkdown = styled(ReactMarkdown)`
  ${color}
  ${space}
  ${fontSize}
  ${fontWeight}
  ${lineHeight}

  img {
    max-width: 100%;
  }

  h1, h2, h3, h4, h5, h6, p, pre {
    margin: ${props => props.theme.space[5]} 0;
  }

  h2 {
    font-size: ${props => props.theme.fontSizes.h5};
    font-weight: ${props => props.theme.fontWeights[2]};
    /* border-right: 1rem solid ${props => props.theme.colors.primary}; */
    border-bottom: 2px solid ${props => props.theme.colors.divider};
  }

  ul {
    padding-left: ${props => props.theme.space[4]};
  }

  pre, code {
    background-color: ${props => props.theme.colors.divider};
  }

  pre {
    max-width: 700px;
    overflow-y: auto;
    padding: ${props => props.theme.space[4]};

    code {
      font-size: ${props => props.theme.fontSizes.body1};
      line-height: ${props => props.theme.lineHeights[0]};
      padding: 0;
    }
  }

  code {
    color: inherit;
    font-size: ${props => props.theme.fontSizes.h6};;
    padding: ${props => props.theme.space[1]} ${props => props.theme.space[2]};
  }

  a {
  
    :link,
    :visited {
      color: ${props => props.theme.colors.primaryDark};
      text-decoration: underline black;
    }

    :hover,
    :active {
      color: ${props => props.theme.colors.primary};
      
    }
  }
  
`;
