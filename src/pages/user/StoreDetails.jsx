import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import imgStore from '../../assets/images/store-img.jpg'


const StoreDetails = () => {
  return (
<>
  {/* Store details */}
  <div className="store-details">
    <Container>
      <Row>
        {/* img store */}
        <Col xs={12} sm={6} md={6} className="img-store">
          <img src={imgStore} alt="q" />
          <img src={imgStore} alt="q" />
          <img src={imgStore} alt="q" />
          <img src={imgStore} alt="q" />
          <img src={imgStore} alt="q" />
        </Col>
        {/* store details right */}
        <Col xs={12} sm={6} md={6} className="store-details-right">
          <div className="store-details-right">
            {/* store name */}
            <h1 className="store-name">HCM SIGNATURE by The Coffee House</h1>
            {/* store introduce*/}
            <p className="store-introduce">
              Nhà tin rằng “cuộc hẹn cà phê” luôn có cho mình những tiêu chuẩn,
              phiên bản khác nhau, chúng luôn biến hoá mỗi ngày. Và SIGNATURE by
              The Coffee House là nơi bạn tìm thấy phiên bản đặc biệt của Cuộc
              hẹn tròn đầy giữa những ngày hối hả.Hôm nay bạn có hẹn chưa? Mình
              cà phê nhé!
            </p>
            {/* store address */}
            <h3>Địa chỉ</h3>
            <p className="store-address">
              TTTM Crescent Mall, 101 Tôn Dật Tiên, Phường Tân Phú, Quận 7,
              Thành phố Hồ Chí Minh
            </p>
            {/* view map */}
            <a
              className="view-map"
              href="https://www.google.com/maps/place/Highland+coffee+Hateco+Apollo/@21.0489384,105.7144403,14z/data=!4m6!3m5!1s0x313455b4c168a9c1:0x964df2f86b22833!8m2!3d21.0489404!4d105.7350475!16s%2Fg%2F11sc95yxh9?entry=ttu&g_ep=EgoyMDI0MDkwNC4wIKXMDSoASAFQAw%3D%3D"
              target="_blank"
            >
              <p>Xem bản đồ</p>
            </a>
          </div>
        </Col>
      </Row>
    </Container>
  </div>
</>

  )
}

export default StoreDetails