import React from "react";
import { Image } from "react-bootstrap";
import { FaBehance, FaFacebookF, FaInstagram, FaTwitter } from "react-icons/fa";

export default function Footer() {
  return (
    <>
      <footer className="footer-dec">
        <div className="container">
          <div className="row">
            <div className="col-lg-3">
              <div className="about footer-item">
                <div className="logo">
                  <a href="#">
                    <Image src={"images/iodesign.png"} alt="logo-nav" />
                  </a>
                </div>
                <a href="#">
                  © 2022 I.O.Design & Home Co., Ltd. บริษัท ไอ.โอ.ดีไซน์ แอนด์
                  โฮม จำกัด All Rights Reserved
                </a>

                <ul>
                  <li>
                    <a href="#">
                      <i className="fa">
                        <FaFacebookF />
                      </i>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <i className="fa">
                        <FaTwitter />
                      </i>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <i className="fa">
                        <FaBehance />
                      </i>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <i className="fa">
                        <FaInstagram />
                      </i>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-lg-3">
              <div className="services footer-item">
                <h4></h4>
                <ul>
                  <p></p>
                  <p></p>
                  <p> </p>
                </ul>
              </div>
            </div>
            <div className="col-lg-3">
              <div className="community footer-item">
                <h4></h4>
                <ul>
                  <p> </p>
                  <p></p>
                </ul>
              </div>
            </div>
            <div className="col-lg-3">
              <div className="subscribe-newsletters footer-item">
                <h4>บริษัท ไอ.โอ.ดีไซน์ แอนด์ โฮม จำกัด</h4>
                <p>
                  21/1 ซอยอนามัยงามเจริญ 25 แยก 2-7 แขวงท่าข้าม เขตบางขุนเทียน
                  กรุงเทพฯ 10150
                </p>
                <p>TEL : 02-409-2152-9</p>
                <p>FAX : 02-409-2150-1</p>
                <p> Hot Line : 091-739-3027</p>
                <p> EMAIL:oiio2005@yahoo.co.th</p>
                <p>EMAIL:oiio2005@hotmail.co.th</p>
                <form action="#" method="get">
                  <input
                    type="text"
                    name="email"
                    id="email"
                    pattern="[^ @]*@[^ @]*"
                    placeholder="Your Email"
                    required=""
                  />
                  <button
                    type="submit"
                    id="form-submit"
                    className="main-button "
                  >
                    <i className="fa fa-paper-plane-o"></i>
                  </button>
                </form>
              </div>
            </div>
            <div className="col-lg-12">
              <div className="copyright">
                <p>
                  <a
                    rel="nofollow"
                    href="https://www.meepoong.com/"
                    title="ME PROMPT TECHNOLOGY COMPANY LIMITED"
                  >
                    ME PROMPT TECHNOLOGY COMPANY LIMITED
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
