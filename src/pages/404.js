import React from 'react';

import Layout from '../components/Layout';
import SideBar from '../components/SideBar';

const IndexPage = () => (
  <Layout>
    <SideBar />
    <div id="wrapper">
      <div id="main">
        <section>
          <div className="container">
            <section>
              <h1>NOT FOUND</h1>
              <p>Not a valid URL</p>
            </section>
          </div>
        </section>
      </div>
    </div>
  </Layout>
);

export default IndexPage;
