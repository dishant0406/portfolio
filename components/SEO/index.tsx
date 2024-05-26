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
  title = 'Dishant Sharma | Web Developer Portfolio | Coding Projects',
}: Props) {
  return (
    <Head>
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta charSet="utf-8" />
      <link rel="icon" href="assets/favicon.ico" />
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" />
      <title>Dishant Sharma | Web Developer Portfolio | Coding Projects</title>
      <meta
        name="description"
        content="Discover Dishant Sharma's Developer portfolio website. Explore his latest coding projects, skills, and professional experience in web development"
      />
      <meta property="og:url" content="https://dishantsharma.dev" />
      <meta property="og:type" content="website" />
      <meta
        property="og:title"
        content="Dishant Sharma | Web Developer Portfolio | Coding Projects"
      />
      <meta
        property="og:description"
        content="Discover Dishant Sharma's Developer portfolio website. Explore his latest coding projects, skills, and professional experience in web development"
      />
      <meta
        property="og:image"
        content="https://opengraph.b-cdn.net/production/images/b587401e-0246-480e-b355-e1ba0efc6e29.png?token=bhuJWqxMlhJbrcut1SvtS1hJCruBNLjz0Ss33jv9yMs&height=630&width=1200&expires=33252708823"
      />
      <meta name="twitter:card" content="summary_large_image" />
      <meta property="twitter:domain" content="dishantsharma.dev" />
      <meta property="twitter:url" content="https://dishantsharma.dev" />
      <meta
        name="twitter:title"
        content="Dishant Sharma | Web Developer Portfolio | Coding Projects"
      />
      <meta
        name="twitter:description"
        content="Discover Dishant Sharma's Developer portfolio website. Explore his latest coding projects, skills, and professional experience in web development"
      />
      <meta
        name="twitter:image"
        content="https://opengraph.b-cdn.net/production/images/b587401e-0246-480e-b355-e1ba0efc6e29.png?token=bhuJWqxMlhJbrcut1SvtS1hJCruBNLjz0Ss33jv9yMs&height=630&width=1200&expires=33252708823"
      />
      <link rel="canonical" href="https://dishantsharma.dev" />
      {/* Mobile Responsive */}
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta name="HandheldFriendly" content="true" />
      {/* Language */}
      <meta httpEquiv="Content-Language" content="en" />
      {/* Author */}
      <meta name="author" content="Dishant Sharma" />
      {/* Robots */}
      <meta name="robots" content="index, follow" />
      {/* Refresh */}
      <meta httpEquiv="refresh" content={'30'} />
      {/* Keywords */}
      {/* x-robot */}
      <meta name="googlebot" content="index, follow" />
      {/* publisher */}
      <meta name="publisher" content="Dishant Sharma" />
      <meta
        name="keywords"
        content="web developer, portfolio, coding projects, full stack developer"
      />
    </Head>
  );
}

SEO.defaultProps = {
  lang: `en`,
  meta: [],
  description: ``,
};
