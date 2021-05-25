import React from 'react';
import { Helmet } from 'react-helmet';

const SEO = ({ title, description }) => {
  return (
    <Helmet
      lang="en"
      title={title}
      meta={[
        {
          name: 'description',
          content: description,
        },
      ]}
    >
      <link rel="preconnect" href="https://fonts.gstatic.com" />
      <link
        href="https://fonts.googleapis.com/css2?family=Roboto+Mono:wght@300;600&display=swap"
        rel="stylesheet"
      />
    </Helmet>
  );
};

export default SEO;
