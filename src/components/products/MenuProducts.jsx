import { Col, Container, Row } from "react-bootstrap"
import { Link } from "react-router-dom"
import useCallApiProducts from "../../hooks/useCallApiProducts";
import { url } from "../../untils/variable";


const MenuProducts = () => {

const {data, isLoading} = useCallApiProducts(url);

  
// check api call xong chua
if(isLoading == true) return <p>Loading...</p>


// check san pham co ton tai khong
if (data.length == 0) return <p>không tồn tại sản phẩm</p>

  return (
<>
  {/* Menu products*/}
  <div className="menu-products">
    <Container>
      <Row>

        {/* Menu side bar */}
        <Col xs={12} sm={2} md={2} className="menu-side-bar">
          <ul className="menu-main">
            <li className="active" id="allColorActive">
              <a>Tất cả</a>
            </li>
            <li className="coffee-color-active">
              <a>Cà phê</a>
            </li>
            <li className="tea-color-active">
              <a>Trà</a>
            </li>
            <li className="freeze-color-active">
              <a>Freeze</a>
            </li>
            <li className="phindi-color-active">
              <a>Phindi</a>
            </li>
            <li className="espresso-color-active">
              <a>Espresso</a>
            </li>
            <li className="cake-color-active">
              <a>Bánh</a>
            </li>
          </ul>
        </Col>

        {/* right-menu-products */}
        <Col xs={12} sm={10} md={10} className="right-menu-products">
          {/* Block menu item */}
          <div className="block-menu-item">
            {/* block menu item title */}
            <h3 className="block-menu-item-title">Cà phê</h3>
            {/* Menu list collection */}
            <div className="menu-list-collection">
              <Container>
                <Row>
                {data.filter(product => product.class === 'coffee').map((product) =>{
                  return(
                    <Col xs={6} sm={3} md={3} className="product-card" key={product.id}>

                    <Link to={`/product-details/${product.id}` } className="product-img">
                      <img
                        src={product.image}
                        alt={product.name}
                      />
                    </Link>
                    <div className="product-detail">
                      <h3 className="name-product">{product.name}</h3>
                      <p className="price-product">{product.price}đ</p>
                    </div>
                    {/* <div className="label-new-product">
                      <i className="fa-solid fa-comment icon-label">
                        <p>NEW</p>
                      </i>
                    </div> */}

                  </Col>
                  )
                })}



                </Row>
              </Container>
            </div>
          </div>

          {/* Block menu item */}
          <div className="block-menu-item">
            {/* block menu item title */}
            <h3 className="block-menu-item-title">Trà</h3>
            {/* Menu list collection */}
            <div className="menu-list-collection">
              <Container>

              <Row>
                {data.filter(product => product.class === 'tea').map((product) =>{
                  return(
                    <Col xs={6} sm={3} md={3} className="product-card" key={product.id}>

                    <Link to={`/product-details/${product.id}` } className="product-img">
                      <img
                        src={product.image}
                        alt={product.name}
                      />
                    </Link>
                    <div className="product-detail">
                      <h3 className="name-product">{product.name}</h3>
                      <p className="price-product">{product.price}đ</p>
                    </div>
                    {/* <div className="label-new-product">
                      <i className="fa-solid fa-comment icon-label">
                        <p>NEW</p>
                      </i>
                    </div> */}

                  </Col>
                  )
                })}



                </Row>

              </Container>
            </div>
          </div>

          {/* Block menu item */}
          <div className="block-menu-item">
            {/* block menu item title */}
            <h3 className="block-menu-item-title">Freeze</h3>
            {/* Menu list collection */}
            <div className="menu-list-collection">
              <Container>
                <Row>
                {data.filter(product => product.class === 'freeze').map((product) =>{
                  return(
                    <Col xs={6} sm={3} md={3} className="product-card" key={product.id}>

                    <Link to={`/product-details/${product.id}` } className="product-img">
                      <img
                        src={product.image}
                        alt={product.name}
                      />
                    </Link>
                    <div className="product-detail">
                      <h3 className="name-product">{product.name}</h3>
                      <p className="price-product">{product.price}đ</p>
                    </div>
                    {/* <div className="label-new-product">
                      <i className="fa-solid fa-comment icon-label">
                        <p>NEW</p>
                      </i>
                    </div> */}

                  </Col>
                  )
                })}



                </Row>
              </Container>
            </div>
          </div>

          {/* Block menu item */}
          <div className="block-menu-item">
            {/* block menu item title */}
            <h3 className="block-menu-item-title">Phindi</h3>
            {/* Menu list collection */}
            <div className="menu-list-collection">
              <Container>
              <Row>
                {data.filter(product => product.class === 'phindi').map((product) =>{
                  return(
                    <Col xs={6} sm={3} md={3} className="product-card" key={product.id}>

                    <Link to={`/product-details/${product.id}` } className="product-img">
                      <img
                        src={product.image}
                        alt={product.name}
                      />
                    </Link>
                    <div className="product-detail">
                      <h3 className="name-product">{product.name}</h3>
                      <p className="price-product">{product.price}đ</p>
                    </div>
                    {/* <div className="label-new-product">
                      <i className="fa-solid fa-comment icon-label">
                        <p>NEW</p>
                      </i>
                    </div> */}

                  </Col>
                  )
                })}



                </Row>
              </Container>
            </div>
          </div>

          {/* Block menu item */}
          <div className="block-menu-item">
            {/* block menu item title */}
            <h3 className="block-menu-item-title">Espresso</h3>
            {/* Menu list collection */}
            <div className="menu-list-collection">
              <Container>
              <Row>
                {data.filter(product => product.class === 'espresso').map((product) =>{
                  return(
                    <Col xs={6} sm={3} md={3} className="product-card" key={product.id}>

                    <Link to={`/product-details/${product.id}` } className="product-img">
                      <img
                        src={product.image}
                        alt={product.name}
                      />
                    </Link>
                    <div className="product-detail">
                      <h3 className="name-product">{product.name}</h3>
                      <p className="price-product">{product.price}đ</p>
                    </div>
                    {/* <div className="label-new-product">
                      <i className="fa-solid fa-comment icon-label">
                        <p>NEW</p>
                      </i>
                    </div> */}

                  </Col>
                  )
                })}



                </Row>
              </Container>
            </div>
          </div>

          {/* Block menu item */}
          <div className="block-menu-item">
            {/* block menu item title */}
            <h3 className="block-menu-item-title">Bánh</h3>
            {/* Menu list collection */}
            <div className="menu-list-collection">
              <Container>
              <Row>
                {data.filter(product => product.class === 'cake').map((product) =>{
                  return(
                    <Col xs={6} sm={3} md={3} className="product-card" key={product.id}>

                    <Link to={`/product-details/${product.id}` } className="product-img">
                      <img
                        src={product.image}
                        alt={product.name}
                      />
                    </Link>
                    <div className="product-detail">
                      <h3 className="name-product">{product.name}</h3>
                      <p className="price-product">{product.price}đ</p>
                    </div>
                    {/* <div className="label-new-product">
                      <i className="fa-solid fa-comment icon-label">
                        <p>NEW</p>
                      </i>
                    </div> */}

                  </Col>
                  )
                })}



                </Row>
              </Container>
            </div>
          </div>
        </Col>
      </Row>
    </Container>
  </div>
</>

  )
}

export default MenuProducts