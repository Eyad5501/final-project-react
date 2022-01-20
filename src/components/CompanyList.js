import { useContext } from "react"
import { Card, Col, Row,Container } from "react-bootstrap"
import { Link } from "react-router-dom"
import SQBContext from "../utils/SQBContext"
import  pexelsphoto from "../image/pexels-photo.jpg"
import video from "../image/production.mp4"
import"./CompanyList.css"
function CompanyList() {
  
  let {companies } = useContext(SQBContext)
  
 if(!companies) return <h3> Loading.. </h3>

 companies = companies.sort((a, b) => b.ratingAverage - a.ratingAverage)
 companies = companies.slice(0, 7)
  return (
    <>
     <Container  >
     <img className="companyI" src={pexelsphoto} id="pexels-photo.jpg"/>
     <div className="companyAe">
     <Row className="d-flex align-items-center md-2">
       <Col md="5">
    <video className="companyV"src={video} autoPlay muted loop /> 
    </Col>
    <Col >
    <h1>Welcome To Our Institution </h1>
    </Col>
    </Row>
  <div className="companyC" style={{marginTop:"20px"}}>
      <Row md="2" >
        {companies.map(company => (
          <Col  key={company._id}>
            <Card   className=" mt-3 " style={{width:"100%",height:"50vh", backgroundColor:"rgb(228, 228, 228)"}}>
              <Link to={`/company/${company._id}`}>
                <Card.Img variant="top" src={company.photo}  style={{width:"85%",height:"30vh",marginTop:"20px" }} />
              </Link>
              <Card.Body>
                <Link to={`/company/${company._id}`} className="text-black" style={{ textDecoration: "none" }}>
                  <Card.Title style={{marginTop:"30px",backgroundColor:"#F4F3F0",
            borderRadius:"6px",padding:"10px"}}>{company.nameCompany}</Card.Title>
                </Link>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
      </div>
      </div>
      
      </Container>
    </>
  )
}

export default CompanyList
