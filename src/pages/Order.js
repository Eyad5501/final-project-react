import { useContext } from "react"
import SQBContext from "../utils/SQBContext"
import { Col, Form, Button, Row } from "react-bootstrap"
import { Link, useParams } from "react-router-dom"
function Orders() {
  const { addOrder } = useContext(SQBContext)
  const {companyid,fieldid} =useParams()

  return (
    <>
      <div className="ms-4">
        <h1>Add order</h1>
        <Form className="mt-5" onSubmit={e => addOrder(e,companyid,fieldid)}>
          <Form.Group as={Row} className="mb-3">
            <Form.Label column md="2">
              nameP
            </Form.Label>
            <Col md="6">
              <Form.Control as="textarea" name="nameP" required />
            </Col>
          </Form.Group>
          <Form.Group as={Row} className="mb-3">
            <Form.Label column md="2">
              descriptionP
            </Form.Label>
            <Col md="6">
              <Form.Control as="textarea" name="descriptionP" required />
            </Col>
          </Form.Group>
          <Form.Group as={Row} className="mb-3">
            <Form.Label column md="2">
              posterP
            </Form.Label>
            <Col md="6">
              <Form.Control as="textarea" name="posterP" required />
            </Col>
          </Form.Group>
          <Form.Group as={Row} className="mb-3">
            <Form.Label column md="2">
              areaP
            </Form.Label>
            <Col md="6">
              <Form.Control as="textarea" name="areaP" required />
            </Col>
          </Form.Group>
          <Form.Group as={Row} className="mb-3">
            <Form.Label column md="2">
              LocationP
            </Form.Label>
            <Col md="6">
              <Form.Control as="textarea" name="LocationP" required />
            </Col>
          </Form.Group>
          <Form.Group as={Row} className="my-4">
            <Col md={{ span: 10, offset: 2 }}>
              <Button type="submit">AddOrder</Button>
            </Col>
          </Form.Group>
        </Form>
      </div>
    </>
  )
}

export default Orders
