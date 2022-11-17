
import React from "react";
import Head from 'next/head';
import BackGroundMain from "@/components/Bg/BackGroundMain";

import { Image } from 'react-bootstrap';

export default function SignUpUserPages() {
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
                <div className="box-Container-Su">

                    <div className="box-img">
                        <Image src={'images/B01.png'} width={'300px'} />
                    </div>

                    <div className='Container-Su'>
                        <Image src={'images/logo02.png'} className='img-Si-Su' />
                        <form>

                            <input className='input-Si-Su' type="text" id="UserName" name="UserName" placeholder="UserName" />

                            <input className='input-Si-Su' type="text" id="Email" name="Email" placeholder="Email" />

                            <input className='input-Si-Su' type="text" id="Password" name="Password" placeholder="Password" />

                            <input className='input-Si-Su' type="text" id="ConfirmPassword" name="ConfirmPassword" placeholder="ConfirmPassword" />
                        </form>
                        <div className="box-btu-Si-Su">
                            <a className="btu-Si-Su-Ad" type='sign-up' href="/address_user">SIGN UP</a>
                        </div>
                        <div className='box-text'>
                            <a className='text-Si-Su' href="/sign_in">Sign in</a>
                        </div>
                    </div>

                    <div className="box-img">
                        <Image src={'images/B01.png'} width={'300px'} />
                    </div>

                </div>
            </div>
        </>
    );
}