
import React from "react";
import Head from 'next/head';
import BackGroundMain from "@/components/Bg/BackGroundMain";

import { Image } from 'react-bootstrap';

export default function AdderssUserPage() {
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

            <BackGroundMain />

            <div id='sign-user' name="sign-user" className='sign-user'>
                <div className='box-Container-Si'>

                    <div className="box-img">
                        <Image src={'images/B02.png'} width={'300px'} />
                    </div>

                    <div className='Container-Si'>

                            <Image src={'images/logo.png'} className='img-Si-Su' />

                        <form>

                            <input className='input-Si-Su' type="text" id="Email" name="Email" placeholder="Email" />

                            <input className='input-Si-Su' type="text" id="Password" name="Password" placeholder="Password" />


                        </form>
                        <div className='box-btu-Si-Su'>
                            <a className='btu-Si-Su-Ad' type='SignIn'>Sign in</a>

                        </div>
                        <div className='box-text'>
                            <a className='text-Si-Su' href="/sign_up"> Sign up</a> <a className='text-Si-Su' href="">Forgot Password?</a>
                        </div>
                    </div>

                    <div className="box-img">
                        <Image src={'images/B02.png'} width={'300px'} />
                    </div>

                </div>
            </div>

        </>
    );
}
