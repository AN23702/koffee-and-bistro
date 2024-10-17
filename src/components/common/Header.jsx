import { Col, Container, Row } from "react-bootstrap";
import logoImg from "../../assets/images/logo.png"
import { Link } from "react-router-dom";

const Header = () => {
    const header = document.querySelector(".header")

    window.addEventListener('scroll', function() {
    if (window.scrollY > 0) {
        header.classList.add('scroll-header');
    } else {
        header.classList.remove('scroll-header');
    }
    });

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
                                    <a href="###" className="title-sub-menu-lv1">
                                    Tất cả
                                    </a>
                                </li>
                                <li className="sub-menu-lv1-child">
                                    <a href="###" className="title-sub-menu-lv1">
                                    Cà phê
                                    </a>
                                    <ul className="sub-menu-lv2">
                                    <li>
                                        <a href="####">Cà phê sữa đá</a>
                                    </li>
                                    <li>
                                        <a href="####">Cà phê bạc xỉu</a>
                                    </li>
                                    <li>
                                        <a href="####">Cà phê đen đá</a>
                                    </li>
                                    </ul>
                                </li>
                                <li className="sub-menu-lv1-child">
                                    <a href="###" className="title-sub-menu-lv1">
                                    Trà
                                    </a>
                                    <ul className="sub-menu-lv2">
                                    <li>
                                        <a href="####">Trà quả mọng anh đào</a>
                                    </li>
                                    <li>
                                        <a href="####">Trà sen vàng</a>
                                    </li>
                                    <li>
                                        <a href="####">Trà thạch đào</a>
                                    </li>
                                    <li>
                                        <a href="####">Trà thanh đào</a>
                                    </li>
                                    <li>
                                        <a href="####">Trà thạch vải</a>
                                    </li>
                                    <li>
                                        <a href="####">Trà xanh đậu đỏ</a>
                                    </li>
                                    </ul>
                                </li>
                                <li className="sub-menu-lv1-child">
                                    <a href="###" className="title-sub-menu-lv1">
                                    Freeze
                                    </a>
                                    <ul className="sub-menu-lv2">
                                    <li>
                                        <a href="####">Freeze quả mọng anh đào</a>
                                    </li>
                                    <li>
                                        <a href="####">Freeze trà xanh</a>
                                    </li>
                                    <li>
                                        <a href="####">Freeze socola</a>
                                    </li>
                                    <li>
                                        <a href="####">Freeze cookie and cream</a>
                                    </li>
                                    <li>
                                        <a href="####">Freeze caramel</a>
                                    </li>
                                    </ul>
                                </li>
                                <li className="sub-menu-lv1-child">
                                    <a href="###" className="title-sub-menu-lv1">
                                    Phindi
                                    </a>
                                    <ul className="sub-menu-lv2">
                                    <li>
                                        <a href="####">Phindi hạnh nhân</a>
                                    </li>
                                    <li>
                                        <a href="####">Phindi kem sữa</a>
                                    </li>
                                    <li>
                                        <a href="####">Phindi choco</a>
                                    </li>
                                    </ul>
                                </li>
                                <li className="sub-menu-lv1-child">
                                    <a href="###" className="title-sub-menu-lv1">
                                    Espresso
                                    </a>
                                    <ul className="sub-menu-lv2">
                                    <li>
                                        <a href="####">Espresso</a>
                                    </li>
                                    <li>
                                        <a href="####">Americano</a>
                                    </li>
                                    <li>
                                        <a href="####">Latte</a>
                                    </li>
                                    <li>
                                        <a href="####">Cappuccino</a>
                                    </li>
                                    <li>
                                        <a href="####">Caramel macchiato</a>
                                    </li>
                                    </ul>
                                </li>
                                <li className="sub-menu-lv1-child">
                                    <a href="###" className="title-sub-menu-lv1">
                                    Bánh
                                    </a>
                                    <ul className="sub-menu-lv2">
                                    <li>
                                        <a href="####">Bánh mì que pate</a>
                                    </li>
                                    <li>
                                        <a href="####">Bánh mì gà phomai</a>
                                    </li>
                                    <li>
                                        <a href="####">Bánh trà xanh</a>
                                    </li>
                                    <li>
                                        <a href="####">Bánh caramel</a>
                                    </li>
                                    <li>
                                        <a href="####">Bánh mousse đào</a>
                                    </li>
                                    <li>
                                        <a href="####">Bánh mousse cacao</a>
                                    </li>
                                    <li>
                                        <a href="####">Bánh socola</a>
                                    </li>
                                    <li>
                                        <a href="####">Bánh chuối</a>
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