import Head from 'next/head';
import IndexPage from "components/layouts/IndexPage";
import { useRouter } from 'next/router';
import { Container, Image, Row } from 'react-bootstrap';
export default function SliderpicturePage() {
  const router = useRouter();
  return (
    < >
      <Head>
        <title>Pig Jungle</title>
        <meta
          name="description"
          content="I2AROBOT 2"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
    </ >
  );
}
SliderpicturePagelayout = IndexPage;