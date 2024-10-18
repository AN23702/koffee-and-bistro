import { Container, Row, Col } from "react-bootstrap"
import { Link } from "react-router-dom"

const Footer = () => {
  return (
    <div className="footer">
      <Container>
        <Row>
          <Col xs={12} sm={3} md={3} className="footer-col">
            <h3 className="footer-title">Giới thiệu</h3>
            <ul className="footer-linkslist">
              <li>
                <Link to="/about-us">Về chúng tôi</Link>
              </li>
              <li>
                <Link to="/product">Sản phẩm</Link>
              </li>
              <li>
                <a href="##">Khuyến mãi</a>
              </li>
              <li>
                <Link to="/store">Cửa hàng</Link>
              </li>
              <li>
                <Link to="/job">Tuyển dụng</Link>
              </li>
            </ul>
          </Col>

          <Col xs={12} sm={3} md={3} className="footer-col">
            <h3 className="footer-title">Điều khoản</h3>
            <ul className="footer-linkslist">
              <li>
                <a href="##">Điều khoản sử dụng</a>
              </li>
              <li>
                <a href="##">Chính sách bảo mật thông tin</a>
              </li>
              <li>
                <a href="##">Hướng dẫn xuất đơn giá trị gia tăng</a>
              </li>
            </ul>
          </Col>

          <Col xs={12} sm={3} md={3} className="footer-col">
            <h3 className="footer-title">
              <i className="fa-solid fa-phone" />
              Đặt hàng: 123456789
            </h3>
            <h3 className="footer-title">
              <i className="fa-solid fa-location-dot" />
              Liên hệ
            </h3>
            <ul className="footer-linkslist">
              <li>
                <a href="##">
                  Tầng 3-4 Hub Building 195/10E Điện Biên Phủ, P.15, Q.Bình Thạnh,
                  TP.Hồ Chí Minh
                </a>
              </li>
            </ul>
          </Col>

          <Col xs={12} sm={3} md={3} className="footer-col">
            <h3 className="footer-title">
              <i className="fa-brands fa-square-facebook" />
              FACEBOOK
            </h3>
            <h3 className="footer-title">
              <i className="fa-brands fa-instagram" />
              INSTAGRAM
            </h3>
          </Col>
        </Row>

        <Row>
          <hr />
        </Row>

        <Row>
          <div xs={12} sm={12} md={12} className="footer-col">
            <ul className="footer-linkslist fix-margin-footer-linkslist">
              <li>Công ty cổ phần thương mại dịch vụ Trà Cà Phê VN</li>
              <li>
                Mã số DN: 0312867172 do sở kế hoạch và đầu tư tp. HCM cấp ngày
                23/07/2014. Người đại diện: NGÔ NGUYÊN KHA
              </li>
              <li>
                Địa chỉ: 86-88 Cao Thắng, phường 04, quận 3, tp Hồ Chí Minh Điện
                thoại: (028) 7107 8079 Email: hi@thecoffeehouse.vn
              </li>
              <li>
                © 2014-2022 Công ty cổ phần thương mại dịch vụ Trà Cà Phê VN mọi
                quyền bảo lưu
              </li>
            </ul>
          </div>
        </Row>
      </Container>
  </div>
  )
}

export default Footer