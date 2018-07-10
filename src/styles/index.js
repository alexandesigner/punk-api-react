import { injectGlobal } from 'styled-components';

injectGlobal`
  * {
    outline: none;
    box-sizing: border-box;
  }
  @font-face {
    font-family: 'Miso';
    src: url('fonts/Miso-bold.woff') format('woff2'),
        url('fonts/Miso-bold.woff2') format('woff');
    font-weight: bold;
    font-style: italic;
  }
  body {
    padding: 0;
    margin: 0;
    font-family: Helvetica Neue, Helvetica, Aria, sans-serif;
    font-size: 1.2rem;
  }
  body, html, #app, #app > div, main {
    height: 100%;
  }
`