import React from 'react'
import BackToTopBar from '../../components/common/BackToTopBar'
import MiniGame from '../../components/common/MiniGame'
import Messenger from '../../components/common/Messenger'
import imgNewsCard from '../../assets/images/470_crop_THUMBNAILS.jpg'
import { Col, Container, Row } from 'react-bootstrap'
import { useParams } from 'react-router-dom'
import { urlPost } from '../../untils/variable'
import useCallApiPosts from '../../hooks/useCallApiPosts'

const ContentNews = () => {

    const paramsNew = useParams("id");
    const urlContentNews = urlPost + `/${paramsNew.id}`;

    const {data, isLoading} = useCallApiPosts(urlContentNews);

    if(isLoading) return <p>Loading...</p>

  return (
    <>

    {/* Banner */}
    <div className='banner-news'>
        <img src={data.image} alt='banner news'></img>
    </div>

    {/* Content news */}
    <Container className='content-news'>
        <Row>
            <Col xs={12} sm={12} md={12} className='content-news-title'>
                <h1>
                    {data.title}
                </h1>
            </Col>

            <Col xs={12} sm={12} md={12} className='content-news-article'>
                <b>
                    {data.content1}
                </b>

                <p>
                    {data.content2}
                </p>
            </Col>
        </Row>
    </Container>

    {/* Back to top bar */}
    <BackToTopBar/>

    {/* mini game */}
    <MiniGame placement="bottom" name="MiniGame"/>

    {/* Messenger */}
    <Messenger/>
    </>
  )
}

export default ContentNews