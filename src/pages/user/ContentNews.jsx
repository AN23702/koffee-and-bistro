import React from 'react'
import BackToTopBar from '../../components/common/BackToTopBar'
import MiniGame from '../../components/common/MiniGame'
import Messenger from '../../components/common/Messenger'
import imgNewsCard from '../../assets/images/470_crop_THUMBNAILS.jpg'
import { Col, Container, Row } from 'react-bootstrap'

const ContentNews = () => {
  return (
    <>

    {/* Banner */}
    <div className='banner-news'>
        <img src={imgNewsCard} alt='oo'></img>
    </div>

    {/* Content news */}
    <Container className='content-news'>
        <Row>
            <Col xs={12} sm={12} md={12} className='content-news-title'>
                <h1>
                THE COFFEE HOUSE PHẢN HỒI VỀ SỰ CỐ VỠ KÍNH DO GIÔNG LỐC TẠI CỬA HÀNG THE COFFEE HOUSE THÁI HÀ, HÀ NỘI
                </h1>
            </Col>

            <Col xs={12} sm={12} md={12} className='content-news-article'>
                <b>
                Vào tối ngày 20 tháng 04 năm 2024, Hà Nội có xuất hiện giông lốc kèm mưa đá, gây vỡ kính tại toà nhà Việt Tower - 01 Thái Hà, nơi The Coffee House (TCH) thuê mở địa điểm kinh doanh. Sự cố thiên tai này đã khiến một số khách hàng và nhân viên bị thương ở các mức độ khác nhau. Ngay khi sự cố xảy ra, TCH đã ngay lập tức đưa người bị thương vào viện chữa trị. Đồng thời tích cực phối hợp với các cơ quan chức năng & BQL tòa nhà Việt Tower (bên cho thuê và vận hành tòa nhà) xác định thiệt hại và đề xuất phương án hỗ trợ.
                </b>

                <p>Cụ thể, ngay tại thời điểm diễn ra sự cố (20.04), nhân viên trong ca tối tại TCH Thái Hà lập tức sơ tán khẩn cấp khách hàng vào kho để trú ẩn. Sau đó, đại diện cửa hàng đã đưa toàn bộ 04 nhân viên cùng 03 khách hàng bị thương vào bệnh viện và chi trả trước toàn bộ viện phí phát sinh trong đợt đầu. Cửa hàng tạm ngừng hoạt động vào lúc 21h00 cùng ngày. Chúng tôi cũng đã kịp thời thông báo với BQL tòa nhà Việt Tower, đồng thời trình báo cơ quan công an, hỗ trợ khám nghiệm hiện trường. Ngày 21.04, toàn bộ nhân viên và ⅔ khách hàng đã được xuất viện. Các nhân viên cửa hàng đã hành động nhanh, khẩn trương và kịp thời để giảm thiểu thiệt hại đến mức thấp nhất. </p>
            </Col>
        </Row>
    </Container>

    {/* Back to top bar */}
    <BackToTopBar/>

    {/* mini game */}
    <MiniGame placement="bottom" name="MiniGame"/>

    {/* Messenger */}
    <Messenger/>
    </>
  )
}

export default ContentNews