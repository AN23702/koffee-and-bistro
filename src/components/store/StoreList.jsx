import { Col, Container, Row } from "react-bootstrap"
import Carousel from 'react-bootstrap/Carousel';
import storeImg from "../../assets/images/store-img.jpg"
import { Link } from "react-router-dom";
import { urlStore } from '../../untils/variable';
import useCallApiStores from '../../hooks/useCallApiStores';

const StoreList = () => {
    const {data, isLoading} = useCallApiStores(urlStore);

  
    // check api call xong chua
    if(isLoading == true) return <p>Loading...</p>
    
    
    // check cua hang co ton tai khong
    if (data.length == 0) return <p>không tồn tại cửa hàng</p>

  return (

    <div className="store-list">
        <Container>
        <Row>
            {/* store list side bar */}
            <Col xs={12} sm={3} md={3} className="store-list-side-bar">
            <ul className="menu-main">
                <li className="city-choice">
                <h1>Thành phố</h1>
                <select className="filer-city">
                    <option value="Hà Nội">Hà Nội</option>
                    <option value="TP Hồ Chí Minh">TP Hồ Chí Minh</option>
                </select>
                </li>
                <li className="district-choice">
                <h1>Quận/Huyện</h1>
                <select className="filer-district">
                    <option value="Hà Nội">Hà Nội</option>
                    <option value="TP Hồ Chí Minh">TP Hồ Chí Minh</option>
                </select>
                </li>
            </ul>
            </Col>

            {/* right store list */}
            <Col xs={12} sm={9} md={9} className="right-store-list">
            <Container>
                <Row>

                {data.map((store) => {

                    return(
                    // store card
                    <Col xs={6} sm={6} md={6} className="store-card" key={store.id}>
                    {/* slide img store */}
                    <Link to='/store-details'>
                        <Carousel className="slide-img-store" interval='3000'>
                            <Carousel.Item className="item">
                                    <img src={store.image1} alt="store img" />
                            </Carousel.Item>
                            <Carousel.Item className="item">
                                    <img src={store.image2} alt="store img" />
                            </Carousel.Item>
                            <Carousel.Item className="item">
                                    <img src={store.image3} alt="store img" />
                            </Carousel.Item>
                            <Carousel.Item className="item">
                                    <img src={store.image4} alt="store img" />
                            </Carousel.Item>
                            <Carousel.Item className="item">
                                    <img src={store.image5} alt="store img" />
                            </Carousel.Item>
                        </Carousel>
                    </Link>


                    {/* store name */}
                    <h1 className="store-name">
                        {store.name}
                    </h1>
                    {/* store address */}
                    <p className="store-address">
                        {store.address}
                    </p>
                    {/* view map */}
                    <a
                    className="view-map"
                    href={store.linkViewMap}
                    target="_blank"
                    >
                    <p>Xem bản đồ</p>
                    </a>
                    </Col>
                    )


                })}






                </Row>
            </Container>
            </Col>
        </Row>
        </Container>
    </div>
    
  )
}

export default StoreList