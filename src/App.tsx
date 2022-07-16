import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { ApolloClient, ApolloProvider, InMemoryCache } from "@apollo/client";
import { createUploadLink } from "apollo-upload-client";
//import { UploadFile } from "./UploadFile";

const client = new ApolloClient({
  link: createUploadLink({
    uri: "http://localhost:3001/graphql",
    headers: {
      "apollo-require-preflight": true,
      "Content-Type": "application/json",
    },
  }),
  cache: new InMemoryCache(),
});

function App() {
  return (
    <ApolloProvider client={client}>
      {/* 
      This was only for testing AVATAR upload endpoint. Please ignore it
      <UploadFile />
      */}
    </ApolloProvider>
  );
}

export default App;
