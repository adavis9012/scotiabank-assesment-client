import React from 'react';
import ReactDOM from 'react-dom';
import Application from "./Application";
import WebFont from 'webfontloader';
import config from "./config/config-env";
import reportWebVitals from './reportWebVitals';
import {AUTH_TOKEN} from "./config/constants";
import {ApolloClient, ApolloProvider, createHttpLink, InMemoryCache} from '@apollo/client';
import {BrowserRouter} from "react-router-dom";
import {setContext} from "@apollo/client/link/context";

const httpLink = createHttpLink({
    uri: config.baseAPI
});

const authLink = setContext((_, {headers}) => {
    const token = localStorage.getItem(AUTH_TOKEN);

    return {
        headers: {
            ...headers,
            authorization: token ? `Bearer ${token}` : ''
        }
    }
});

const client = new ApolloClient({
    link: authLink.concat(httpLink),
    cache: new InMemoryCache()
});

WebFont.load({
    google: {
        families: ['Poppins:300,500,600']
    }
});

ReactDOM.render(
  <React.StrictMode>
      <BrowserRouter>
          <ApolloProvider client={client}>
              <Application />
          </ApolloProvider>
      </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
