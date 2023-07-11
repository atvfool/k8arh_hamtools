import React, { Component } from 'react';
import { Route, Routes } from 'react-router-dom';
import AppRoutes from './AppRoutes';
import { Layout } from './components/Layout';
import './custom.css';

export default class App extends Component {
  static displayName = App.name;

  render() {
    return (
      <Layout>
        <Routes>
          {AppRoutes.map((route, index) => {
              const { element, ...rest } = route;
              console.log(rest);
              if (rest['path'] == 'hambandspng') {
                  return <Route key={index} {...rest} path={rest['file']} />;
              } else {
                  return <Route key={index} {...rest} element={element} />;
              }
          })}
        </Routes>
      </Layout>
    );
  }
}
