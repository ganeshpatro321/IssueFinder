import React from 'react';
import { Header } from 'semantic-ui-react';

import Layout from './Layout';
import NavBar from './NavBar';

const DynamicPage = () => {
  return (
    <Layout>
      <NavBar curr="profile"/>
      <Header as="h2">Dynamic Page</Header>
      <p>This page was loaded asynchronously!!!</p>
    </Layout>
  );
};

export default DynamicPage;