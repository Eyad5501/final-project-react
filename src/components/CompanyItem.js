import { Card, Col } from "react-bootstrap"
import { Link } from "react-router-dom"

function CompanyItem(props) {
  const { company } = props
  return (
    <Col>
      <Card border="light" style={{ maxWidth: "200px" }}>
        <Link to={`/company/${company._id}`}>
          <Card.Img variant="top" src={company.photo} height="220px" style={{ borderRadius: "10px" }} />
        </Link>
        <Card.Body>
          <Link to={`/Company/${company._id}`} className="text-black" style={{ textDecoration: "none" }}>
            <Card.Title>{company.nameCompany}</Card.Title>
          </Link>
        </Card.Body>
      </Card>
    </Col>
  )
}

export default CompanyItem
