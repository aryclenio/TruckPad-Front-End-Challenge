import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import Routes from './routes';
import { Provider } from './AppContext'
import GlobalStyle from './styles/global'; // Styled components gçpbaç style


function App() {
  return (
    <Provider>
      <BrowserRouter>
        <GlobalStyle />
        <Routes />
      </BrowserRouter>
    </Provider>
  );
}

export default App;
