import { Carousel, Col, Container, Row } from 'react-bootstrap'
import { urlStore } from '../../../untils/variable';
import useCallApiStores from '../../../hooks/useCallApiStores';


const NewStore = () => {
    const {data, isLoading} = useCallApiStores(urlStore);

  
    // check api call xong chua
    if(isLoading == true) return <p>Loading...</p>
    
    
    // check cua hang co ton tai khong
    if (data.length == 0) return <p>không tồn tại cửa hàng</p>

  return (
    <Container className='container-new-store-slide'>
        <Row>
            <Col xs={12} sm={12} md={12}>
                <Carousel className='new-store-slide' interval={null}>

                {data.filter(store => store.status === 'new').map((store) =>{

                    return(                
                    
                    <Carousel.Item className='new-store-card' key={store.id}>
                        {/* store-content */}
                        <div className="store-content">

                            <h1 className="name-store">
                                {store.name}
                            </h1>

                            <p className="store-detail">
                                {store.summary}
                            </p>

                            <button>Tìm hiểu thêm</button>

                        </div>

                        {/* img new store slide */}
                        <Carousel className='img-new-store-slide' fade interval="3000">

                            <Carousel.Item>
                                <img src={store.image1} alt='store img'></img>
                            </Carousel.Item>
                            <Carousel.Item>
                                <img src={store.image2} alt='store img'></img>
                            </Carousel.Item>
                            <Carousel.Item>
                                <img src={store.image3} alt='store img'></img>
                            </Carousel.Item>
                            <Carousel.Item>
                                <img src={store.image4} alt='store img'></img>
                            </Carousel.Item>
                            <Carousel.Item>
                                <img src={store.image5} alt='store img'></img>
                            </Carousel.Item>

                        </Carousel>


            
                </Carousel.Item>)

                })}



                </Carousel>
            </Col>
        </Row>

        {/* new store label */}
        <div className="label-new-store">
            <i className="fa-solid fa-comment icon-label">
                <p>NEW STORE</p>
            </i>
        </div>
</Container>
  )
}

export default NewStore


