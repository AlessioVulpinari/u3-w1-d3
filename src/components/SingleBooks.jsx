import { Badge, Card, Col } from "react-bootstrap"

const SingleBooks = (props) => (
  <Col key={props.asin}>
    <Card>
      <Card.Img variant='top' src={props.img} />
      <Card.Body className='d-flex flex-column justify-content-between bg-secondary'>
        <Card.Title>{props.title}</Card.Title>
        <Card.Text className='d-flex justify-content-between align-items-center'>
          <span>{props.category.charAt(0).toUpperCase() + props.category.slice(1)}</span>
          <Badge bg='success'>{props.price}</Badge>
        </Card.Text>
      </Card.Body>
    </Card>
  </Col>
)

export default SingleBooks
