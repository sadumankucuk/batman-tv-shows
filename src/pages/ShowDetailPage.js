import React, { useEffect } from 'react';
import {
  Media,
  Badge,
  Breadcrumb,
  BreadcrumbItem,
  Row,
  Col,
  Container
} from 'reactstrap';
import { connect } from 'react-redux';
import { fetchBatmanShow } from '../redux/actions/batmanShowsActions';

function ShowDetailPage(props) {
  const { fetchBatmanShow, imageModel, match, show } = props;

  useEffect(() => {
    fetchBatmanShow(match.params.id);
  }, [fetchBatmanShow, match]);

  return (
    <>
      <Breadcrumb>
        <BreadcrumbItem>
          <a href="/">Home</a>
        </BreadcrumbItem>
        <BreadcrumbItem active>{show.name}</BreadcrumbItem>
      </Breadcrumb>
      <Container>
        <Row>
          <Media style={{ margin: ' 50px' }}>
            <Col sm="4" xs="12">
              <Media left>
                <Media
                  src={imageModel.image.medium}
                  alt="Generic placeholder image"
                />
                <h6>
                  Language <Badge color="secondary">{show.language}</Badge>
                </h6>
              </Media>
            </Col>
            <Col sm="8" xs="12">
              <Media body>
                <Media heading>{show.name}</Media>
                <Badge color="info">{show.type}</Badge>
                <div>{show.summary}</div>
              </Media>
            </Col>
          </Media>
        </Row>
      </Container>
    </>
  );
}

const mapStateToProps = state => {
  const { loadingShow, show, errorShow } = state.show;
  const imageModel = {
    image: { ...show.image }
  };
  console.log(show);
  return { loadingShow, show, errorShow, imageModel };
};

const mapDispatchToProps = {
  fetchBatmanShow
};

export default connect(mapStateToProps, mapDispatchToProps)(ShowDetailPage);
