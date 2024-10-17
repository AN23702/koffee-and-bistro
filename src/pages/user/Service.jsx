import React from 'react'
import BackToTopBar from '../../components/common/BackToTopBar'
import MiniGame from '../../components/common/MiniGame'
import Messenger from '../../components/common/Messenger'
import historyImg from "../../assets/images/history-img.jpg"
import serviceImg from "../../assets/images/service-img.jpg"
import jobImg from "../../assets/images/job-img.jpg"
import { Col, Container, Row } from 'react-bootstrap'
import { Link } from 'react-router-dom'

const Service = () => {
  return (
    <>
    {/* banner */}
    <div className='banner-hsj'>
        <img src={serviceImg} alt="qq" />
    </div>

    {/* history content */}
    <Container className='hsj-content-box'>
        <Row>
            <Col xs={12} sm={8} md={8} className='hsj-content'>
                <h1>DỊCH VỤ</h1>
                <p>DỊCH VỤ NÀY LÀ CỦA CHÚNG MÌNH</p>
                <p>Highlands Coffee® là không gian của chúng mình nên mọi thứ ở đây đều vì sự thoải mái của chúng mình.

Đừng giữ trong lòng, hãy chia sẻ với chúng mình điều bạn mong muốn để cùng nhau giúp Highlands Coffee® của chúng mình trở nên tuyệt vời hơn.</p>
                <p>Đừng ngại chia sẻ ý kiến của bạn tại:Facebook: https://www.facebook.com/highlandscoffeevietnam/</p>
                <p>Hoặc bạn có thể gửi email cho chúng mình đến địa chỉ: customerservice@highlandscoffee.com.vn, chúng mình sẽ phản hồi trong thời gian sớm nhất có thể.</p>
            </Col>

            <Col xs={12} sm={4} md={4} className='hsj-content-right'>
                <Link to='/history' className='link-img'>
                    <img src={historyImg} alt="historyImg" />
                    <h1>NGUỒN GỐC</h1>
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

export default Service