import React from 'react'
import IndexLayout from '@/components/layouts/IndexLayout'
import ProductShowTest from 'container/Product/Productshow'

export default function productTest() {
  return (
    <>
        <Head>
          <title>PigJungle</title>
          <meta
            name="description"
            content="Product"
          />
          <link rel="icon" href="/images/logo.png" />
        </Head>
        <div id='product-page' name="product-page" className='product-page'>
          <ProductShow/>
          {/* <ProductList/> */}
        </div>
      </>
  )
}
productTest.layout = IndexLayout