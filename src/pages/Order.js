import { useContext } from "react"
import SQBContext from "../utils/SQBContext"
import { Col, Form, Button, Row ,Container} from "react-bootstrap"
import { useParams } from "react-router-dom"
import"./Order.css"
import pexelsphoto from "../image/pexels-photo.jpg"
import video from "../image/login.mp4"

function Orders() {
  const { addOrder } = useContext(SQBContext)
  const {companyid,fieldid} =useParams()

  return (
    <>
     <Container >

    <img className="IT" src={pexelsphoto} id="pexels-photo.jpg"/>
    <div className="AAUu">
    
       <div className="AAAa">
      <div className="App"> <h1 className="name">Add order</h1></div>
      
     
        <Form className="mt-2 " onSubmit={e => addOrder(e,companyid,fieldid)}>
        <div className="ACc" >
          <Form.Group as={Row} className="mb-4 mt-3 ">
            <Form.Label column md="4 "style={{ marginRight:"100px"}}>
              <h4>Name Project</h4>
            </Form.Label>
            <Col md="6">
              <Form.Control style={{width:"100%",height:"6vh"}}  type="text" name="nameP" required />
            </Col>
          </Form.Group>
          <Form.Group as={Row} className="mb-4">
            <Form.Label column md="4"style={{marginRight:"100px"}}>
             <h4>Description Project</h4> 
            </Form.Label>
            <Col md="6">
              <Form.Control as="textarea" name="descriptionP" required />
            </Col>
          </Form.Group>
          <Form.Group as={Row} className="mb-4">
            <Form.Label column md="4" style={{ marginRight:"100px"}}>
             <h4>Poster Project</h4> 
            </Form.Label>
            <Col md="6">
              <Form.Control style={{width:"100%",height:"6vh"}} type="url" name="posterP" required />
            </Col>
          </Form.Group>
          <Form.Group as={Row} className="mb-4">
            <Form.Label column md="4" style={{ marginRight:"100px"}}>
             <h4>Area Project</h4> 
            </Form.Label>
            <Col md="6">
              <Form.Control   style={{width:"100%",height:"6vh"}} type="number" name="areaP" required />
            </Col>
          </Form.Group>
          <Form.Group as={Row} className="mb-4">
            <Form.Label column md="4" style={{ marginRight:"100px"}}>
              <h4>Location Project</h4>
            </Form.Label>
            <Col md="6">
              <Form.Control style={{width:"100%",height:"6vh"}}  type="text" name="LocationP" required />
            </Col>
          </Form.Group>
          <Form.Group as={Row} className="mt-5">
            <Col>
            <button className="btn" style={{backgroundColor:"#F4F3F0",
            borderColor: "gray",color:"#797978",padding:"5px", width:"30%", marginLeft:"350px"}}type="submit"><h4>Add Order</h4></button>
            </Col>
          </Form.Group>
          </div>
        </Form>
      </div>
         </div>
      
      </Container>
    </>
  )
}

export default Orders
