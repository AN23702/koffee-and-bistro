import React from 'react'
import BackToTopBar from '../../components/common/BackToTopBar'
import MiniGame from '../../components/common/MiniGame'
import Messenger from '../../components/common/Messenger'
import { Col, Container, Row } from 'react-bootstrap'
import imgNewsCard from '../../assets/images/470_crop_THUMBNAILS.jpg'
import { Link } from "react-router-dom";
import useCallApiPosts from '../../hooks/useCallApiPosts'
import { urlPost } from '../../untils/variable'

const News = () => {

    const {data, isLoading} = useCallApiPosts(urlPost);

  
    // check api call xong chua
    if(isLoading == true) return <p>Loading...</p>
    
    
    // check san pham co ton tai khong
    if (data.length == 0) return <p>không tồn tại bản tin</p>

  return (
<>
    {/* news title */}
    <div className="background-img">
        <div className="fix-background-img background-img-news" />

        <Container>
            <Row>
                <Col xs={12} sm={12} md={12} className="news-title">
                    <h3 class="animate-charcter">TIN TỨC</h3>
                </Col>
            </Row>
        </Container>
    </div>

    {/* news */}
    <div className="news">
        <Container>
        <Row>

            {data.map((post) =>{
                return(
                    // news card
                    <Col xs={12} sm={4} md={4} className="news-card" key={post.id}>
                    {/* img news card */}
                    <Link to='/content-news'>
                        <img className="img-news-card" src={post.image} alt="img news"/>
                    </Link>
    
                    {/* news title */}
                    <h1 className="news-card-title">
                        {post.title}
                    </h1>
                    {/* date */}
                    <div className="date">
                        <i className="fa-solid fa-calendar" />
                        {post.time}
                    </div>
                </Col>
                )
            })}


                    
        </Row>
        </Container>
    </div>

    {/* Back to top bar */}
    <BackToTopBar/>

    {/* mini game */}
    <MiniGame placement="bottom" name="MiniGame"/>

    {/* Messenger */}
    <Messenger/> 
</>

  )
}

export default News