
import React from 'react'
import Head from 'next/head';
import IndexLayout from "components/layouts/IndexLayout";
import Contactshow from 'container/Contact/Contactshow';

export default function Contactpage() {
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
      <div id='contact-page' name="contact-page" className='contact-page'>
     <Contactshow/>
      </div>
    </>
  )
}
Contactpage.layout = IndexLayout;