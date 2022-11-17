
import React from "react";
import Head from 'next/head';
import AddressUser from "container/addressuser/Address_User";
import BackGroundMain from "@/components/Bg/BackGroundMain";


export default function AddressUserPages() {
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

            <BackGroundMain/>

            <div id='sign-user' name="sign-user" className='sign-user'>
                <AddressUser/>
            </div>



        </>
    );
}