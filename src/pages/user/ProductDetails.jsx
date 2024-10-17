import React from 'react'
import BackToTopBar from '../../components/common/BackToTopBar'
import MiniGame from '../../components/common/MiniGame'
import Messenger from '../../components/common/Messenger'

import traSenVang from "../../assets/images/tra-sen-vang.png"
import { Col, Container, Row } from 'react-bootstrap'

const ProductDetails = () => {
  return (
    <>
        {/* product details */}
        <div className="product-details">
            <Container>
                <Row>
                    {/* img product */}
                    <Col xs={12} sm={6} md={6} className="img-product">
                        <img src={traSenVang} alt="" />
                    <hr />
                    {/* describe product */}
                    <h1>Mô tả</h1>
                    <p className="describe-product">
                        Thức uống chinh phục những thực khách khó tính! Sự kết hợp độc đáo
                        giữa trà Ô long, hạt sen thơm bùi và củ năng giòn tan. Thêm vào chút
                        sữa sẽ để vị thêm ngọt ngào.
                    </p>
                    </Col>
                    {/* product details right */}
                    <Col xs={12} sm={6} md={6} className="product-details-right">
                    {/* product name */}
                    <h1 className="product-name">Trà sen vàng</h1>
                    {/* product price */}
                    <p className="product-price">45.000đ</p>
                    {/* options sizes */}
                    <div className="options-sizes">
                        <p>Chọn size (bắt buộc)</p>
                        <div className="options-sizes-box">
                        <div className="size-choice small-size">
                            <i className="fa-solid fa-glass-water" />
                            Nhỏ - 45.000đ
                        </div>
                        <div className="size-choice medium-size">
                            <i className="fa-solid fa-glass-water" />
                            Vừa - 55.000đ
                        </div>
                        <div className="size-choice big-size">
                            <i className="fa-solid fa-glass-water" />
                            Lớn - 65.000đ
                        </div>
                        </div>
                    </div>
                    {/* options topping */}
                    <div className="options-topping">
                        <p>Topping</p>
                        <div className="options-topping-box">
                        <div className="topping-choice">Hạt sen - 10.000đ</div>
                        <div className="topping-choice">Củ năng - 10.000đ</div>
                        <div className="topping-choice">Đào - 10.000đ</div>
                        <div className="topping-choice">Thạch đào - 10.000đ</div>
                        <div className="topping-choice">Vải - 10.000đ</div>
                        <div className="topping-choice">Thạch vải - 10.000đ</div>
                        <div className="topping-choice">Đậu đỏ - 10.000đ</div>
                        </div>
                    </div>
                    {/* more options */}
                    <div className="more-options">
                        <p>Tùy chọn</p>
                        <div className="more-options-box">
                        <div className="more-options-choice">Ít đá</div>
                        <div className="more-options-choice">Không đá</div>
                        <div className="more-options-choice">Ít ngọt</div>
                        <div className="more-options-choice">Thêm ngọt</div>
                        <div className="more-options-choice">Không ngọt</div>
                        </div>
                    </div>
                    {/* product to cart */}
                    <div className="product-to-cart">
                        <p>Thêm vào giỏ hàng</p>
                    </div>
                    </Col>
                </Row>
            </Container>
        </div>

        {/* Back to top bar */}
        <BackToTopBar/>

        {/* mini game */}
        <MiniGame placement="bottom" name="MiniGame"/>

        {/* Messenger */}
        <Messenger/>
</>

  )
}

export default ProductDetails