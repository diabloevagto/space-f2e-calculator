import { createGlobalStyle } from 'styled-components';
import { normalize } from 'styled-normalize';

export default createGlobalStyle`
  body {
    background: gray;
    padding-left: 30px;
  }

  ${normalize};
`;
