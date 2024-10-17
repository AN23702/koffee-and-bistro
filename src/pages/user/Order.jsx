import { useState } from 'react';
import Messenger from '../../components/common/Messenger'
import BackToTopBar from '../../components/common/BackToTopBar'
import { Col, Container, Row, ToggleButton, ToggleButtonGroup} from 'react-bootstrap'
import traSenVang from '../../assets/images/tra-sen-vang.png'

const Order = () => {
    const [value, setValue] = useState([1, 3]);

    /*
     * The second argument that will be passed to
     * `handleChange` from `ToggleButtonGroup`
     * is the SyntheticEvent object, but we are
     * not using it in this example so we will omit it.
     */
    const handleChange = (val) => setValue(val);

  return (
    <>
    <Container className='order-container'>
        <Row>
            {/* order box */}
            <Col xs={12} sm={6} md={6} className='order-box'>
            <Container>

                    <Row>
                    <Col xs={12} sm={12} md={12}>
                        <h1>THÔNG TIN GIAO HÀNG</h1>
                    </Col>

                    <Col xs={12} sm={12} md={12}>
                        <input type="text" placeholder="Họ và tên" />
                    </Col>

                    <Col xs={12} sm={7} md={7}>
                        <input type="text" placeholder="Email" />
                    </Col>

                    <Col xs={12} sm={5} md={5}>
                        <input type="text" placeholder="Số điện thoại" />
                    </Col>

                    <Col xs={12} sm={12} md={12}>
                        <input type="text" placeholder="Địa chỉ" />
                    </Col>

                    <Col xs={12} sm={6} md={6}>
                        <input list="city" placeholder="Chọn tỉnh/thành phố" />
                        <datalist id="city">
                        <option value="Hà Nội"></option>
                        <option value="TP Hồ Chí minh"></option>
                        <option value="Đà Nẵng"></option>
                        <option value="Huế"></option>
                        <option value="Hải Phòng"></option>
                        </datalist>
                    </Col>

                    <Col xs={12} sm={6} md={6}>
                        <input list="district" placeholder="Chọn quận/huyện" />
                        <datalist
                        id="district
                                            "
                        ></datalist>
                    </Col>

                    <Col xs={12} sm={6} md={6}>
                        <input list="ward" placeholder="Chọn phường/xã" />
                        <datalist
                        id="district
                                            "
                        ></datalist>
                    </Col>

                    <Col xs={12} sm={12} md={12}>
                        <textarea placeholder="Ghi chú" defaultValue={""} />
                    </Col>

                    </Row>
                </Container>
            


            
            </Col>

            {/* cart box right */}
            <Col xs={12} sm={6} md={6} className='cart-box-right'>

                {/* cart item */}
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

            <div className="line"></div>

            <div className='total-price'>
            <h1>Tổng tiền</h1>
            <p>147.000đ</p>
            </div>

            <button class="order" type="button">ĐẶT HÀNG</button>

            </Col>

        </Row>
    </Container>




    {/* Back to top bar */}
    <BackToTopBar/>

    {/* Messenger */}
    <Messenger/>
    </>
  )
}

export default Order