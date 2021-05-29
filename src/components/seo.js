import React from 'react';
import favicon from '../images/icon.png';
import { Helmet } from 'react-helmet';
import headingFont from '../static/fonts/RobotoMono-Medium.ttf';

const SEO = ({ title, description }) => {
  return (
    <Helmet
      title={title}
      meta={[
        {
          name: 'description',
          content: description,
        },
      ]}
    >
      <html lang="en" />
      <link
        rel="preload"
        crossOrigin="anonymous"
        type="font/ttf"
        href={headingFont}
      />
      <link rel="icon" href={favicon} />
    </Helmet>
  );
};

export default SEO;
