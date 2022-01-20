import { margin } from "@mui/system"
import { Card, Col, Container } from "react-bootstrap"
import { Link } from "react-router-dom"
import  pexelsphoto from "../image/pexelskaboompics.jpg"

function CompanyItem(props) {
  const { company } = props
  return (
    <><div>
    <img className="companyI" src={pexelsphoto} id="pexels-photo.jpg" />
    </div>
    <div style={{marginTop:"10px",height:"80vh"}} >
    <div className="A" style={{marginBottom:"100px",marginTop:"10px"}}>
    <img className="companyI" src={pexelsphoto} id="pexels-photo.jpg"/>
    <Container className="companyA">
      
      
  
    <Col>
      <Card border="light" style={{ maxWidth: "200px", margin:"auto",borderRadius: "10px"}}>
        <Link to={`/company/${company._id}`}>
          <Card.Img variant="top" src={company.photo} height="220px" style={{ borderRadius: "10px",margin:"auto" }} />
        </Link>
        <Card.Body>
          <Link to={`/Company/${company._id}`} className="text-black" style={{ textDecoration: "none" ,margin:"auto"}}>
            <Card.Title>{company.nameCompany}</Card.Title>
          </Link>
        </Card.Body>
      </Card>
    </Col>
    
    </Container>
    </div>
    </div>
    </>
  )
}

export default CompanyItem
