import { Col, Container, Row } from "react-bootstrap"
import BackToTopBar from "../../components/common/BackToTopBar"
import Messenger from "../../components/common/Messenger"
import MiniGame from "../../components/common/MiniGame"

import historyImg from "../../assets/images/history-img.jpg"
import serviceImg from "../../assets/images/service-img.jpg"
import jobImg from "../../assets/images/job-img.jpg"
import { Link } from "react-router-dom"

const AboutUs = () => {
  return (
    <>

    {/* about us title */}
    <div className="background-img">
        <div className="fix-background-img background-img-about-us" />
        <Container>

        <Row>
            <Col xs={12} sm={12} md={12} className="about-us-title">
                <h3 className="animate-charcter">Về chúng tôi</h3>
            </Col>
        </Row>
        </Container>
    </div>

    {/* about us */}
    <div className="about-us">
        {/* history */}
        <div className="history">
        {/* history content */}
        <div className="history-content">
            <h1>Nguồn gốc</h1>
            <p>
            Koffee and bistro được thành lập vào năm 1999, bắt nguồn từ tình yêu
            dành cho đất Việt cùng với cà phê và cộng đồng nơi đây. Ngay từ những
            ngày đầu tiên, mục tiêu của chúng mình là có thể phục vụ và góp phần
            phát triển cộng đồng bằng cách siết chặt thêm sự kết nối và sự gắn bó
            giữa người với người.
            </p>

            <div className="link-button">
                <Link to='/history' className="link-to-history">Xem chi tiết</Link>
            </div>

        </div>
        {/* history img */}
        <div className="history-img">
            <img src={historyImg} alt="p" />
            <div className="fix-history-img" />
        </div>
        </div>

        {/* service */}
        <div className="service">
        {/* service img */}
        <div className="service-img">
            <img src={serviceImg} alt="q" />
            <div className="fix-service-img" />
        </div>
        {/* service content */}
        <div className="service-content">
            <h1>Dịch vụ</h1>
            <p>
            Koffee and bistro là không gian của chúng mình nên mọi thứ ở đây đều
            vì sự thoải mái của chúng mình. Đừng giữ trong lòng, hãy chia sẻ với
            chúng mình điều bạn mong muốn để cùng nhau giúp Koffee and bistro trở
            nên tuyệt vời hơn.
            </p>

            <div className="link-button">
                <Link to='/service' className="link-to-service">Xem chi tiết</Link>
            </div>
        </div>
        </div>

        {/* job */}
        <div className="job">
        {/* job content */}
        <div className="job-content">
            <h1>Nghề nghiệp</h1>
            <p>
            Là điểm hội tụ của cộng đồng, Koffee and bistro luôn tìm kiếm những
            thành viên mới với mong muốn không ngừng hoàn thiện một không gian
            dành cho tất cả mọi người. Chúng mình luôn chào đón bạn trở thành một
            phần của Koffee and bistro để cùng nhau siết chặt thêm những kết nối
            và sự gắn bó giữa người với người.
            </p>

            <div className="link-button">
                <Link to='/job' className="link-to-job">Xem chi tiết</Link>
            </div>
        </div>
        {/* job img */}
        <div className="job-img">
            <img src={jobImg} alt="a" />
            <div className="fix-job-img" />
        </div>
        </div>
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

export default AboutUs