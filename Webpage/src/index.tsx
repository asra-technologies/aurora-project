import * as React from 'react';
import * as ReactDOM from 'react-dom';
import registerServiceWorker from './registerServiceWorker';
import './index.css';
import * as RoutesModule from './routes';
import { BrowserRouter } from 'react-router-dom';
let routes = RoutesModule.routes;

function renderApp() {
  // This code starts up the React app when it runs in a browser. It sets up the routing
  // configuration and injects the app into a DOM element.
  // const baseUrl = document.getElementsByTagName('base')[0].getAttribute('href')!;
  ReactDOM.render(
    <BrowserRouter children={routes} />,
    document.getElementById('root') as HTMLElement
  );
}

renderApp();

registerServiceWorker();
