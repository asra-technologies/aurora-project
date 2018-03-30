import * as React from 'react';
import './Layout.css';
// import { NavMenu } from './NavMenu';

const logo = require('./logo.svg');

export interface LayoutProps {
  children?: React.ReactNode;
}

export class Layout extends React.Component<LayoutProps, {}> {
  public render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <div className="container-fluid">
          {this.props.children}
        </div>
      </div>
    );
  }
}
