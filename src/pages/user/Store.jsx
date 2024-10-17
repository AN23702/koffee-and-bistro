import React from 'react'
import BackToTopBar from '../../components/common/BackToTopBar'
import MiniGame from '../../components/common/MiniGame'
import Messenger from '../../components/common/Messenger'
import StoreList from '../../components/store/StoreList'
import { Col, Container, Row } from 'react-bootstrap'

const Store = () => {
  return (
    <>

    {/* store title  */}
    <div className="background-img">
        <div className="fix-background-img background-img-store" />
        <Container>
        <Row>
            <Col xs={12} sm={12} md={12} className="store-title">
                <h3 class="animate-charcter">HỆ THỐNG CỬA HÀNG</h3>
            </Col>
        </Row>
        </Container>
    </div>

    {/* store list */}
    <StoreList/>

    {/* Back to top bar */}
    <BackToTopBar/>

    {/* mini game */}
    <MiniGame placement="bottom" name="MiniGame"/>

    {/* Messenger */}
    <Messenger/>
    </>
  )
}

export default Store