import React from 'react';
import { Card, Col, Container, Row } from 'react-bootstrap';
import { CardBody, CardTitle } from 'reactstrap';

const dataProduct = [
  {
    productName: 'Cà chua không hạt',
    image: 'https://hoayeuthuong.com/hinh-hoa-tuoi/moingay/11894_ca-chua-kg.jpg',
    description: 'Hàng limited edition đến từ nông trại Đà Lạt.',
    originPrice: '50,000 vnđ/kg',
    salePrice: '41,000 vnđ/kg',
    src: '/product/productdetail/ca-chua',
  },
  {
    productName: 'Dưa leo ruột vàng',
    image: 'https://hoayeuthuong.com/hinh-hoa-tuoi/moingay/11896_dua-leo-lon-kg.jpg',
    description: 'Sản phẩm đặc sản của Nông Trại Vĩnh Long. Dưa ngọt, nhiều nước và bảo quản được thời gian lâu trong tủ lạnh.',
    originPrice: '20,000 vnđ',
    salePrice: '15,000 vnđ/kg',
    src: '/product/productdetail/ca-chua',
  },
  {
    productName: 'Rau cải thìa',
    image: 'https://hoayeuthuong.com/hinh-hoa-tuoi/moingay/11918_cai-thia-kg.jpg',
    description: 'Sản phẩm đặc sản của Nông Trại Vĩnh Long. Dưa ngọt, nhiều nước và bảo quản được thời gian lâu trong tủ lạnh.',
    originPrice: '41,800 vnđ',
    salePrice: '33,000 vnđ/kg',
    src: '/product/productdetail/ca-chua',
  },
  {
    productName: 'Cà chua không hạt',
    image: 'https://hoayeuthuong.com/hinh-hoa-tuoi/moingay/11894_ca-chua-kg.jpg',
    description: 'Hàng limited edition đến từ nông trại Đà Lạt.',
    originPrice: '50,000 vnđ/kg',
    salePrice: '41,000 vnđ/kg',
    src: '/product/productdetail/ca-chua',
  },
  {
    productName: 'Dưa leo ruột vàng',
    image: 'https://hoayeuthuong.com/hinh-hoa-tuoi/moingay/11896_dua-leo-lon-kg.jpg',
    description: 'Sản phẩm đặc sản của Nông Trại Vĩnh Long. Dưa ngọt, nhiều nước và bảo quản được thời gian lâu trong tủ lạnh.',
    originPrice: '20,000 vnđ',
    salePrice: '15,000 vnđ/kg',
    src: '/product/productdetail/ca-chua',
  },
  {
    productName: 'Rau cải thìa',
    image: 'https://hoayeuthuong.com/hinh-hoa-tuoi/moingay/11918_cai-thia-kg.jpg',
    description: 'Sản phẩm đặc sản của Nông Trại Vĩnh Long. Dưa ngọt, nhiều nước và bảo quản được thời gian lâu trong tủ lạnh.',
    originPrice: '41,800 vnđ',
    salePrice: '33,000 vnđ/kg',
    src: '/product/productdetail/ca-chua',
  },
  {
    productName: 'Cà chua không hạt',
    image: 'https://hoayeuthuong.com/hinh-hoa-tuoi/moingay/11894_ca-chua-kg.jpg',
    description: 'Hàng limited edition đến từ nông trại Đà Lạt.',
    originPrice: '50,000 vnđ/kg',
    salePrice: '41,000 vnđ/kg',
    src: '/product/productdetail/ca-chua',
  },
  {
    productName: 'Dưa leo ruột vàng',
    image: 'https://hoayeuthuong.com/hinh-hoa-tuoi/moingay/11896_dua-leo-lon-kg.jpg',
    description: 'Sản phẩm đặc sản của Nông Trại Vĩnh Long. Dưa ngọt, nhiều nước và bảo quản được thời gian lâu trong tủ lạnh.',
    originPrice: '20,000 vnđ',
    salePrice: '15,000 vnđ/kg',
    src: '/product/productdetail/ca-chua',
  },
  {
    productName: 'Rau cải thìa',
    image: 'https://hoayeuthuong.com/hinh-hoa-tuoi/moingay/11918_cai-thia-kg.jpg',
    description: 'Sản phẩm đặc sản của Nông Trại Vĩnh Long. Dưa ngọt, nhiều nước và bảo quản được thời gian lâu trong tủ lạnh.',
    originPrice: '41,800 vnđ',
    salePrice: '33,000 vnđ/kg',
    src: '/product/productdetail/ca-chua',
  },
];

const dataHavest = [
  {
    havestName: 'Nông Trại đà lạt vụ mùa xuân',
    ordered: 200,
    heart: 56,
    image: 'https://farmstay.com.vn/wp-content/uploads/2019/08/DL-trai-mat-2.jpg',
    description: 'Các loại rau củ của nông trại đà lạc mùa xuân',
    src: '/havests/havestdetail/',
  },
  {
    havestName: 'Nông Trại đà lạt vụ mùa hạ',
    ordered: 352,
    image: 'https://farmstay.com.vn/wp-content/uploads/2019/08/DL-trai-mat-4.jpg',
    description: 'Các loại rau củ của nông trại đà lạc mùa hạ',
    src: '/havests/havestdetail/',
  },
  {
    havestName: 'Nông Trại đà lạt vụ mùa thu',
    ordered: 123,
    image: 'https://farmstay.com.vn/wp-content/uploads/2019/08/DL-trai-mat-3.jpg',
    description: 'Các loại rau củ của nông trại đà lạc mùa đông',
    src: '/havests/havestdetail/',
  },
  {
    havestName: 'Nông Trại đà lạt vụ mùa đông',
    ordered: 431,
    image: 'https://farmstay.com.vn/wp-content/uploads/2019/08/DL-cau-dat-farm-3.jpg',
    description: 'Các loại rau củ của nông trại đà lạc mùa đông',
    src: '/havests/havestdetail/',
  },
];

export default function BodyProduction() {
  return (
    <>
      <div className="wrapper">
        <div className="section latest-offers">
          <Container>
            <h3 className="section-title">Best Deal Today</h3>
            <br />
            <Row>
              {dataProduct.map((ele) => {
                return (
                  <Col md="4">
                    <Card className="card-product card-plain">
                      <div className="card-image">
                        <a href={ele.src}>
                          <img alt="..." src={ele.image} />
                        </a>
                        <CardBody>
                          <div className="card-description">
                            <CardTitle tag="h5">
                              <a href={ele.src} class="mr-1 btn btn-link">
                                {ele.productName}
                              </a>
                            </CardTitle>
                            <p className="card-description">{ele.description}</p>
                          </div>
                          <div className="price">
                            <s className="mr-1">{ele.originPrice}</s>
                            <span className="text-danger">{ele.salePrice}</span>
                          </div>
                        </CardBody>
                      </div>
                    </Card>
                  </Col>
                );
              })}
            </Row>
            <h3 className="section-title">Top Havest Picked</h3>
            <br />
            <Row>
              {dataHavest.map((ele) => {
                return (
                  <Col md="4">
                    <Card className="card-product card-plain">
                      <div className="card-image">
                        <a href={ele.src}>
                          <img alt="..." src={ele.image} />
                        </a>
                        <CardBody>
                          <div className="card-description">
                            <CardTitle tag="h5">
                              <a href={ele.src} class="mr-1 btn btn-link">
                                {ele.havestName}
                              </a>
                            </CardTitle>
                            <p className="card-description">{ele.description}</p>
                          </div>
                          <h6 style={{ textAlign: 'right' }}>
                            Đã đặt <i className="fa fa-handshake-o" /> {ele.ordered}
                          </h6>
                        </CardBody>
                      </div>
                    </Card>
                  </Col>
                );
              })}
            </Row>
          </Container>
        </div>
      </div>
    </>
  );
}
