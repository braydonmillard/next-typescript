import Nav from './Nav';
// import Meta from './Meta';
// import Header from './Header';
import styles from '../styles/Layout.module.css';
import { AppProps } from 'next/app';
import React, { FC } from 'react';
import Header from './Header';

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <>
      <Nav />
      <div className={styles.container}>
        <main className={styles.main}>
          <Header />
          {children}
        </main>
      </div>
    </>
  );
};

export default Layout;
function withInitialState<T>(arg0: { children: any }) {
  throw new Error('Function not implemented.');
}
