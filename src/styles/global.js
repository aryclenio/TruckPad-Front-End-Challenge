import { createGlobalStyle } from 'styled-components';
import 'react-toastify/dist/ReactToastify.css';
import 'antd/dist/antd.css';

export default createGlobalStyle`
  html {
    height: 100%;
  }
  * {
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
  }
  body {
    background: #F6F6F6;  /* fallback for old browsers */
    -webkit-font-smoothing: antialiased;
    height: 100%;
  }
  body, input, button {
    font: 14px 'Open Sans', sans-serif;
  }
  #root {
    max-width: 1300px;
    margin: 0 auto;
    padding: 0 0 50px;
    background: #fff;
    height: 100%;
  }
  button {
    cursor: pointer;
  }
`;