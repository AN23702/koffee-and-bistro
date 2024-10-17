import { Col, Container, Row } from "react-bootstrap"
import Messenger from "../../components/common/Messenger"
import { Link } from "react-router-dom"


const NotFound = () => {
  return (
    <>
    <Container>
        <Row>
            <Col xs={12} sm={12} md={12}>
                <h1 style={{textAlign:"center",fontSize:"20px", marginTop:"24px", fontWeight:"600"}}>Xin lỗi! Trang này không tồn tại hoặc bị xóa</h1>

                <p style={{textAlign:"center",fontSize:"16px", marginBottom:"24px"}}>
                    <i class="fa-regular fa-hand-point-left"></i>
                    <Link to={"/"} style={{color:"#000", fontWeight:"500", marginLeft:"8px", textDecoration:"none"}}>Quay lại trang chủ</Link>
                </p>
            </Col>
        </Row>
    </Container>
    </>
  )
}

export default NotFound