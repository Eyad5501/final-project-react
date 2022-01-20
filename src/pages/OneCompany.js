import { useContext } from "react"
import { Button, Card, Col, Image, Row } from "react-bootstrap"
import { useParams } from "react-router"
import { Link } from "react-router-dom"
import SQBContext from "../utils/SQBContext"
import RatingStars from "../components/RatingStars"
import AddComment from "../components/AddComment"
import  pexelsphoto from "../image/pexelskaboompics.jpg"
import video from "../image/production.mp4"
function OneCompany() {
  const { companyid } = useParams()
  const { companies } = useContext(SQBContext)

  if (companies.length === 0) return <h1>Loading...</h1>
  const company = companies.find(company => company._id === companyid)

  return (
    <>
     <img className="companyI" src={pexelsphoto} id="pexelskaboompics.jpg"/>
     <div className="AA" style={{width:"70%"}}>
     <div className="Ap" style={{marginTop:"20px"}}>
      <Row
        style={{
          backgroundImage: `linear-gradient(rgba(2,25,160, 0.5), rgba(255,255,255, 0.3)),  url("${company.photo}")`,
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          display: "flex",
          alignItems: "center",
          color: "white",
        }}
      >
        <Col md="3">
          <img variant="top" src={company.photo} width="100%" style={{ borderRadius: "90px", margin: "40px" }} />
        </Col>
        <Col md={{ offset: 1 }}>
          <h1>{company.nameCompany}</h1>
          {/* <div className="mb-2">
            {film.genres.map(genre => (
              <span>{genre.name}</span>
            ))}
          </div> */}
          <h3>Rating</h3>
          <Row className="d-flex align-items-center">
            <Col md="3">
              <span>{company.ratingAverage.toFixed(1)} / 5</span>
              <span className="ms-1">({company.ratings.length})</span>
            </Col>

            <Col>
              <RatingStars companyid={company._id} />
            </Col>
          </Row>
        </Col>
      </Row>
      </div>
      <div className="AC">
      <Row className="mt-5">
        <h3 className="name">Field</h3>
        
        {company.fields.map(field => (
          <Col md="6">
            <Card border="light" style={{ maxWidth: "220px" ,width:"100vh",backgroundColor:"#ACACAC" }}>
              
                <Card.Img
                  variant="top"
                  src={field.photo}
                  height="220px"
                  style={{ borderRadius: "30px", objectFit: "cover",width:"25vh" ,marginTop:"40px",margin:"auto" }}
                />
           
              <Card.Body>
               
                  <Card.Title className="name" style={{ margin: "auto",marginTop:"5px",marginBottom:"10px"  }}>{field.typeField}</Card.Title>
                
             
                <Button variant="success" className="me-2 text-black" style={{backgroundColor:"#F4F3F0",textDecoration: "none",
            borderColor: "gray",color:"#797978",padding:"10px", width:"60%",margin: "auto"}}><Link className="text-black" style={{ textDecoration: "none" }} to={`/${companyid}/order/${field._id}`}><h6>Order</h6> </Link> 
                
                 </Button>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
      </div>
      {localStorage.tokenAdmins ? (
        <>
          <Row className="mt-3"style={{margin:"auto",width:"90%"}}>
           
            <div className="Ap" >
            <h3 style={{marginRight:"580px",marginBottom:"10px"}}className="name">Comments</h3>
            {company.comments.map(comment => (
              <Card  style={{ margin:"auto", maxWidth: 1100,width:"80%",backgroundColor:"#ACACAC"}}>
                <Row style={{ height:"20vh",marginBottom:"150px"}}>
                  <Row style={{ alignItems: "center" }}>
                    <Col md="6"  >
                      <Image className="image rounded-circle" src={comment.owner.avatar} width="80px" roundedCircle />
                    </Col>
                    <Col className="name" style={{marginRight:"100px",width:"20%"}} >
                      {comment.owner.firstName} {comment.owner.lastName}
                    </Col>
                  </Row>
                  <Row  >
                    <Col  style={{ maxWidth: 1100,width:"70%",backgroundColor:"#EBEBEB",borderRadius:"6px",padding:"5px",marginRight:"40px",marginBottom:"20px"}} md={{ offset: 5}}><h6>{comment.comment}</h6></Col>
                  </Row>
                </Row>
              </Card>
            ))}
             </div>
          </Row>
          
          <Row>
            <AddComment companyid={company._id} />
          </Row>
          
        </>
      ) : null}
      </div>
    </>
  )
}

export default OneCompany
