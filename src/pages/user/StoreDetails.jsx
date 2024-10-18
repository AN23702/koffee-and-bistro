import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import { useParams } from 'react-router-dom';
import { urlStore } from '../../untils/variable';
import useCallApiStores from '../../hooks/useCallApiStores';


const StoreDetails = () => {

  const paramsStore = useParams("id");
  const urlDetailStore = urlStore + `/${paramsStore.id}`;

  const {data, isLoading} = useCallApiStores(urlDetailStore);

  if(isLoading) return <p>Loading...</p>

  return (
<>
  {/* Store details */}
  <div className="store-details">
    <Container>
      <Row>
        {/* img store */}
        <Col xs={12} sm={6} md={6} className="img-store">
          <img src={data.image1} alt="img store" />
          <img src={data.image2} alt="img store" />
          <img src={data.image3} alt="img store" />
          <img src={data.image4} alt="img store" />
          <img src={data.image5} alt="img store" />
        </Col>
        {/* store details right */}
        <Col xs={12} sm={6} md={6} className="store-details-right">
          <div className="store-details-right">
            {/* store name */}
            <h1 className="store-name">{data.name}</h1>
            {/* store introduce*/}
            <p className="store-introduce">
              {data.content}
            </p>
            {/* store address */}
            <h3>Địa chỉ</h3>
            <p className="store-address">
              {data.address}
            </p>
            {/* view map */}
            <a
              className="view-map"
              href={data.linkViewMap}
              target="_blank"
            >
              <p>Xem bản đồ</p>
            </a>
          </div>
        </Col>
      </Row>
    </Container>
  </div>
</>

  )
}

export default StoreDetails