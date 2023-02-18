import React from 'react';
import Head from 'next/head';

type Props = {
  description?: string;
  author?: string;
  meta?: any;
  title: string;
}

export default function SEO({
  author = 'Dishant Sharma',
  meta,
  title = 'Dishant Sharma -  Developer Portfolio',
}:Props) {
  const metaData = [
    {
      name: `description`,
      content: 'Check out Dishant Sharma\'s portfolio website to see his latest projects and experience as a Full Stack Developer.',
    },
    {
      property: `og:title`,
      content: 'Dishant Sharma -  Developer Portfolio',
    },
    {
      property: `og:description`,
      content: 'Check out Dishant Sharma\'s portfolio website to see his latest projects and experience as a Full Stack Developer.',
    },
    {
      property: `og:type`,
      content: `website`,
    },
    {
      name: `twitter:card`,
      content: `summary`,
    },
    {
      name: `twitter:creator`,
      content: 'Dishant Sharma',
    },
    {
      name: `twitter:title`,
      content: 'Dishant Sharma -  Developer Portfolio',
    },
    {
      name: `twitter:description`,
      content: 'Check out Dishant Sharma\'s portfolio website to see his latest projects and experience as a Full Stack Developer.',
    },
  ].concat(meta);
  return (
    <Head>
      <title>{title}</title>
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta charSet="utf-8" />
      <link rel="icon" href="assets/favicon.ico" />
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" />
      {metaData.map(({ name, content }, i) => (
        <meta key={i} name={name} content={content} />
      ))}
    </Head>
  );
}

SEO.defaultProps = {
  lang: `en`,
  meta: [],
  description: ``,
};
