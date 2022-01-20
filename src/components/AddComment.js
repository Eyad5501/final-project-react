import { useContext } from "react"
import { Col, Form, Button, Row,Container } from "react-bootstrap"
import SQBContext from "../utils/SQBContext"
import  pexelsphoto from "../image/pexels-photo.jpg"

function AddComment(props) {
  const { addComment } = useContext(SQBContext)
  const { companyid} = props
  return (
    <Container >
      <div className="Ap">
    <div className="ms-4">
      <h1 style={{marginRight:"580px"}}className="name">Add Comment</h1>
      <Form className="mt-5" onSubmit={e => addComment(e, companyid)} >
      
        <Form.Group as={Row} style={{margin:"auto"}}  >
        <img src={pexelsphoto} id="pexels-photo.jpg" className="rounded-circle"  style={{width:"30%"}}/>
          <Form.Label column md="3"style={{marginTop:"50px"}}>
           <h3 className="name">Comment</h3> 
          </Form.Label>
          
          <Col style={{marginTop:"50px"}} >
            <Form.Control  as="textarea" name="comment" required />
          </Col>
        </Form.Group>
        <Form.Group as={Row} className="my-4">
          <Col md={{ span: 10, offset: 2 }}>
            <Button style={{backgroundColor:"#F4F3F0",
            borderColor: "gray",color:"#797978",padding:"10px", width:"35%", marginLeft:"300px"}} type="submit">Add</Button>
          </Col>
        </Form.Group>
      </Form>
    </div>
</div>
    </Container>
  )
}

export default AddComment
