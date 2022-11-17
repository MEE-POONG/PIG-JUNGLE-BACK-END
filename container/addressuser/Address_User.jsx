import React from "react"
import { Container, Navbar, Nav, NavDropdown, Offcanvas, Form, FormControl, Button, Image, Row, Col, NavbarBrand } from 'react-bootstrap';

export default function AddressUser() {
    return (
        <>
            <div className="box-Container-address">
                <div className='Container-address'>
                    <h2 className='title-address'>Address</h2>
                    <form>

                        <div className="box-address-left">
                            <label>ชื่อ - สกุล</label>
                            <input className='input-address' type="text" id="Name" name="Name" placeholder="ชื่อ - สกุล" />
                            <label>หมายเลขโทรศัพท์</label>
                            <input className='input-address' type="text" id="Phone" name="Phone" placeholder="โปรดป้อนหมายเลขโทรศัพท์ของคุณ" />
                        </div>
                        <div className="box-address-right">
                            <label>ที่อยู่</label>
                            <input className='input-address' type="text" id="Address" name="Address" placeholder="กรุณาระบุที่อยู่ (บ้านเลขที่,ถนน,ตำบล)" />
                            <label>จังหวัด</label>
                            <input className='input-address' type="text" id="Password" name="Password" placeholder="จังหวัด" />
                            <label>เขต/อำเภอ</label>
                            <input className='input-address' type="text" id="ConfirmPassword" name="ConfirmPassword" placeholder="กรุณาเลือกเขต/อำเภอ" />
                            <label>รหัสไปรษณีย์</label>
                            <input className='input-address' type="text" id="ConfirmPassword" name="ConfirmPassword" placeholder="รหัสไปรษณีย์" />
                        </div>
                    </form>

                    <div className="box-btu-address">

                        <a className="btu-Si-Su-Ad" type='address-up' href="/">ยกเลิก</a>

                        <a className="btu-Si-Su-Ad" type='submit'>บันทึก</a>

                    </div>
                </div>

            </div>
        </>
    )
}

