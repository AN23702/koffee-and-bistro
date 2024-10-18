import { Col, Container, Nav, Row } from "react-bootstrap"
import { Link } from "react-router-dom"
import useCallApiProducts from "../../hooks/useCallApiProducts";
import { url } from "../../untils/variable";



const MenuProducts = () => {

  // const menuMain = document.querySelector(".menu-main")

  // window.addEventListener('scroll', () => {
  // if (window.scrollY > 0) {
  //     menuMain.classList.add('scroll-menu-main');
  // } else {
  //     menuMain.classList.remove('scroll-menu-main');
  // }
  // });


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
        <Col xs={12} sm={12} md={12} className="menu-side-bar">

          <ul className="menu-main">
              <li>
                <a href="#coffee">
                <i class="fa-solid fa-mug-saucer"></i>Cà phê</a>
              </li>
              <li>
                <a href="#tea"><i class="fa-solid fa-leaf"></i>Trà</a>
              </li>
              <li>
                <a href="#freeze"><i class="fa-solid fa-ice-cream"></i>Freeze</a>
              </li>
              <li>
                <a href="#phindi"><i class="fa-regular fa-face-smile-wink"></i>Phindi</a>
              </li>
              <li>
                <a href="#espresso"><i class="fa-solid fa-mug-hot"></i>Espresso</a>
              </li>
              <li>
                <a href="#cake"><i class="fa-solid fa-cake-candles"></i>Bánh</a>
              </li>
          </ul>

        </Col>

        {/* right-menu-products */}
        <Col xs={12} sm={12} md={12} className="right-menu-products">
          {/* Block menu item */}
          <div className="block-menu-item" id="coffee">
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
          <div className="block-menu-item" id="tea">
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
          <div className="block-menu-item" id="freeze">
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
          <div className="block-menu-item" id="phindi">
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
          <div className="block-menu-item" id="espresso">
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
          <div className="block-menu-item" id="cake">
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