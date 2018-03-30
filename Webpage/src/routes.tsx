import * as React from 'react';
import { Route } from 'react-router-dom';
import { Layout } from './Layout';
import App from './components/App';

export const routes = (
  <Layout>
    <Route exact={true} path="/" component={App} />
  </Layout>
);
