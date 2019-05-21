import { createGlobalStyle } from 'styled-components';
import styled from 'styled-components';
import { space } from 'styled-system';
import { Button } from 'rebass';

export const GlobalStyle = createGlobalStyle`
  *,*::before, *::after {
    margin:0;
    padding: 0;
    box-sizing: inherit;    
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
