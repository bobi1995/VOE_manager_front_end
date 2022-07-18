import React from 'react';
import logo from './logo.svg';
import './App.css';
import { ApolloClient, ApolloProvider, InMemoryCache } from '@apollo/client';
import { createUploadLink } from 'apollo-upload-client';
import MainRoute from './routes/MainRoute';
import Header from './components/Header';
import { ThemeProvider } from '@mui/material';
import { managerTheme } from './styles/themes/managerTheme';
import BaseStyling from './styles/base';
//import { UploadFile } from "./UploadFile";

const client = new ApolloClient({
  link: createUploadLink({
    uri: 'http://localhost:3001/graphql',
    headers: {
      'apollo-require-preflight': true,
      'Content-Type': 'application/json',
    },
  }),
  cache: new InMemoryCache(),
});

function App() {
  return (
    <ApolloProvider client={client}>
      <ThemeProvider theme={managerTheme}>
        <BaseStyling>
          {/* 
      This was only for testing AVATAR upload endpoint. Please ignore it
      <UploadFile />
      */}
          <Header />
          <MainRoute />
        </BaseStyling>
      </ThemeProvider>
    </ApolloProvider>
  );
}

export default App;
