import Head from 'next/head';

const SEO = ({ title, description }) => (
  <Head>
    <title>{title}</title>
    <meta name="description" content={description} />
    {/* Add additional meta tags as needed */}
  </Head>
);

export default SEO;