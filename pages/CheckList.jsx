
import Head from 'next/head';

import React from 'react'
import IndexLayout from "@/components/layouts/IndexLayout";
import CheckList from 'container/CheckList/CheckList';

export default function CheckListPage() {
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
      <div id='checklist-page' name="checklist-page" className='checklist-page'>
       <CheckList/>
      </div>
    </>
  )
}
CheckListPage.layout = IndexLayout;
