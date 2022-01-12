import { useContext } from "react"
import { Carousel, Row, Button } from "react-bootstrap"

import SQBContext from "../utils/SQBContext"

function Showcase() {
 

  return (
    <Row>
     <Carousel variant="dark">
  <Carousel.Item>
    <img
      className="d-block w-100"
      src="https://images.pexels.com/photos/8518623/pexels-photo-8518623.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
      alt="First slide"
    />
    <Carousel.Caption>
      <h5>First slide label</h5>
      <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src="https://images.pexels.com/photos/5324892/pexels-photo-5324892.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
      alt="Second slide"
    />
    <Carousel.Caption>
      <h5>Second slide label</h5>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src="https://images.pexels.com/photos/3182833/pexels-photo-3182833.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
      alt="Third slide"
    />
    <Carousel.Caption>
      <h5>Third slide label</h5>
      <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
    </Carousel.Caption>
  </Carousel.Item>
</Carousel>

    </Row>
  )
}

export default Showcase