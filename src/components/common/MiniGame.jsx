import { useState } from 'react';
import { Button, Offcanvas} from 'react-bootstrap';
import chestGif from "../../assets/images/Chest.webp"
import chestImg from "../../assets/images/Chest-img.png"

const MiniGame = ({ name, ...props }) => {

  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [activeIndex, setActiveIndex] = useState(null);

  const handleClick = (index) => {
    setActiveIndex(index);
  };

  return (

    <>
    <Button variant="primary" onClick={handleShow} className="me-2 mini-game">
      <i className="fa-solid fa-gamepad" />
    </Button>

    <Offcanvas show={show} onHide={handleClose} {...props} className='mini-game-content'>
      <Offcanvas.Header closeButton>
        <Offcanvas.Title>Mini Game Nhận Voucher</Offcanvas.Title>
      </Offcanvas.Header>

      <Offcanvas.Body>

        {Array(8).fill(0).map((_, index) => (

          <div
            key={index}
            className={`chest ${index === activeIndex ? 'active' : ''}`}
            onClick={() => handleClick(index)}>

            <img src={chestImg} alt="chest img" className='chest-img'/>
            <img src={chestGif} alt="chest gif" className='chest-gif'/>
          </div>

        ))}

      </Offcanvas.Body>
    </Offcanvas>
    </>
  )
}

export default MiniGame