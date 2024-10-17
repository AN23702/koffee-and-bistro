import { Col, Container, Row } from "react-bootstrap"
import Account from "./TopBar/Account"
import Cart from "./TopBar/Cart"

const TopBar = () => {
  return (
    <div className="top-bar" id="top-bar">
      <Container>
        <Row>
          <Col xs={12} sm={12} md={12} className="fix-display-top-bar">
            {/* Hot line */}
            <div className="hot-line">
              <i className="fa-solid fa-phone" />
              <p>123456789</p>
            </div>
            <div className="account-and-cart">

              {/* account */}
              <Account placement="top" name="Account"/>
              
              {/* cart */}
              <Cart placement="end" name="Cart"/>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  )
}

export default TopBar