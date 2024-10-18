import { Col, Container, Row } from "react-bootstrap";
import logoImg from "../../assets/images/logo.png"
import { Link } from "react-router-dom";

const Header = () => {

  return (
    <div className="header">
        <Container>
            <Row>
                <Col xs={12} sm={12} md={12} className="fix-display-header">
                    {/* logo */}
                    <Link to="/" className="logo">
                        <img src={logoImg} alt="logo-img" />
                    </Link>

                    {/* header menu */}
                    <ul className="header-menu">
                        <li className="hover-menu">
                        <Link to="/product" className="menu">
                            Menu
                            <i className="fa-solid fa-caret-down" />
                        </Link>
                        {/* sub-menu */}
                        <div className="sub-menu-lv1">
                            <div className="container">
                            <div className="row">
                                <ul className="col-12 col-sm-12 col-md-12 sub-menu-content">

                                <li className="sub-menu-lv1-child">
                                    <p className="title-sub-menu-lv1">
                                    Cà phê
                                    </p>
                                    <ul className="sub-menu-lv2">
                                    <li>
                                        <a href="http://localhost:5174/product-details/1">Cà phê sữa đá</a>
                                    </li>
                                    <li>
                                        <a href="http://localhost:5174/product-details/2">Cà phê bạc xỉu</a>
                                    </li>
                                    <li>
                                        <a href="http://localhost:5174/product-details/3">Cà phê đen đá</a>
                                    </li>
                                    </ul>
                                </li>

                                <li className="sub-menu-lv1-child">
                                    <p className="title-sub-menu-lv1">
                                    Trà
                                    </p>
                                    <ul className="sub-menu-lv2">
                                    <li>
                                        <a href="http://localhost:5174/product-details/9">Trà quả mọng anh đào</a>
                                    </li>
                                    <li>
                                        <a href="http://localhost:5174/product-details/4">Trà sen vàng</a>
                                    </li>
                                    <li>
                                        <a href="http://localhost:5174/product-details/5">Trà thạch đào</a>
                                    </li>
                                    <li>
                                        <a href="http://localhost:5174/product-details/6">Trà thanh đào</a>
                                    </li>
                                    <li>
                                        <a href="http://localhost:5174/product-details/7">Trà thạch vải</a>
                                    </li>
                                    <li>
                                        <a href="http://localhost:5174/product-details/8">Trà xanh đậu đỏ</a>
                                    </li>
                                    </ul>
                                </li>
                                <li className="sub-menu-lv1-child">
                                    <p className="title-sub-menu-lv1">
                                    Freeze
                                    </p>
                                    <ul className="sub-menu-lv2">
                                    <li>
                                        <a href="http://localhost:5174/product-details/14">Freeze quả mọng anh đào</a>
                                    </li>
                                    <li>
                                        <a href="http://localhost:5174/product-details/10">Freeze trà xanh</a>
                                    </li>
                                    <li>
                                        <a href="http://localhost:5174/product-details/11">Freeze socola</a>
                                    </li>
                                    <li>
                                        <a href="http://localhost:5174/product-details/12">Freeze cookie and cream</a>
                                    </li>
                                    <li>
                                        <a href="http://localhost:5174/product-details/13">Freeze caramel</a>
                                    </li>
                                    </ul>
                                </li>
                                <li className="sub-menu-lv1-child">
                                    <p className="title-sub-menu-lv1">
                                    Phindi
                                    </p>
                                    <ul className="sub-menu-lv2">
                                    <li>
                                        <a href="http://localhost:5174/product-details/15">Phindi hạnh nhân</a>
                                    </li>
                                    <li>
                                        <a href="http://localhost:5174/product-details/16">Phindi kem sữa</a>
                                    </li>
                                    <li>
                                        <a href="http://localhost:5174/product-details/17">Phindi choco</a>
                                    </li>
                                    </ul>
                                </li>
                                <li className="sub-menu-lv1-child">
                                    <p className="title-sub-menu-lv1">
                                    Espresso
                                    </p>
                                    <ul className="sub-menu-lv2">
                                    <li>
                                        <a href="http://localhost:5174/product-details/18">Espresso</a>
                                    </li>
                                    <li>
                                        <a href="http://localhost:5174/product-details/19">Americano</a>
                                    </li>
                                    <li>
                                        <a href="http://localhost:5174/product-details/20">Latte</a>
                                    </li>
                                    <li>
                                        <a href="http://localhost:5174/product-details/21">Cappuccino</a>
                                    </li>
                                    <li>
                                        <a href="http://localhost:5174/product-details/22">Caramel macchiato</a>
                                    </li>
                                    </ul>
                                </li>
                                <li className="sub-menu-lv1-child">
                                    <p className="title-sub-menu-lv1">
                                    Bánh
                                    </p>
                                    <ul className="sub-menu-lv2">
                                    <li>
                                        <a href="http://localhost:5174/product-details/23">Bánh mì que pate</a>
                                    </li>
                                    <li>
                                        <a href="http://localhost:5174/product-details/24">Bánh mì gà phomai</a>
                                    </li>
                                    <li>
                                        <a href="http://localhost:5174/product-details/25">Bánh trà xanh</a>
                                    </li>
                                    <li>
                                        <a href="http://localhost:5174/product-details/26">Bánh caramel</a>
                                    </li>
                                    <li>
                                        <a href="http://localhost:5174/product-details/27">Bánh mousse đào</a>
                                    </li>
                                    <li>
                                        <a href="http://localhost:5174/product-details/28">Bánh mousse cacao</a>
                                    </li>
                                    <li>
                                        <a href="http://localhost:5174/product-details/29">Bánh socola</a>
                                    </li>
                                    <li>
                                        <a href="http://localhost:5174/product-details/30">Bánh chuối</a>
                                    </li>
                                    </ul>
                                </li>
                                </ul>
                            </div>
                            </div>
                        </div>
                        </li>
                        <li>
                            <Link to='/bartending-at-home'>
                            Pha chế tại nhà</Link>
                        </li>
                        <li>
                            <Link to='/store'>Cửa hàng</Link>
                        </li>
                        <li>
                            <Link to='/news'>Tin tức</Link>
                        </li>
                        <li>
                            <Link to='/about-us'>Về chúng tôi</Link>
                        </li>
                    </ul>

                    {/* search */}
                    <div className="search">
                        <input type="text" placeholder="Tìm kiếm" />
                        <button>
                        <i className="fa-solid fa-magnifying-glass" />
                        </button>
                    </div>
                </Col>
            </Row>
        </Container>
    </div>
  )
}

export default Header