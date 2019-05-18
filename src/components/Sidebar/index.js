import React, { useState } from 'react';
import Footer from './Footer';
import Header from './Header';
import Nav from './Nav';
import TopNav from './TopNav';
import config from '../../../config';
const pic = require('../../assets/images/avatar.png');

export default function SideBar({ sections = [] }) {
  const [headerOpen, toggleHeader] = useState(false);
  return (
    <div className={`${headerOpen ? 'header-visible' : ' '}`}>
      <TopNav
        title={config.authorName}
        onMenuClick={() => toggleHeader(!headerOpen)}
      />
      <div id="header">
        <div className="top">
          <Header
            avatar={pic}
            title={config.authorName}
            heading={config.heading}
          />
          <Nav sections={sections} />
        </div>
        <Footer socialLinks={config.socialLinks} />
      </div>

      {/* <section id="header">
        <Header
          avatar={pic}
          title={config.authorName}
          heading={config.heading}
        />
        <Nav sections={sections} />
        <Footer socialLinks={config.socialLinks} />
      </section> */}
    </div>
  );
}
