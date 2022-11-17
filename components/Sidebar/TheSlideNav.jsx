import React from "react";
import {
  FaTable,
  FaRegKeyboard,
  FaTh,
  FaTachometerAlt,
  FaUserEdit,
  FaLaptop,
  FaRegFileAlt,
  FaRegChartBar,
  FaBars,
  FaFunnelDollar,
} from "react-icons/fa";
import { Image, Dropdown, Button } from "react-bootstrap";
import { AiTwotoneBank, AiFillProfile } from "react-icons/ai";

import Link from "next/link";

export default function TheSlideNav() {
  return (
    <>
      <div className="sidebar pe-4 pb-3 ">
        <nav className="navbar bg-secondary navbar-dark">
          <Link href="/">
            <a className="navbar-brand mx-4 mb-3">
              <h3 className="text-primary">
                <FaUserEdit className="fa me-2" />
                DarkPan
              </h3>
            </a>
          </Link>
          <div className="d-flex align-items-center ms-4 mb-4">
            <div className="position-relative">
              <Image
                className="rounded-circle"
                src={"images/user.jpg"}
                alt=""
                style={{ width: "40px", height: "40px" }}
              />
              <div className="bg-success rounded-circle border border-2 border-white position-absolute end-0 bottom-0 p-1" />
            </div>
            <div className="ms-3">
              <h6 className="mb-0">Jhon Doe</h6>
              <span>Admin</span>
            </div>
          </div>
          <div className="navbar-nav w-100">
            <Link href="/">
              <a className="nav-item nav-link active">
                <i className="me-2">
                  <FaTachometerAlt />
                </i>
                Dashboard
              </a>
            </Link>

            <Dropdown bsPrefix="nav-item">
              <Dropdown.Toggle className="nav-link" variant="">
                <i className="me-2">
                  <FaLaptop />
                </i>
                Elements
              </Dropdown.Toggle>
              <Dropdown.Menu className="bg-transparent border-0">
                <Link id="buttons" href="/buttons">
                  <a className="dropdown-item">Buttons</a>
                </Link>
                <Link id="typographys" href="/typographys">
                  <a className="dropdown-item">Typography</a>
                </Link>
                <Link id="other" href="/elements">
                  <a className="dropdown-item">Other Elements</a>
                </Link>
              </Dropdown.Menu>
            </Dropdown>
            <Link id="widgets" href="/widgets">
              <a className="nav-item nav-link">
                <i className="me-2">
                  <FaTh />
                </i>
                Widgets
              </a>
            </Link>
            <Link href="/forms">
              <a className="nav-item nav-link">
                <i className="me-2">
                  <FaRegKeyboard />
                </i>
                Forms
              </a>
            </Link>
            <Link href="/tables">
              <a className="nav-item nav-link">
                <i className="me-2">
                  <FaTable />
                </i>
                Tables
              </a>
            </Link>
            <Link href="/charts">
              <a className="nav-item nav-link">
                <i className="me-2">
                  <FaRegChartBar />
                </i>
                Charts
              </a>
            </Link>
            <Dropdown bsPrefix="nav-item">
              <Dropdown.Toggle className="nav-link" variant="">
                <i className="me-2">
                  <FaRegFileAlt />
                </i>
                Pages
              </Dropdown.Toggle>
              <Dropdown.Menu className=" bg-transparent border-0">
                <Link href="/login">
                  <a className="dropdown-item">Login</a>
                </Link>
                <Link href="/register">
                  <a className="dropdown-item">Register</a>
                </Link>
                <Link href="/404">
                  <a className="dropdown-item">404 Error</a>
                </Link>
                <Link href="/blanks">
                  <a className="dropdown-item">Blank Page</a>
                </Link>
              </Dropdown.Menu>
            </Dropdown>
            <Link href="/moneytransfer">
              <a className="nav-item nav-link">
                <i className="me-2">
                  <FaFunnelDollar />
                </i>
                MoneyTransfer
              </a>
            </Link>
          </div>
        </nav>
      </div>
    </>
  );
}
export function ButtonSlideNav() {
  const [slideOpen, setSlideOpen] = React.useState("");
  return (
    <Button
      bsPrefix="sidebar-toggler flex-shrink-0 bar-slide"
      onClick={() => setSlideOpen(slideOpen == "close" ? "open" : "close")}
    >
      <FaBars />
    </Button>
  );
}
