import { useContext } from "react"
import { Button, Card, Col, Image, Row } from "react-bootstrap"
import { useParams } from "react-router"
import { Link } from "react-router-dom"
import SQBContext from "../utils/SQBContext"
import { MdFavorite, MdOutlineFavoriteBorder } from "react-icons/md"
import RatingStars from "../components/RatingStars"
import AddComment from "../components/AddComment"

function OneCompany() {
  const { companyid } = useParams()
  const { companies } = useContext(SQBContext)

  if (companies.length === 0) return <h1>Loading...</h1>
  const company = companies.find(company => company._id === companyid)

  return (
    <>
      <Row
        style={{
          backgroundImage: `linear-gradient(rgba(2,25,160, 0.5), rgba(255,255,255, 0.3)),  url("${company.poster}")`,
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          display: "flex",
          alignItems: "center",
          color: "white",
        }}
      >
        <Col md="4">
          <img variant="top" src={company.photo} width="100%" style={{ borderRadius: "10px", margin: "20px" }} />
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
            <Col md="2">
              <span>{company.ratingAverage.toFixed(1)} / 5</span>
              <span className="ms-2">({company.ratings.length})</span>
            </Col>

            <Col>
              <RatingStars companyid={company._id} />
            </Col>
          </Row>
        </Col>
      </Row>
      <Row className="mt-5">
        <h3>Field</h3>
        {company.fields.map(field => (
          <Col md="2">
            <Card border="light" style={{ maxWidth: "200px" }}>
              <Link to={`/field/${field._id}`}>
                <Card.Img
                  variant="top"
                  src={field.photo}
                  height="220px"
                  style={{ borderRadius: "10px", objectFit: "cover" }}
                />
              </Link>
              <Card.Body>
                <Link to={`/field/${field._id}`} className="text-black" style={{ textDecoration: "none" }}>
                  <Card.Title>{field.typeField}</Card.Title>
                </Link>
              
                <Button variant="success" className="me-2"><Link to={`/${companyid}/order/${field._id}`}> Order</Link> 
                
                 </Button>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
      {localStorage.tokenAdmins ? (
        <>
          <Row className="mt-5">
            <h3>Comments</h3>

            {company.comments.map(comment => (
              <Card style={{ margin: 20, maxWidth: 1100 }}>
                <Row>
                  <Row style={{ display: "flex", alignItems: "center" }}>
                    <Col md="1">
                      <Image src={comment.owner.avatar} width="80px" roundedCircle />
                    </Col>
                    <Col>
                      {comment.owner.firstName} {comment.owner.lastName}
                    </Col>
                  </Row>
                  <Row>
                    <Col md={{ offset: 1 }}>{comment.comment}</Col>
                  </Row>
                </Row>
              </Card>
            ))}
          </Row>
          <Row>
            <AddComment companyid={company._id} />
          </Row>
        </>
      ) : null}
    </>
  )
}

export default OneCompany
