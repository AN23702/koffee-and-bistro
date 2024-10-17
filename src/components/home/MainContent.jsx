import newProduct from "../../assets/images/new-product.png";
import { Container, Row, Col } from 'react-bootstrap';
import { url} from '../../untils/variable';
import useCallApiProducts from '../../hooks/useCallApiProducts';
import NewStore from './maincontent/NewStore';


const MainContent = () => {

const {data, isLoading} = useCallApiProducts(url);

  
// check api call xong chua
if(isLoading == true) return <p>Loading...</p>


// check san pham co ton tai khong
if (data.length == 0) return <p>không tồn tại sản phẩm</p>




  return (

    <div className="main-content">

        {/* New product */}
        <div className="new-product">
            <Container>
                <Row>

                    {/* img new product */}
                    <Col xs={12} sm={6} md={6}>
                        <img src={newProduct} alt="new product" />
                    </Col>

                    {/* new product card */}
                    <Col xs={12} sm={6} md={6}>
                        <div className="new-product-card">
                            <Container>
                                <Row>

                                {data.filter(product => product.status === 'new').map((product) =>{


                                    return(
                                        // product card
                                        <Col xs={6} sm={6} md={6} className="product-card" key={product.id}>
                                            <div className="product-img">
                                                <img
                                                    src={product.image}
                                                    alt={product.name}
                                                />
                                            </div>

                                            <div className="product-detail">
                                                <h3 className="name-product">{product.name}</h3>
                                                <p className="price-product">{product.price}đ</p>
                                            </div>

                                            <div className="label-new-product">
                                                <i className="fa-solid fa-comment icon-label">
                                                    <p>NEW</p>
                                                </i>
                                            </div>
                                        </Col>
                                    )
                                })}

                                </Row>
                            </Container>
                        </div>
                    </Col>

                </Row>
            </Container>
        </div>

        {/* Best seller */}
        <div className="best-seller">
            <Container>
                {/* best seller title  */}
                <Row>
                    <Col xs={12} sm={12} md={12} className="text-center">
                        <h3 className="animate-charcter">BEST SELLER</h3>
                    </Col>
                </Row>

                {/* best seller product */}
                <Row>
                {data.filter(product => product.sell === 'best seller').map((product) =>{

                    return(
                        <Col xs={6} sm={3} md={3} key={product.id}>
                        {/* product card */}
                        <div className="product-card">
                            <div className="product-img">
                                <img src={product.image} alt={product.name} />
                            </div>

                            <div className="product-detail">
                                <h3 className="name-product">{product.name}</h3>
                                <p className="price-product">{product.price}đ</p>
                            </div>

                            <div className="label-best-seller">
                                <i className="fa-solid fa-comment icon-label">
                                <p>BEST SELLER</p>
                                </i>
                            </div>

                        </div>
                    </Col>
                    )
                })}


            
                </Row>
            </Container>
        </div>

        {/* New store */}
        <NewStore/>



    </div>
  )
}

export default MainContent