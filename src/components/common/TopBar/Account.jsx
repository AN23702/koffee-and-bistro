import { useState } from 'react';
import { Button, Offcanvas, Form } from 'react-bootstrap';
import signUpImg from "../../../assets/images/sign-up-img.png"


const Account = ({name, ...props}) => {

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

  return (
    <>
      <Button variant="primary" onClick={handleShow} className="me-2 account">
        <i className="fa-solid fa-user"></i>
        <p>Tài khoản</p>
      </Button>

      <Offcanvas show={show} onHide={handleClose} {...props}>
        <Offcanvas.Header closeButton>
            <img src={signUpImg} alt='sign up img'></img>
        </Offcanvas.Header>
        <Offcanvas.Body>
          <p>Chào mừng bạn đến với</p>
          <h1>Koffee and bistro</h1>

          <Form>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Control type="email" placeholder="Tài khoản" />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Control type="password" placeholder="Mật khẩu" />
            </Form.Group>

            <Button variant="primary" type="submit" className='log-in'>
              Đăng nhập
            </Button>

            <Button variant="primary" type="submit" className='sign-up'>
              Đăng ký
            </Button>

            <Button variant="primary" type="submit" className='forgot-password'>
              Quên mật khẩu
            </Button>

          </Form>

        </Offcanvas.Body>
      </Offcanvas>
    </>
  )
}

export default Account