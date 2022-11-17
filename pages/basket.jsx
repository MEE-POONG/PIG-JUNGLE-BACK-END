
import ProductList from '@/components/ฺฺBasket/basket'
import React from 'react'
import Head from 'next/head';
import IndexLayout from "@/components/layouts/IndexLayout";
export default function BasketPage() {
  return (
    <>
      <Head>
        <title>PigJungle</title>
        <meta
          name="description"
          content="I2AROBOT 2"
        />
        <link rel="icon" href="/images/logo.png" />
      </Head>
      <div id='basket-page' name="basket-page" className='basket-page'>
        <ProductList />
      </div>
    </>
  )
}
BasketPage.layout = IndexLayout;
