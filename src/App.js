import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import Routes from './routes';
import { Provider } from './AppContext'
import GlobalStyle from './styles/global';
import Header from './components/Header';
import Footer from './components/Footer';

function App() {
  return (
    <Provider>
      <BrowserRouter>
        <Header />
        <GlobalStyle />
        <Routes />
        <Footer />
      </BrowserRouter>
    </Provider>
  );
}

export default App;
