import React from 'react'
import BackToTopBar from '../../components/common/BackToTopBar'
import MiniGame from '../../components/common/MiniGame'
import Messenger from '../../components/common/Messenger'
import historyImg from "../../assets/images/history-img.jpg"
import serviceImg from "../../assets/images/service-img.jpg"
import jobImg from "../../assets/images/job-img.jpg"
import { Col, Container, Row } from 'react-bootstrap'
import { Link } from 'react-router-dom'

const Job = () => {
  return (
    <>
    {/* banner */}
    <div className='banner-hsj'>
        <img src={jobImg} alt="job img" />
    </div>

    {/* history content */}
    <Container className='hsj-content-box'>
        <Row>
            <Col xs={12} sm={8} md={8} className='hsj-content'>
                <h1>NGHỀ NGHIỆP</h1>
                <p>CƠ HỘI NÀY LÀ CỦA CHÚNG MÌNH</p>
                <p>Chúng mình biết rằng để thành công, bạn muốn làm việc với những đồng nghiệp tuyệt vời, tận hưởng những khoảng thời gian đẹp nhất, hiệu quả nhất, thể hiện được tài năng, đam mê của mình và được là chính mình nhất. Tại cộng đồng Highlands của chúng mình, bạn sẽ được truyền cảm hứng từ các cơ hội việc làm chúng mình có và trở thành phiên bản tốt nhất của chính bản thân trong cộng đồng của chúng mình.</p>
                <p>Chúng mình hoàn toàn tin tưởng rằng nhiệm vụ của Highlands là trao quyền cho bạn, hỗ trợ bạn trong quá trình bạn tỏa sáng, tạo kiện tốt nhất để bạn nâng cấp kỹ năng vốn có của bạn cũng như khai phá những tố chất tiềm ẩn để bạn chạm đến PHIÊN BẢN TỐT NHẤT của bản thân. Cho dù bạn mới bắt đầu sự nghiệp hay đang là một chuyên gia có thật nhiều kinh nghiệm, tương lai của bạn đều có thể bắt đầu từ đây để hoàn thiện chính mình trong hành trình chinh phục những thử thách đầy hoài bão.</p>
                <p>Bạn đã sẵn sàng để nắm lấy cơ hội kiến tạo sự nghiệp cùng chúng mình để góp sức dựng xây một Highlands Coffee® Là Của Chúng Mình?</p>
                <p>HÃY CÙNG CHÚNG MÌNH KHÁM PHÁ NHÉ:</p>
            </Col>

            <Col xs={12} sm={4} md={4} className='hsj-content-right'>
                <Link to='/history' className='link-img'>
                    <img src={historyImg} alt="historyImg" />
                    <h1>NGUỒN GỐC</h1>
                </Link>
                <Link to='/service' className='link-img'>
                    <img src={serviceImg} alt="serviceImg" />
                    <h1>DỊCH VỤ</h1>
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

export default Job