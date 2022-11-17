import Head from 'next/head';
import React from 'react';
import IndexLayout from "@/components/layouts/IndexLayout";
import About from 'container/About/About';


export default function AboutPage() {
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
      <div id='about-page' name="about-page" className='about-page'>
        
        <About/>
      </div>
    </>
  )
}
AboutPage.layout = IndexLayout;
