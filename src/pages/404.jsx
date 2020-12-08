import React from 'react';
import { Link } from 'gatsby';

import Layout from '../components/layout';
import SEO from '../components/seo';

const classes = {
  title: 'text-lg font-bold',
  link: 'underline',
};

const NotFoundPage = () => (
  <Layout>
    <SEO title="Not found" />
    <h1 className={classes.title}>404: Not Found</h1>
    <p>
      Page not found.{' '}
      <Link className={classes.link} to="/">
        Return
      </Link>
      .
    </p>
  </Layout>
);

export default NotFoundPage;
