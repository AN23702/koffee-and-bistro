import Carousel from 'react-bootstrap/Carousel';
import banner1 from "../../assets/images/banner1.webp"
import banner2 from "../../assets/images/banner2.webp"
import banner3 from "../../assets/images/banner3.webp"

const Banner = () => {

  return (
    <Carousel className='banner' interval="5000">

      <Carousel.Item>
        <img src={banner1} alt="banner1"></img>
      </Carousel.Item>

      <Carousel.Item>
        <img src={banner2} alt="banner2"></img>
      </Carousel.Item>

      <Carousel.Item>
        <img src={banner3} alt="banner3"></img>
      </Carousel.Item>

    </Carousel>

  )
}

export default Banner