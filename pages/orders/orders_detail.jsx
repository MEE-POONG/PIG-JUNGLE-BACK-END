import Head from 'next/head';

import IndexPage from "components/layouts/IndexPage";


import { useRouter } from 'next/router';

import { Container, Image, Row } from 'react-bootstrap';
export default function OrderDetailPage() {
  const router = useRouter();
  return (
    < >
      <Head>
        <title>HOME | dxx=</title>
        <meta
          name="description"
          content="I2AROBOT 2"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Container fluid className=" pt-4 px-4">
        <div className="bg-secondary text-center rounded shadow p-4">
                    <div className="d-flex align-items-center justify-content-between mb-4">
                        <h6 className="mb-0">รายการสั่งซื่อ</h6>
                        {/* <a href="">Show All</a> */}
                    </div>
                    
                </div>
       
      </Container>
    </ >
  );
}
OrderDetailPage.layout = IndexPage;