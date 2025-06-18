import React from 'react';
import Header from './Header';
import Footer from './Footer';
import Content from './Content';

const Layout = () => (
  <div className="d-flex flex-column min-vh-100">
    <Header />
    <Content />
    <Footer />
  </div>
);

export default Layout;
