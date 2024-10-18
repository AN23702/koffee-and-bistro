import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import Carousel from 'react-bootstrap/Carousel'
import BackToTopBar from '../../components/common/BackToTopBar'
import MiniGame from '../../components/common/MiniGame'
import Messenger from '../../components/common/Messenger'
import useCallApiProducts from '../../hooks/useCallApiProducts'
import { url } from '../../untils/variable'
import { Link } from 'react-router-dom'

const BartendingAtHome = () => {

    const {data, isLoading} = useCallApiProducts(url);

  
    // check api call xong chua
    if(isLoading == true) return <p>Loading...</p>
    
    
    // check san pham co ton tai khong
    if (data.length == 0) return <p>không tồn tại sản phẩm</p>

  return (
<>
    {/* bartending-at-home-products title */}
    <div className="background-img">

        <div className="fix-background-img bartending-at-home-img" />
        <Container>
            <Row>
                <Col xs={12} sm={12} md={12} className="bartending-at-home-products-title">
                    <h3 class="animate-charcter"> PHA CHẾ TẠI NHÀ</h3>
                </Col>
            </Row>
        </Container>
    </div>

    {/* bartending-at-home-products */}
    <div className="bartending-at-home-products">
        <Container>

        {data.filter(product => product.class === 'bartending at home').map((product) =>{    

            return(
                // bartending-at-home-products card
                <Row className="fix-margin" key={product.id}>
                <Col xs={12} sm={12}  md={12} className="bartending-at-home-products-card">
                    <Container>
                        <Row>
        
                            <Col xs={6} sm={6} md={6}>
                                <Container>
                                <Row>
                                    {/* product card */}
                                    <Col xs={6} sm={6} md={6} className="product-card">
                                    <Link to={`/product-details/${product.id}` }  className="product-img">
                                        <img
                                        src={product.image}
                                        alt={product.name}
                                        />
                                    </Link>
                                    <div className="product-detail">
                                        <h3 className="name-product">
                                        {product.name}
                                        </h3>
                                        <p className="price-product">{product.price}đ</p>
                                    </div>
                                    </Col>
                                </Row>
                                </Container>
                            </Col>
        
                            {/* preparation instructions */}
                            <Col xs={6} sm={6} md={6}>
                                <Carousel className='bartending-slide' interval="3000">
                                    <Carousel.Item>
                                        <img
                                            className="bartending-img"
                                            src={product.instructImage1}
                                            alt="instructImage"
                                        />
                                    </Carousel.Item>

                                    <Carousel.Item>
                                        <img
                                            className="bartending-img"
                                            src={product.instructImage2}
                                            alt="instructImage"
                                        />
                                    </Carousel.Item>
                                    
                                    <Carousel.Item>
                                        <img
                                            className="bartending-img"
                                            src={product.instructImage3}
                                            alt="instructImage"
                                        />
                                    </Carousel.Item>                                            
                                    <Carousel.Item>
                                        <img
                                            className="bartending-img"
                                            src={product.instructImage4}
                                            alt="instructImage"
                                        />
                                    </Carousel.Item>

                                    <Carousel.Item>
                                        <img
                                            className="bartending-img"
                                            src={product.instructImage5}
                                            alt="instructImage"
                                        />
                                    </Carousel.Item>                                    

                                </Carousel>
                            </Col>        
        
                        </Row>
                    </Container>
                </Col>
            </Row>
            )

        })}


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

export default BartendingAtHome