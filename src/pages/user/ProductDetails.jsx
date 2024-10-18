import React from 'react'
import BackToTopBar from '../../components/common/BackToTopBar'
import MiniGame from '../../components/common/MiniGame'
import Messenger from '../../components/common/Messenger'
import { Col, Container, Row } from 'react-bootstrap'
import { url } from '../../untils/variable'
import useCallApiProducts from '../../hooks/useCallApiProducts'
import { useParams } from 'react-router-dom'

const ProductDetails = () => {

    const paramsProduct = useParams("id");
    const urlDetailProduct = url + `/${paramsProduct.id}`;
  
    const {data, isLoading} = useCallApiProducts(urlDetailProduct);
  
    if(isLoading) return <p>Loading...</p>


  return (
    <>
        {/* product details */}
        <div className="product-details">
            <Container>
                <Row>
                    {/* img product */}
                    <Col xs={12} sm={6} md={6} className="img-product">
                        <img src={data.image} alt="img product" />
                    <hr />
                    {/* describe product */}
                    <h1>Mô tả</h1>

                    <p className="describe-product">
                        {data.describeProduct}
                    </p>

                    </Col>
                    {/* product details right */}
                    <Col xs={12} sm={6} md={6} className="product-details-right">
                    {/* product name */}
                    <h1 className="product-name">{data.name}</h1>
                    {/* product price */}
                    <p className="product-price">{data.price}đ</p>
                    {/* options sizes */}
                    <div className="options-sizes">
                        <p>Chọn size (bắt buộc)</p>
                        <div className="options-sizes-box">
                        <div className="size-choice small-size">
                            <i className="fa-solid fa-glass-water" />
                            Nhỏ - {data.priceS}đ
                        </div>
                        <div className="size-choice medium-size">
                            <i className="fa-solid fa-glass-water" />
                            Vừa - {data.priceM}đ
                        </div>
                        <div className="size-choice big-size">
                            <i className="fa-solid fa-glass-water" />
                            Lớn - {data.priceL}đ
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