import React from 'react';
import { Helmet } from 'react-helmet';

const SEO = () => {
  return (
    <Helmet>
      <link rel="preconnect" href="https://fonts.gstatic.com" />
      <link
        href="https://fonts.googleapis.com/css2?family=Roboto+Mono:wght@300&display=swap"
        rel="stylesheet"
      />
    </Helmet>
  );
};

export default SEO;
