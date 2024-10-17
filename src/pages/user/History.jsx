import React from 'react'
import BackToTopBar from '../../components/common/BackToTopBar'
import MiniGame from '../../components/common/MiniGame'
import Messenger from '../../components/common/Messenger'
import historyImg from "../../assets/images/history-img.jpg"
import serviceImg from "../../assets/images/service-img.jpg"
import jobImg from "../../assets/images/job-img.jpg"
import { Col, Container, Row } from 'react-bootstrap'
import { Link } from 'react-router-dom'

const History = () => {
  return (
    <>
    {/* banner */}
    <div className='banner-hsj'>
        <img src={historyImg} alt="qq" />
    </div>

    {/* history content */}
    <Container className='hsj-content-box'>
        <Row>
            <Col xs={12} sm={8} md={8} className='hsj-content'>
                <h1>NGUỒN GỐC</h1>
                <p>CÂU CHUYỆN NÀY LÀ CỦA CHÚNG MÌNH</p>
                <p>Highlands Coffee® được thành lập vào năm 1999, bắt nguồn từ tình yêu dành cho đất Việt cùng với cà phê và cộng đồng nơi đây. Tinh thần cộng đồng luôn chảy trong ADN của mỗi người Việt mình. Ngay từ những ngày đầu tiên, mục tiêu của chúng mình là có thể phục vụ và góp phần phát triển cộng đồng bằng cách siết chặt thêm sự kết nối và sự gắn bó giữa người với người. Ngày hôm nay, với hàng trăm cửa hàng trên khắp Việt Nam và trên Thế Giới, thứ chúng mình đem lại không chỉ dừng lại ở cà phê. Chúng mình còn là nơi để thuộc về, là nơi để kết nối tất cả mọi người với nhau. Từ đó, Highlands Coffee® trở thành nơi dành riêng cho cộng đồng.</p>
                <p>Trong tương lai, chúng mình sẽ luôn thấy một Việt Nam đang phát triển và một Highlands Coffee® không ngừng cải tiến. Highlands Coffee® - điểm tụ họp của cộng đồng, nơi mọi người có thể kết nối và gắn kết với nhau bằng tình yêu dành cho cà phê, trà và các món ăn ngon. Tại Highlands Coffee®, chúng mình luôn sát cánh cùng bạn, chúng mình luôn ủng hộ bạn và chúng mình luôn đồng hành với nhau như một cộng đồng.</p>
            </Col>

            <Col xs={12} sm={4} md={4} className='hsj-content-right'>
                <Link to='/service' className='link-img'>
                    <img src={serviceImg} alt="serviceImg" />
                    <h1>DỊCH VỤ</h1>
                </Link>
                <Link to='/job' className='link-img'>
                    <img src={jobImg} alt="jobImg" />
                    <h1>NGHỀ NGHIỆP</h1>
                </Link>
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

export default History