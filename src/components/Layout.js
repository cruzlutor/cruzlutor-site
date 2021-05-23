import React from 'react';
import Navigation from './Navigation';
import DarkToggle from './DarkToggle';
import { config } from '@fortawesome/fontawesome-svg-core';
import '@fortawesome/fontawesome-svg-core/styles.css';

config.autoAddCss = false;

const Layout = ({ children }) => {
  return (
    <main className="min-h-screen leading-7 bg-background dark:bg-background-dark text-body dark:text-body-dark">
      <Navigation />
      <div
        className="pt-36 pb-16 flex items-center"
        style={{ minHeight: '90vh' }}
      >
        {children}
      </div>
      <div className="fixed bottom-3 right-3">
        <DarkToggle />
      </div>
    </main>
  );
};

export default Layout;
