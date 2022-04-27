import React from 'react';
import Head from 'next/head';
import { MDXProvider } from '@mdx-js/react';
import Link from 'next/link';
import { Header } from './header';

const components = {};

export default function Blog(props) {
  const { meta, route, ...rest } = props;

  const pages = props.pageMap.filter((e) => e.name == 'blog')[0].children;

  const sharedHead = (
    <Head>
      <meta property="og:title" content={meta.title} />
      <meta property="og:site_name" content="Ken Xhelaj's blog" />
      <meta property="og:description" content={meta.description} />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:site" content="@twitter" />
      <meta property="og:image" content={meta.og} />
    </Head>
  );

  if (route.startsWith('/blog')) {
    return function Layout({ children }) {
      return (
        <>
          {sharedHead}
          <Header />
          <div className="prose lg:prose-lg mx-auto px-4 py-8">
            <MDXProvider components={components}>{children}</MDXProvider>
          </div>
        </>
      );
    };
  }

  if (route.startsWith('/')) {
    return function Layout({ children }) {
      return (
        <>
          {sharedHead}
          <Header />
          <div>
            {pages.map((p) => (
              <li
                key={p.frontMatter.slug}
                className="flex items-center space-x-3"
              >
                <span className="block text-gray-500 w-[9.5rem] text-right">
                  {p.frontMatter.date}
                </span>
                <Link href={p.route}>
                  <a className="block font-bold">{p.frontMatter.title}</a>
                </Link>
              </li>
            ))}
          </div>
        </>
      );
    };
  }

  return function Layout({ children }) {
    return (
      <>
        {sharedHead}
        {children}
      </>
    );
  };
}
