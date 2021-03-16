import Layout from 'components/Layout';
import Head from 'next/head'; // sluzy do seo i zmian w tab w przegladarce

export default function Home() {
  return (
    <Layout>
      <Head>
        <title>Blog - DG</title>
        <meta property="og:title" content="My page title" key="title" />
      </Head>
      Tutaj bedzie tresc
    </Layout>
  );
}
