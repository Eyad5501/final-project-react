import { useContext } from "react"
import { Card, Col, Row } from "react-bootstrap"
import { Link } from "react-router-dom"
import SQBContext from "../utils/SQBContext"

function CompanyList(props) {
  const { listTitle } = props
  let {companies } = useContext(SQBContext)
  
 if(!companies) return <h3> Loading.. </h3>

 companies = companies.sort((a, b) => b.ratingAverage - a.ratingAverage)
 companies = companies.slice(0, 7)
  return (
    <>
      <Row>
        <h4 className="mt-5 mb-4">{listTitle}</h4>
      </Row>
      <Row>
        {companies.map(company => (
          <Col key={company._id}>
            <Card border="light" style={{ maxWidth: "200px" }}>
              <Link to={`/company/${company._id}`}>
                <Card.Img variant="top" src={company.photo} height="220px" style={{ borderRadius: "10px" }} />
              </Link>
              <Card.Body>
                <Link to={`/company/${company._id}`} className="text-black" style={{ textDecoration: "none" }}>
                  <Card.Title>{company.nameCompany}</Card.Title>
                </Link>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </>
  )
}

export default CompanyList
