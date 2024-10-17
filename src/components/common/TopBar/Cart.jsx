import { useState } from 'react';
import { Button, Offcanvas, ToggleButton, ToggleButtonGroup } from 'react-bootstrap';

import traSenVang from "../../../assets/images/tra-sen-vang.png"
import { Link } from 'react-router-dom';


const Cart = ({name, ...props}) => {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const [value, setValue] = useState([1]);
    const handleChange = (val) => setValue(val);

  return (
    <>
      <Button variant="primary" onClick={handleShow} className="me-2 cart">
        <i class="fa-solid fa-cart-shopping"></i>
        <p>Giỏ hàng</p>
      </Button>

      <Offcanvas show={show} onHide={handleClose} {...props} className='cart-box'>
        <Offcanvas.Header closeButton className='cart-header'>
            <Offcanvas.Title>Giỏ hàng</Offcanvas.Title>
            <Offcanvas.Title>(Đang có 3 sản phẩm)</Offcanvas.Title>
        </Offcanvas.Header>

        <Offcanvas.Body>
            <div className="line"></div>

            {/* Cart item */}
            <div className="card-item">

                <img src={traSenVang} alt="img-item" />

                <div className="title-product">
                    <p className='name-product'>Trà sen vàng - M</p>
                    <p className='note'>(ít đường, ít đá)</p>

                    <div className='quantity'>
                        <button>-</button>
                        <div className='number-quantity'>
                          1
                        </div>
                        <button>+</button>
                    </div>
                </div>

                <div className="price">
                    <p>49.000đ</p>
                </div>

                <button type="button" className='delete-product'>Xóa</button>

            </div>

            {/* Cart item */}
            <div className="card-item">

                <img src={traSenVang} alt="img-item" />

                <div className="title-product">
                    <p className='name-product'>Trà sen vàng - M</p>
                    <p className='note'>(ít đường, ít đá)</p>

                    <div className='quantity'>
                        <button>-</button>
                        <div className='number-quantity'>
                          1
                        </div>
                        <button>+</button>
                    </div>
                </div>

                <div className="price">
                    <p>49.000đ</p>
                </div>

                <button type="button" className='delete-product'>Xóa</button>

            </div>

            {/* Cart item */}
            <div className="card-item">

                <img src={traSenVang} alt="img-item" />

                <div className="title-product">
                    <p className='name-product'>Trà sen vàng - M</p>
                    <p className='note'>(ít đường, ít đá)</p>

                    <div className='quantity'>
                        <button>-</button>
                        <div className='number-quantity'>
                          1
                        </div>
                        <button>+</button>
                    </div>
                </div>

                <div className="price">
                    <p>49.000đ</p>
                </div>

                <button type="button" className='delete-product'>Xóa</button>

            </div>

            {/* gift code */}

            <ToggleButtonGroup type="checkbox" value={value} onChange={handleChange} className='gift-code'>

              <ToggleButton id="tbg-btn-1" value={1}>
                  Discount 30%
              </ToggleButton>


            </ToggleButtonGroup>

            <div className="line line2"></div>

            <div className='total-price'>
              <h1>Tổng tiền</h1>
              <p>147.000đ</p>
            </div>

            <Link to='/order'>
              <button class="order" type="button">ĐẶT HÀNG</button>
            </Link>


        </Offcanvas.Body>
      </Offcanvas>
    </>
  )
}

export default Cart