import React from 'react';
import { Link } from 'react-router-dom';
import {
  Card,
  Button,
  CardTitle,
  Row,
  Col,
  CardImg,
  CardBody,
  CardText,
  CardFooter,
  Badge,
  Container
} from 'reactstrap';
import './Style.sass';

function CardComponent(props) {
  const { data } = props;
  return (
    <Container className="center">
      <Row>
        {data &&
          data.map((data, index) => (
            <Col sm="3" key={index} className="space">
              <Card>
                <CardImg src={data.show.image.medium} />
                <CardBody className="card">
                  <CardTitle>{data.show.name}</CardTitle>
                  <CardText>
                    Score
                    <Badge color="secondary">{data.score}</Badge>
                  </CardText>
                </CardBody>
                <CardFooter className="footer">
                  <Link to={`/batman/${data.show.id}`}>
                    <Button>Look</Button>
                  </Link>
                </CardFooter>
              </Card>
            </Col>
          ))}
      </Row>
    </Container>
  );
}

export default CardComponent;
